import { Request, Response, NextFunction } from "express"
import jwtProvider from "@/external/api/jwtProvider"
import User from "@/core/user/model/user"
import UserRepository from "@/core/user/services/userRepository"

export default function UserMiddleware(repository: UserRepository) {
    return async (request: Request, response: Response, next: NextFunction) => {
        const accessDenied = () => response.status(403).send('Token inválido')

        const token = request.headers.authorization?.replace('Bearer', '')

        if (!token) {
            accessDenied()
            return
        }

        const providerJwt = new jwtProvider(process.env.JWT_SECRET!)
        const userToken = providerJwt.getToken(token) as User
        const user = repository.findByEmail(userToken.email)

        if(!user) {
            accessDenied()
            return
        }

        (request as any).user = user

        next()
    }
}