import CryptographyProvider from "@/core/user/services/cryptographyProvider";

export default class SpacePasswordCrypto implements CryptographyProvider {
    encrypt(password: string): string {
        return password.split('').join(' ')
    }

    compare(password: string, encryptedPassword: string): boolean {
        return this.encrypt(password) === encryptedPassword
    }
}