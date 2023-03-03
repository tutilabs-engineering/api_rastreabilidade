
import { Model } from "../../Model/entities/Model"
import { CountByOriginAndModelPackageDTO } from "../dtos/CountByOriginAndModelPackageDTO"
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
    listByOrigin(data: FiltersPackageDTO, origin: String): Promise<CountByOriginAndModelPackageDTO[]>
    listByStatusAndProvider(data: FiltersPackageDTO): Promise<Package[]>
    listPackage(data: FiltersPackageDTO): Promise<Package[]>
    listByStatusAndModel(status: number, FK_modelo: string): Promise<Package[]>
    listByCustomerWithModel(data: FiltersPackageDTO): Promise<any>
    listByModelAndStatusWitchOrigin(origin: string,data: FiltersPackageDTO): Promise<{serial_number: string}[]>
    listByModelByCustomer(FK_destino: string): Promise<any>
    listPackageByCustomer({skip, take }:FiltersPackageDTO,FK_destino: string): Promise<{serial_number:string}[]>
    listClientByModel(FK_modelo: string):Promise<ListClientByModelDTO[]>
    updateOrigin(data: UpdatePackageDTO): Promise<void>
    updatePackage(id: string, data: UpdatePackageDTO): Promise<void>

}

export {IPackageRepository}