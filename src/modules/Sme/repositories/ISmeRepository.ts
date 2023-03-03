import { CreateSmeAllLogDTO } from "../dtos/CreateSmeAllLogDTO"
import { FiltersSmeDTO } from "../dtos/FiltersSmeDTO"
import { Sme } from "../entities/Sme"

export interface ISmeRepository{

    create(data: CreateSmeAllLogDTO): Promise<void>
    listByCnpj(cnpj: string, data: FiltersSmeDTO): Promise<Sme[]>
    list(data: FiltersSmeDTO): Promise<Sme[]>
    listByPackage(serial_number: string, data: FiltersSmeDTO) : Promise<Sme[]>
    findByOne(id: string): Promise<Sme>
    listByDate(dataInicial: string, dataFinal: string,  data: FiltersSmeDTO): Promise<any>



}