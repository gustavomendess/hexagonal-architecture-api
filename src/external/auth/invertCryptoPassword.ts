import CryptographyProvider from "@/core/user/services/cryptographyProvider";

// Na arquitetura hexagonal esta classe é um adaptador
// O adaptador não faz parte do core da aplicação
export default class InvertCryptoPassword implements CryptographyProvider{
    encrypt(password: string): string {
        return password.split('').reverse().join('')
    }

    compare(password: string, encryptedPassword: string): boolean {
        return this.encrypt(password) === encryptedPassword
    }
}