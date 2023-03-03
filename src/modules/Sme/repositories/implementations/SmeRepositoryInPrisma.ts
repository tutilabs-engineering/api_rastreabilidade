import { prisma } from "../../../../config/prisma";
import { CreateSmeAllLogDTO } from "../../dtos/CreateSmeAllLogDTO";
import { FiltersSmeDTO } from "../../dtos/FiltersSmeDTO";
import { Sme } from "../../entities/Sme";
import { ISmeRepository } from "../ISmeRepository";

class SmeRepositoryInPrisma implements ISmeRepository {
    async list({skip,take}: FiltersSmeDTO): Promise<Sme[]> {
        const data = await prisma.sme.findMany({
            select:{
                id: true,
                razao_social: true,
                cnpj: true,
                ativo: true,
                serial_number: true,
                origem: true,
                destino: true,
                status: true,
                modelo: true,
                username: true,
                matricula: true,
            },
            take,
            skip
        })

        return data
    }
    async create({ 
        razao_social,
        cnpj,
        ativo,
        serial_number,
        origem,
        destino,
        status,
        modelo,
        username,
        matricula,
        data
       }: CreateSmeAllLogDTO): Promise<void> {
        await prisma.sme.create({
            data: {
                razao_social,
                cnpj,
                ativo,
                serial_number,
                origem,
                destino,
                status,
                modelo,
                username,
                matricula,
                data,
            }
        })
    }
    async listByCnpj(cnpj: string, {skip, take}: FiltersSmeDTO): Promise<Sme[]> {
        const data = await prisma.sme.findMany({
            select:{
                id: true,
                razao_social: true,
                cnpj: true,
                ativo: true,
                serial_number: true,
                origem: true,
                destino: true,
                status: true,
                modelo: true,
                username: true,
                matricula: true,
            },
            where:{
                cnpj
            },
            take,
            skip
        })

        return data
    }
    async listByPackage(serial_number: string,{skip, take}: FiltersSmeDTO): Promise<Sme[]> {
        const data = await prisma.sme.findMany({
            select:{
                id: true,
                razao_social: true,
                cnpj: true,
                ativo: true,
                serial_number: true,
                origem: true,
                destino: true,
                status: true,
                modelo: true,
                username: true,
                matricula: true,
            },
            where:{
                serial_number
            },
            take,
            skip
        })

        return data
    }
    async findByOne(id: string): Promise<Sme> {
        const data = await prisma.sme.findUnique({
            select:{
                id: true,
                razao_social: true,
                cnpj: true,
                ativo: true,
                serial_number: true,
                origem: true,
                destino: true,
                status: true,
                modelo: true,
                username: true,
                matricula: true,
            },
            where:{
                id
            }
        })

        return data
    }
    async listByDate(dataInicial: Date, dataFinal: Date,{skip, take}: FiltersSmeDTO): Promise<Sme[]> {
        const data = await prisma.sme.findMany({
            select:{
                id: true,
                razao_social: true,
                cnpj: true,
                ativo: true,
                serial_number: true,
                origem: true,
                destino: true,
                status: true,
                modelo: true,
                username: true,
                matricula: true,
            },
            where:{
                data: {
                    gte: dataInicial,
                    lte: dataFinal  
                }
            },
            take,
            skip
        })

        return data
    }


}

export {
    SmeRepositoryInPrisma
}