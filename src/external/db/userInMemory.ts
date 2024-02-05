import User from "@/core/user/model/user";

export default class UserInMemory {
    private static readonly items: User[] = []
    async insert(user: User) {
        const items = UserInMemory.items

        const existentUser = await this.findByEmail(user.email)

        if(existentUser) return

        items.push(user)
    }

    async findByEmail(email: string): Promise<User | null> {
        const items = UserInMemory.items

        return items.find((user) => user.email === email) ?? null
    }
}