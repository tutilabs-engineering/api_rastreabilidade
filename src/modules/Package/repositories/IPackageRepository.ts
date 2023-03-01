
import { CreatePackageDTO } from "../dtos/CreatePackageDTO"
import { FiltersPackageDTO } from "../dtos/FiltersPackageDTO"
import { UpdatePackageDTO } from "../dtos/UpdatePackageDTO "
import { Package } from "../entities/Package"

interface IPackageRepository {
    create(data: CreatePackageDTO): Promise<void>
    update(data: UpdatePackageDTO): Promise<void>
    findById(data: FiltersPackageDTO): Promise<Package>
    findBySerialNumber(serial_number: string): Promise<Package>
    listByDestino(data: FiltersPackageDTO): Promise<Package[]>
    listByModel(data: FiltersPackageDTO): Promise<Package[]>
    listByOrigin(data: FiltersPackageDTO): Promise<Package[]>
    listByStatusAndProvider(data: FiltersPackageDTO): Promise<Package[]>
    listPackage(data: FiltersPackageDTO): Promise<Package[]>
    updateOrigin(data: UpdatePackageDTO): Promise<void>
    updatePackage(id: string, data: UpdatePackageDTO): Promise<void>

}

export {IPackageRepository}