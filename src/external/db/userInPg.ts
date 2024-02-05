import User from "@/core/user/model/user";
import db from "@/external/db/db";
export default class UserInPg {
    private static readonly items: User[] = []
    async insert(user: User) {
        await db.query(
            `
            INSERT INTO usuarios
            (id, name, email, password)
            values ($1, $2, $3, $4)
            `, [
                user.id,
                user.name,
                user.email,
                user.password,
            ]
        )
    }

    async findByEmail(email: string): Promise<User | null> {
        const usuario = await db.oneOrNone(
          "SELECT * FROM usuarios WHERE email = $1", [email]
        )

        if(!usuario) return null

        return usuario
    }
}