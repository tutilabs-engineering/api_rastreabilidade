import { IUserRepository } from "../IUserRepository";
import { prisma } from "../../../../config/prisma"
import { User } from "../../entities/User";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

export class UserRepositoryInPrisma implements IUserRepository{


   async create({admin, mnt, ativo, email,matricula,nome,password,createdAt,updatedAt}: ICreateUserDTO): Promise<void> {
        await prisma.users.create({
            data: {
                admin,
                ativo,
                mnt,
                email,
                matricula,
                nome,
                password, 
                createdAt,
                updatedAt
            }
        })
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
    async update(id: string, {admin,email,matricula,nome,updatedAt}: IUpdateUserDTO): Promise<void> {
        await prisma.users.update({
            where: {
                id
            },
            data: {
                admin,
                email,
                matricula,
                nome,
                updatedAt
            }
        })
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

    async findUserByEmail(email: string): Promise<User | null> {
        const data = await prisma.users.findUnique({
            where:{
                email,
            }
        })

        return data
    }

    async findUserByMatricula(matricula: string): Promise<User | null> {
        const data = await prisma.users.findUnique({
            where:{
                matricula,
            }
        })

        return data
    }
}