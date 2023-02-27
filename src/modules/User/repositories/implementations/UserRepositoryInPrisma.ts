import { IUserRepository } from "../IUserRepository";
import { prisma } from "../../../../config/prisma"
import { User } from "../../entities/User";
export class UserRepositoryInPrisma implements IUserRepository{
    create(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async list(): Promise<User[]> {
        const data = await prisma.users.findMany({
            where: {
                ativo: true,
            },
            orderBy: {
                updatedAt: 'asc'
            }
        });
        return data;
    }
    update(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User | null> {
        const data = prisma.users.findUnique({
            where: {
                id
            }
        })

        return data;
    }
}