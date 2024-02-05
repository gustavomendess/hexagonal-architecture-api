import jwt from 'jsonwebtoken'

export default class jwtProvider {
    constructor(
        private secret: string
    ) {
    }
    create(data: string | object): string {
        return jwt.sign(data, this.secret, {
            expiresIn: '1h'
        })
    }

    getToken(token: string): string | object {
        return jwt.verify(token, this.secret)
    }
}