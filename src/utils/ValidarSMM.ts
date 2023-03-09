import { Package } from "../modules/Package/entities/Package"
import { Smm } from "../modules/Smm/entities/SmmEntitie"

                        

interface iEmb {
    embalagem: Package  
    modelo: string
    fornecedor: string
    descricao: string
    tipo: string
    data: string
}

interface iResponse {
    embalagensInternas: number,
    embalagensExternas: number
}

export async function ValidarSMM(packages: Package[], smm: Smm[]): Promise<iResponse> {

    let embalagensInternas = 0
    let embalagensExternas = 0

    smm.map((s) => {
        const p = packages.find(p => p.serial_number === s.serial_number)

        if (p && s.statusDoFornecedor == "Interno") {
            embalagensInternas = embalagensInternas + 1
        }

        if (p && s.statusDoFornecedor == "Externo") {
            embalagensExternas = embalagensExternas + 1
        }

    })
    return { embalagensExternas, embalagensInternas }


}