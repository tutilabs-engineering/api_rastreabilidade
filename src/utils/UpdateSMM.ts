import { getCustomRepository } from "typeorm";
import { SmmRepository } from "../backup/repositories/SmmRepositoryInType";

export async function UpdateSMM(fornecedor: string, tipo: boolean) {


    const smmRepository = getCustomRepository(SmmRepository)

    let smm = await smmRepository.find({
        where: {
            statusDeMovimentacao: false
        }
    })

    let statusDoFornecedor = tipo ? "Externo" : "Interno"

    smm.forEach(async (s) => {

        await smmRepository.update({ id: s.id }, { fornecedor, statusDoFornecedor })

    })

    smm = await smmRepository.find({
        where: {
            statusDeMovimentacao: false
        }
    })

}