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
    listOne(): Promise<Provider[]> {
        throw new Error("Method not implemented.");
    }
    update(data: UpdateProviderDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }


}

export { ProviderRepositoryInPrisma }