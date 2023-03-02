
import { CreatePackageDTO } from "../dtos/CreatePackageDTO"
import { FiltersPackageDTO } from "../dtos/FiltersPackageDTO"
import { UpdatePackageDTO } from "../dtos/UpdatePackageDTO "
import { Package } from "../entities/Package"

interface IPackageRepository {
    create(data: CreatePackageDTO): Promise<void>
    findById(data: FiltersPackageDTO): Promise<Package>
    findBySerialNumber(serial_number: string): Promise<Package>
    listByDestino(data: FiltersPackageDTO): Promise<Package[]>
    countByModel(status: number, FK_modelo: string): Promise<any>
    listByOrigin(data: FiltersPackageDTO): Promise<Package[]>
    listByStatusAndProvider(data: FiltersPackageDTO): Promise<Package[]>
    listPackage(data: FiltersPackageDTO): Promise<Package[]>
    listByStatusAndModel(status: number, FK_modelo: string): Promise<Package[]>
    updateOrigin(data: UpdatePackageDTO): Promise<void>
    updatePackage(id: string, data: UpdatePackageDTO): Promise<void>

}

export {IPackageRepository}