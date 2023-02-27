import { CPC } from "../entities/CPC"

interface ICpcRepository{
       create():Promise<void>
       delete(): Promise<void>
       listCPCByCustomer(id: string): Promise<CPC[]>
       list(): Promise<CPC[]>
       update(): Promise<void>
}

export { ICpcRepository }