import { prisma } from "../../../../config/prisma";
import { CreateProviderDTO } from "../../dtos/CreateProviderDTO";
import { FiltersProviderDTO } from "../../dtos/FiltersProviderDTO";
import { UpdateProviderDTO } from "../../dtos/UpdateProviderDTO";
import { IProviderRepository } from "../IProviderRepository";

class ProviderRepositoryInPrisma implements IProviderRepository {
    create(data: CreateProviderDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(data: FiltersProviderDTO): Promise<Provider> {
        throw new Error("Method not implemented.");
    }
    async list({skip,take}: FiltersProviderDTO): Promise<Provider[] | null> {
        const data = await prisma.providers.findMany({
            skip,
            take            
        });

        return data
    }
    update(data: UpdateProviderDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }


}

export { ProviderRepositoryInPrisma }