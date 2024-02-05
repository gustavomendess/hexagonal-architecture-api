import { Express } from "express";
import UserRegister from "@/core/user/services/userRegister";

export default class UsersController {
    constructor(
        server: Express,
        useCase: UserRegister
    ) {
        server.post('/api/users/register', async (request, response) => {
            try {
                await useCase.execute({
                    name: request.body.name,
                    email: request.body.email,
                    password: request.body.password,
                })

                response.status(201).send()
            } catch(error: any) {
                response.status(400).send(error.message)
            }
        })
    }
}