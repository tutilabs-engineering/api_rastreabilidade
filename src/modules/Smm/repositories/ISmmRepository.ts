import { FiltersSmmDTO } from "../dtos/FiltersSmmDTO"
import { Smm } from "../entities/smm"

interface ISmmRepository {


    create(): Promise<void>
    list(data: FiltersSmmDTO): Promise<Smm[]>
    listRelatory(dataInicial: Date, dataFinal: Date): Promise<Smm[]>

}

export {
    ISmmRepository
}