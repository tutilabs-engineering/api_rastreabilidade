import { CreateCpcDTO } from "../dtos/CreateCpcDTO"
import { FiltersCPCDTO } from "../dtos/FiltersCpcDTO"
import { CPC } from "../entities/CPC"

interface ICpcRepository{
       create(data: CreateCpcDTO):Promise<void>
       delete(id: string): Promise<void>
       findbyId(id: string): Promise<CPC>
       findbyModelAndCustomer(FK_customer: string, FK_model:string): Promise<CPC>
       listCPCByCustomer(id: string): Promise<CPC[]>
       list(data: FiltersCPCDTO): Promise<CPC[]>
       update(): Promise<void>
}

export { ICpcRepository }