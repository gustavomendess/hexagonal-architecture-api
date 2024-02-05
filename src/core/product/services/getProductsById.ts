import UseCase from "@/core/shared/useCase"
import Product from "@/core/product/model/product"
import User from "@/core/user/model/user"

export type Entrance = {
    productId: string
    user: User
}
export default class GetProductsById implements UseCase<Entrance, Product> {
    async execute(entrance: Entrance): Promise<Product> {
        return {
            id: entrance.productId,
            name: 'Produto 1',
            price: 10,
            searchedBy: entrance.user.email,
        }
    }

}