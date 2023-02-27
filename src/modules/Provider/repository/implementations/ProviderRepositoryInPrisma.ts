import { CreateProvider } from "../../dtos/CreateProvider";
import { FiltersProvider } from "../../dtos/FiltersProvider";
import { UpdateProvider } from "../../dtos/UpdateProvider";
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