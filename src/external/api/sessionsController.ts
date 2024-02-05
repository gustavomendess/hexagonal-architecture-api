import { Express } from "express";
import UserLogin from "@/core/user/services/userLogin"
import jwtProvider from "@/external/api/jwtProvider"

export default class SessionsController {
    constructor(
        server: Express,
        useCase: UserLogin
    ) {
        server.post('/api/users/login', async (request, response) => {
            try {
                const user = await useCase.execute({
                    email: request.body.email,
                    password: request.body.password,
                })

                const providerJwt = new jwtProvider(process.env.JWT_SECRET!)

                response.status(200).send({
                    success: true,
                    token: providerJwt.create(user)
                })
            } catch(error: any) {
                response.status(400).send(error.message)
            }
        })
    }
}