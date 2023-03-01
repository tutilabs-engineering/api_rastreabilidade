
import { prisma } from "../../../../config/prisma";
import { CreatePackageDTO } from "../../dtos/CreatePackageDTO";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
import { UpdatePackageDTO } from "../../dtos/UpdatePackageDTO ";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../IPackageRepository";

class PackageRepositoryInPrisma implements IPackageRepository {
    create(data: CreatePackageDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(data: UpdatePackageDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(data: FiltersPackageDTO): Promise<Package> {
        throw new Error("Method not implemented.");
    }

    async findBySerialNumber(serial_number: string): Promise<Package> {
        const data = await prisma.packages.findUnique({
            where: {
                serial_number,
            },
            include: {
                models: {
                    select: {
                        descricao: true
                    }
                }
            }
        })

         return data
    }

    listByDestino(data: FiltersPackageDTO): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    listByModel(data: FiltersPackageDTO): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    listByOrigin(data: FiltersPackageDTO): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    listByStatusAndProvider(data: FiltersPackageDTO): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    listPackage(data: FiltersPackageDTO): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    updateOrigin(data: UpdatePackageDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updatePackage(data: UpdatePackageDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }


}

export { PackageRepositoryInPrisma }