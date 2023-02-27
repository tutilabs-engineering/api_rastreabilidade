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
            },
            select: {
                admin: true,
                ativo: true,
                createdAt: true,
                email: true,
                id: true,
                matricula: true,
                mnt: true,
                nome: true,
                updatedAt: true
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
    async findById(id: string): Promise<User | null> {
        const data = await prisma.users.findUnique({
            where: {
                id
            },
            select: {
                admin: true,
                ativo: true,
                createdAt: true,
                email: true,
                id: true,
                matricula: true,
                mnt: true,
                nome: true,
                updatedAt: true
            }
        })

        return data;
    }
}