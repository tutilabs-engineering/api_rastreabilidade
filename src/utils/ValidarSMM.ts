import { getCustomRepository } from "typeorm";
import { Package } from "../models/Package";
import { SmmRepository } from "../backup/repositories/SmmRepositoryInType";

interface iEmb {
    embalagem: Package
    modelo: string
    fornecedor: string
    descricao: string
    tipo: string
    data: string
}

interface iResponse {
    embalagensInternas: iEmb[],
    embalagensExternas: iEmb[]
}

export async function ValidarSMM(packages: Package[]): Promise<iResponse> {


    const smmRepository = getCustomRepository(SmmRepository)

    const smm = await smmRepository.find({
        where: {
            statusDeMovimentacao: false
        }
    })


    const embalagensInternas: iEmb[] = []
    const embalagensExternas: iEmb[] = []


    smm.map((s) => {
        const p = packages.find(p => p.serial_number === s.serial_number)

        if (p && s.statusDoFornecedor == "Interno") {
            embalagensInternas.push({
                embalagem: p,
                modelo: s.modeloDaEmbalagem,
                fornecedor: s.fornecedor,
                descricao: s.descricao,
                tipo: s.statusDoFornecedor,
                data: s.criadoEm
            })
        }

        if (p && s.statusDoFornecedor == "Externo") {
            embalagensExternas.push({
                embalagem: p,
                modelo: s.modeloDaEmbalagem,
                fornecedor: s.fornecedor,
                descricao: s.descricao,
                tipo: s.statusDoFornecedor,
                data: s.criadoEm
            })
        }

    })

    return { embalagensExternas, embalagensInternas }


}