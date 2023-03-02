import { prisma } from "../../../../config/prisma";
import { ISmmRepository } from "../ISmmRepository";

export class SmmRepositoryInPrisma implements ISmmRepository{
    async findByMovimentStatus(statusDeMovimentacao: boolean): Promise<Smm[]> {
        const data = await prisma.smm.findMany({
            where: {
                statusDeMovimentacao
            }
        })

        return data
    }


}