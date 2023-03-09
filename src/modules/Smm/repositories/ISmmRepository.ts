import { FiltersSmmDTO } from "../dtos/FiltersSmmDTO"
import { Smm } from "../entities/Smm"


interface ISmmRepository {
        

    create(data: Smm): Promise<void>
    update(serial_number: string): Promise<void>
    list(data: FiltersSmmDTO, status: string,modeloDaEmbalagem: string): Promise<Smm[]>
    listRelatory(dataInicial: Date, dataFinal: Date): Promise<Smm[]>
    listSmmByModel(data: FiltersSmmDTO, status: string): Promise<{_count: number,modeloDaEmbalagem:string }[]>
    findByMovimentStatus(statusDeMovimentacao: boolean):Promise<Smm[]>
    findBySerialNumber(serial_number: string):Promise<Smm>
}

export {
    ISmmRepository
}
