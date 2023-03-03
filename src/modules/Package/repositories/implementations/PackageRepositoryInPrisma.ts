
import { prisma } from "../../../../config/prisma";
import { Model } from "../../../Model/entities/Model";
import { CountByOriginAndModelPackageDTO } from "../../dtos/CountByOriginAndModelPackageDTO";
import { CreatePackageDTO } from "../../dtos/CreatePackageDTO";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
import { ListClientByModelDTO } from "../../dtos/ListClientByModelDTO";
import { UpdatePackageDTO } from "../../dtos/UpdatePackageDTO ";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../IPackageRepository";

class PackageRepositoryInPrisma implements IPackageRepository {
    listPackage(data: FiltersPackageDTO): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    async listPackageByCustomer({skip, take }:FiltersPackageDTO, FK_destino: string): Promise<{serial_number:string}[]> {
        const data = await prisma.packages.findMany({
            select:{
                serial_number: true,
            },
        where:{
            FK_destino
        },
        skip,
        take    
      })
      
      return data
    }
    async listByModelByCustomer(FK_destino: string): Promise<any> {
        const dat2a = await prisma.packages.groupBy({
            by:['FK_modelo'],
            where:{
              status: 2,
              FK_destino
            },
            _count: true,

        
      })
      
      return dat2a
    }

    async listByCustomerWithModel(data: FiltersPackageDTO): Promise<any> {
        const dat2a = await prisma.packages.groupBy({
              by:['FK_destino'],
              where:{
                status: 2

              },
              _count: true,

          
        })
        
        return dat2a
    }
    async listByModelAndStatusWitchOrigin(origin: string,{FK_modelo,skip,take,status}: FiltersPackageDTO): Promise<{serial_number: string}[]> {
        
        const data = await prisma.packages.findMany({
            select:{
                serial_number: true,
            },
            where:{
                status,
                FK_modelo,
                origem: origin
            },
            skip,
            take
        })
        return data
    }
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

    async listByOrigin({skip, status, take}: FiltersPackageDTO,origin: string): Promise<CountByOriginAndModelPackageDTO[]> {
        const data = await prisma.packages.groupBy({
            by:["FK_modelo"],
            where:{
                status,
                origem:  origin
            },          
            _count:true
        })
        return data
    }
    async listByStatusAndProvider({status}: FiltersPackageDTO): Promise<any> {
        const data = await prisma.$queryRawUnsafe(`SELECT COUNT(packages.id), models.descricao FROM packages INNER JOIN models ON models.id = packages."FK_modelo" WHERE DATE(NOW()) - DATE(packages."updatedAt") > 7 AND STATUS = ${status} GROUP BY models.descricao`)

        return data
    }
    async listPackageStoppedByCustomer(): Promise<any> {
        const data = await prisma.$queryRawUnsafe('SELECT COUNT(packages.id), customers.razao_social FROM packages INNER JOIN customers ON customers.id = packages."FK_destino" WHERE DATE(NOW()) - DATE(packages."updatedAt") > 7 AND STATUS = 2 GROUP BY customers.razao_social')
        return data
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