import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import UserRegister from "@/core/user/services/userRegister";
import UserInPg from "@/external/db/userInPg";
import CryptoPassword from "@/external/auth/cryptoPassword";
import UsersController from "@/external/api/usersController";
import SessionsController from "@/external/api/sessionsController"
import UserLogin from "@/core/user/services/userLogin"
import GetProductsById from "@/core/product/services/getProductsById"
import ProductByIdController from "@/external/api/productByIdController"
import UserMiddleware from "@/external/api/userMiddleware"

const app = express()
const port = process.env.API_PORT ?? 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(port, () => {
    console.log(`🔥 Servidor rodando na porta ${port}`)
})

// ------------------------- Rotas abertas

const repositoryUser = new UserInPg()
const cryptoProvider = new CryptoPassword()
const userRegister = new UserRegister(repositoryUser, cryptoProvider)
const loginUser = new UserLogin(
    repositoryUser,
    cryptoProvider
)

new UsersController(app, userRegister)
new SessionsController(app, loginUser)

// ------------------------- Rotas protegidas

// @ts-ignore
const middlewareUser = new UserMiddleware(repositoryUser)
const getProductById = new GetProductsById()

new ProductByIdController(app, getProductById, [middlewareUser])