import { FiltersSmmDTO } from "../dtos/FiltersSmmDTO"
import { Smm } from "../entities/Smm"


interface ISmmRepository {
        

    create(): Promise<void>
    list(data: FiltersSmmDTO, status: string): Promise<Smm[]>
    listRelatory(dataInicial: Date, dataFinal: Date): Promise<Smm[]>
    findByMovimentStatus(statusDeMovimentacao: boolean):Promise<Smm[]>
}

export {
    ISmmRepository
}
