// Na arquitetura hexagonal esta interface é uma porta
// A porta faz parte do core da sua app

export default interface CryptographyProvider {
    encrypt(password: string): string
    compare(password: string, encryptedPassword: string): boolean
}