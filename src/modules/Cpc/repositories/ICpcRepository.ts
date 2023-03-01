import { CreateCpcDTO } from "../dtos/CreateCpcDTO"
import { CPC } from "../entities/CPC"

interface ICpcRepository{
       create(data: CreateCpcDTO):Promise<void>
       delete(): Promise<void>
       findbyId(id: string): Promise<CPC>
       findbyModelAndCustomer(FK_customer: string, FK_model:string): Promise<CPC>
       listCPCByCustomer(id: string): Promise<CPC[]>
       list(): Promise<CPC[]>
       update(): Promise<void>
}

export { ICpcRepository }