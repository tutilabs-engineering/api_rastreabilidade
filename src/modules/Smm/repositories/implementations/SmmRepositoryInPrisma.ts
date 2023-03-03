import { prisma } from "../../../../config/prisma";
import { FiltersSmmDTO } from "../../dtos/FiltersSmmDTO";
import { Smm } from "../../entities/smm";
import { ISmmRepository } from "../ISmmRepository";

class SmmRepositoryInPrisma implements ISmmRepository {
    async list({skip,take}: FiltersSmmDTO): Promise<Smm[]> {
        const data = await prisma.smm.findMany({
            take,
            skip,
        })

        return data
    }

    async listRelatory(dataInicial: Date, dataFinal: Date): Promise<Smm[]> {
        const data = await prisma.smm.findMany({
            where:{
                criadoEm: {
                    gte: dataInicial,
                    lte: dataFinal
                }
            }
        })

        return data
    }
    create(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}


export {
    SmmRepositoryInPrisma
}