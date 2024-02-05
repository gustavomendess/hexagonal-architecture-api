import { Express } from "express";
import GetProductsById from "@/core/product/services/getProductsById"

export default class ProductByIdController {
    constructor(
        server: Express,
        useCase: GetProductsById,
        ...middlewares: any[]
    ) {
        server.post('/api/products/:id', ...middlewares, async (request, response) => {
            try {
                const product = await useCase.execute({
                    productId: (request.params as any).id,
                    user: (request as any).user
                })

                response.status(200).send(product)
            } catch(error: any) {
                response.status(400).send(error.message)
            }
        })
    }
}