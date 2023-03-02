
import { prisma } from "../../../../config/prisma";
import { Model } from "../../../Model/entities/Model";
import { CreatePackageDTO } from "../../dtos/CreatePackageDTO";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
import { ListClientByModelDTO } from "../../dtos/ListClientByModelDTO";
import { UpdatePackageDTO } from "../../dtos/UpdatePackageDTO ";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../IPackageRepository";

class PackageRepositoryInPrisma implements IPackageRepository {
    async listClientByModel(FK_modelo: string): Promise<ListClientByModelDTO[]> {
        const data = await prisma.packages.findMany({
            where: {
                FK_modelo,
                customers: {
                    razao_social: {notIn: ["CD", "Matriz", "Filial", "Jaguarão"]}
                }
            },
            select: {
                customers: {
                    select: {
                        razao_social: true
                    }
                }
            },
            distinct: ["FK_destino"]
        })
        return data
    }
    async listByStatusAndModel(status: number, FK_modelo: string): Promise<Package[]> {
        const data = await prisma.packages.findMany({
            where:{
                status,
                FK_modelo
            }
        })
        return data
    }
    async create({FK_destino,FK_modelo,origem,serial_number,status, createdAt,updatedAt}: CreatePackageDTO): Promise<void> {
        await prisma.packages.create({
            data: {
                FK_destino,
                FK_modelo,
                origem, 
                serial_number,
                status,
                createdAt,
                updatedAt
            }
        })
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

    async countByModel(status: number, FK_modelo: string): Promise<any> {
        const data = await prisma.packages.groupBy({
            by:["origem"],
            where: {
              AND:{
                status,
                FK_modelo
              }
            },
            _count: true

        })

        return data
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