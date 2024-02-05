import UseCase from "@/core/shared/useCase"
import User from "@/core/user/model/user"
import UserRepository from "@/core/user/services/userRepository"
import Errors from "@/core/shared/errors"
import CryptographyProvider from "@/core/user/services/cryptographyProvider"

export type UserLoginEntrance = {
    email: string,
    password: string
}
export default class UserLogin implements UseCase<UserLoginEntrance, User> {
    constructor(
        private repository: UserRepository,
        private providerCrypto: CryptographyProvider
    ) {
    }
    async execute(entrance: UserLoginEntrance): Promise<User> {
        const existentUser = await this.repository.findByEmail(entrance.email)

        if(!existentUser) throw new Error(Errors.USER_NOT_FOUND)

        const samePassword = this.providerCrypto.compare(
            entrance.password,
            existentUser.password!
        )

        if(!samePassword) throw Error(Errors.WRONG_PASSWORD)

        return { ...existentUser }
    }

}