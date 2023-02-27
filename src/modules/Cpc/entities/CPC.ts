import { Model } from "../../Model/entities/Model";

interface CPC {
    id?:string,
    FK_customer: string,
    FK_model: string,
    createdAt: Date,
    updatedAt: Date,
    customers?: any,
    models?: Model,
}

export { CPC }