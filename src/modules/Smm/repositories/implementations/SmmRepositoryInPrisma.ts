import { prisma } from "../../../../config/prisma";
import { FiltersSmmDTO } from "../../dtos/FiltersSmmDTO";
import { Smm } from "../../entities/Smm";
import { ISmmRepository } from "../ISmmRepository";

export class SmmRepositoryInPrisma implements ISmmRepository {     
    async list({skip,take}: FiltersSmmDTO, status: string): Promise<Smm[]> {
        const data = await prisma.smm.findMany({
            select:{
                id: true,
                username: true,
                matricula: true,
                fornecedor: true,
                statusDoFornecedor: true,
                descricao: true,
                serial_number: true,
                statusDaEmbalagem: true,
                modeloDaEmbalagem: true,
                statusDeMovimentacao: true,
                // criadoEm: true,
                // concluidoEm: true,
            },
            where:{
                statusDoFornecedor: String(status),
            },
            take,                   
            skip,
        })

        return data
    }

    async listRelatory(dataInicial: Date, dataFinal: Date): Promise<Smm[]> {
        const data = await prisma.smm.findMany({
            select:{
                id: true,
                username: true,
                matricula: true,
                fornecedor: true,
                statusDoFornecedor: true,
                descricao: true,
                serial_number: true,
                statusDaEmbalagem: true,
                modeloDaEmbalagem: true,
                statusDeMovimentacao: true,
            },
            where:{
                criadoEm: {
                    gte: dataInicial,
                    lte: dataFinal
                }
            }
        })

        return data
    }

     
    async findByMovimentStatus(statusDeMovimentacao: boolean): Promise<Smm[]> {
        const data = await prisma.smm.findMany({
            select:{
                id: true,
                username: true,
                matricula: true,
                fornecedor: true,   
                statusDoFornecedor: true,
                descricao: true,
                serial_number: true,
                statusDaEmbalagem: true,
                modeloDaEmbalagem: true,
                statusDeMovimentacao: true,
            },                      
            where: {
                statusDeMovimentacao
            }
        })

        return data
    }

    create(): Promise<void> {       
        throw new Error("Method not implemented.");
    }
}


