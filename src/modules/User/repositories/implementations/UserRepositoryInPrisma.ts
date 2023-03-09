import { IUserRepository } from "../IUserRepository";
import { prisma } from "../../../../config/prisma"
import { User } from "../../entities/User";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IFiltersUserDTO } from "../../dtos/FiltersUserDTO";

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
    async list({take, skip}: IFiltersUserDTO): Promise<User[]> {
        const data = await prisma.users.findMany({
            where: {
                ativo: true,
            },
            take,
            skip,
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
    async update(id: string, {admin,email,matricula,nome,mnt,password,updatedAt}: IUpdateUserDTO): Promise<void> {
        await prisma.users.update({
            where: {
                id
            },
            data: {
                admin,
                email,
                matricula,
                nome,
                mnt,
                password,
                updatedAt
            }
        })
    }
    async delete(id: string): Promise<void> {
        await prisma.users.delete({
            where: {
                id
            }
        })
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