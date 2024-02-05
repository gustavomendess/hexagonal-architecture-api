import UseCase from "@/core/shared/useCase";
import User from "@/core/user/model/user";
import Id from "@/core/shared/id";
import CryptographyProvider from "@/core/user/services/cryptographyProvider";
import Errors from "@/core/shared/errors";
import UserRepository from "@/core/user/services/userRepository";
export default class UserRegister implements UseCase<User, void> {
    constructor(
        private userRepository: UserRepository,
        private cryptoProvider: CryptographyProvider
    ) {
    }

    async execute(user: User): Promise<void> {
        const encryptedPassword = this.cryptoProvider.encrypt(user.password)
        const existentUser = await this.userRepository.findByEmail(user.email)

        if (existentUser) throw new Error(Errors.USER_ALREADY_EXISTS)

        const newUser: User = {
            id: Id.buildHash(),
            name: user.name,
            email: user.email,
            password: encryptedPassword
        }

        this.userRepository.insert(newUser)

        console.log(`\n\n${JSON.stringify(newUser)}`)
    }
}