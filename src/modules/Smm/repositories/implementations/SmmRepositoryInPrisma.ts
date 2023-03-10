import { prisma } from "../../../../config/prisma";
import { FiltersSmmDTO } from "../../dtos/FiltersSmmDTO";
import { Smm } from "../../entities/SmmEntitie";
import { ISmmRepository } from "../ISmmRepository";

export class SmmRepositoryInPrisma implements ISmmRepository {
    async update(serial_number: string): Promise<void> {
        await prisma.smm.updateMany({
            data: {
                statusDeMovimentacao: false
            },
            where: {
                serial_number,
            }
        })
    }
    async findBySerialNumber(serial_number: string): Promise<Smm> {
        const data = await prisma.smm.findFirst({
            select: {
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
                serial_number,
                statusDeMovimentacao: true

            },
            orderBy: {
                criadoEm: "desc"
            }

        })

        return data
    }
    async listSmmByModel({ skip, take }: FiltersSmmDTO, status: string): Promise<{ _count: number, modeloDaEmbalagem: string }[]> {
        const data = await prisma.smm.groupBy({
            by: ["modeloDaEmbalagem"],
            where: {
                statusDoFornecedor: String(status),
                statusDeMovimentacao: false
            },
            _count: true

        })

        return data
    }
    async list({ skip, take }: FiltersSmmDTO, status: string, modeloDaEmbalagem: string): Promise<Smm[]> {
        const data = await prisma.smm.findMany({
            select: {
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
            where: {
                statusDoFornecedor: String(status),
                statusDeMovimentacao: false,
                modeloDaEmbalagem,
            },
            take,
            skip,
        })

        return data
    }

    async listRelatory(dataInicial: Date, dataFinal: Date): Promise<Smm[]> {
        const data = await prisma.smm.findMany({
            select: {
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
            select: {
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

    async create({ username,
        matricula,
        fornecedor,
        statusDoFornecedor,
        descricao,
        serial_number,
        statusDaEmbalagem,
        modeloDaEmbalagem,
        statusDeMovimentacao, }: Smm): Promise<void> {
        await prisma.smm.create({
            data: {
                username,
                matricula,
                fornecedor,
                statusDoFornecedor,
                descricao,
                serial_number,
                statusDaEmbalagem,
                modeloDaEmbalagem,
                statusDeMovimentacao,
            }

        })
    }
}


