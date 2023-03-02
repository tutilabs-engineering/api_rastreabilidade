import { prisma } from "../../../../config/prisma";
import { CreateProviderDTO } from "../../dtos/CreateProviderDTO";
import { FiltersProviderDTO } from "../../dtos/FiltersProviderDTO";
import { UpdateProviderDTO } from "../../dtos/UpdateProviderDTO";
import { IProviderRepository } from "../IProviderRepository";

class ProviderRepositoryInPrisma implements IProviderRepository {
    async create({externo,nome,createdAt,updatedAt}: CreateProviderDTO): Promise<void> {
        await prisma.providers.create({
            data:{
                externo,
                nome,
                createdAt,
                updatedAt
            }
        })
    }
    async findById({id}: FiltersProviderDTO): Promise<Provider> {
       const data = await prisma.providers.findUnique({
        where:{
            id
        }
       })
       return data
    }
    async list({skip,take}: FiltersProviderDTO): Promise<Provider[] | null> {
        const data = await prisma.providers.findMany({
            skip,
            take            
        });

        return data
    }
    async update({id,createdAt,externo,nome,updatedAt}: UpdateProviderDTO): Promise<void> {
        await prisma.providers.update({
            data:{
                externo,
                nome,
                createdAt,
                updatedAt
            },
            where: {
                id
            }
        })
    }


}

export { ProviderRepositoryInPrisma }