import { CreatePackage } from "../dtos/CreatePackage"
import { FiltersPackage } from "../dtos/FiltersPackage"
import { UpdatePackage } from "../dtos/UpdatePackage"
import { Package } from "../entities/Package"

interface IPackageRepository {
    create(data: CreatePackage): Promise<void>
    update(data: UpdatePackage): Promise<void>
    findById(data: FiltersPackage): Promise<Package>
    listByDestino(data: FiltersPackage): Promise<Package[]>
    listByModel(data: FiltersPackage): Promise<Package[]>
    listByOrigin(data: FiltersPackage): Promise<Package[]>
    listByStatusAndProvider(data: FiltersPackage): Promise<Package[]>
    listPackage(data: FiltersPackage): Promise<Package[]>
    updateOrigin(data: UpdatePackage): Promise<void>
    updatePackage(data: UpdatePackage): Promise<void>

}

export {IPackageRepository}