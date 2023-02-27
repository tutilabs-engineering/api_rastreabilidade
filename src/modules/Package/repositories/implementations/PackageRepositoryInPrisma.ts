import { CreatePackage } from "../../dtos/CreatePackage";
import { FiltersPackage } from "../../dtos/FiltersPackage";
import { UpdatePackage } from "../../dtos/UpdatePackage";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../IPackageRepository";

class PackageRepositoryInPrisma implements IPackageRepository {
    create(data: CreatePackage): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(data: UpdatePackage): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(data: FiltersPackage): Promise<Package> {
        throw new Error("Method not implemented.");
    }
    listByDestino(data: FiltersPackage): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    listByModel(data: FiltersPackage): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    listByOrigin(data: FiltersPackage): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    listByStatusAndProvider(data: FiltersPackage): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    listPackage(data: FiltersPackage): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    updateOrigin(data: UpdatePackage): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updatePackage(data: UpdatePackage): Promise<void> {
        throw new Error("Method not implemented.");
    }


}

export { PackageRepositoryInPrisma }