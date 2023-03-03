
import { Model } from "../../Model/entities/Model"
import { CreatePackageDTO } from "../dtos/CreatePackageDTO"
import { FiltersPackageDTO } from "../dtos/FiltersPackageDTO"
import { ListClientByModelDTO } from "../dtos/ListClientByModelDTO"
import { UpdatePackageDTO } from "../dtos/UpdatePackageDTO "
import { Package } from "../entities/Package"

interface IPackageRepository {
    create(data: CreatePackageDTO): Promise<void>
    findById(data: FiltersPackageDTO): Promise<Package>
    findBySerialNumber(serial_number: string): Promise<Package>
    listByDestino(data: FiltersPackageDTO): Promise<Package[]>
    countByModel(status: number, FK_modelo: string): Promise<number>
    listByOrigin(data: FiltersPackageDTO): Promise<Package[]>
    listByStatusAndProvider(data: FiltersPackageDTO): Promise<Package[]>
    listPackageStoppedByCustomer(): Promise<any>
    listByStatusAndModel(status: number, FK_modelo: string): Promise<Package[]>
    listClientByModel(FK_modelo: string):Promise<ListClientByModelDTO[]>
    updateOrigin(data: UpdatePackageDTO): Promise<void>
    updatePackage(id: string, data: UpdatePackageDTO): Promise<void>

}

export {IPackageRepository}