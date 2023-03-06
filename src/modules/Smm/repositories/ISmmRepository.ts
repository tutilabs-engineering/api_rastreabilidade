import { FiltersSmmDTO } from "../dtos/FiltersSmmDTO"
import { Smm } from "../entities/Smm"


interface ISmmRepository {
        

    create(): Promise<void>
    list(data: FiltersSmmDTO, status: string,modeloDaEmbalagem: string): Promise<Smm[]>
    listRelatory(dataInicial: Date, dataFinal: Date): Promise<Smm[]>
    listSmmByModel(data: FiltersSmmDTO, status: string): Promise<{_count: number,modeloDaEmbalagem:string }[]>
    findByMovimentStatus(statusDeMovimentacao: boolean):Promise<Smm[]>
}

export {
    ISmmRepository
}
