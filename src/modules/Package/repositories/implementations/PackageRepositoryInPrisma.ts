
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
    async update(data: UpdatePackageDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async findById({id}: FiltersPackageDTO): Promise<Package> {
        const data = await prisma.packages.findUnique({
            where:{
                id
            }
        })
        return data
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
    async updatePackage(id: string, {FK_destino,FK_modelo,origem,status,updatedAt}: UpdatePackageDTO): Promise<void> {
        await prisma.packages.update({
            where:{
                id,
            },
            data:{
                FK_destino,
                FK_modelo,
                origem,
                status,
                updatedAt
            }
        })
    }


}

export { PackageRepositoryInPrisma }