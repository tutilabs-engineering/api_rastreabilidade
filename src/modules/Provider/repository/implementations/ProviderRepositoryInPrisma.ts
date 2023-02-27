import { CreateProvider } from "../../dtos/CreateProviderDTO";
import { FiltersProvider } from "../../dtos/FiltersProviderDTO";
import { UpdateProvider } from "../../dtos/UpdateProviderDTO";
import { IProviderRepository } from "../IProviderRepository";

class ProviderRepositoryInPrisma implements IProviderRepository {
    create(data: CreateProvider): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(data: FiltersProvider): Promise<Provider> {
        throw new Error("Method not implemented.");
    }
    listOne(): Promise<Provider[]> {
        throw new Error("Method not implemented.");
    }
    update(data: UpdateProvider): Promise<void> {
        throw new Error("Method not implemented.");
    }


}

export { ProviderRepositoryInPrisma }