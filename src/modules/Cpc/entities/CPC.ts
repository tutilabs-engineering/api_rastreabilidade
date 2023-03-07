import { Customer } from "../../Customer/entities/Customer";
import { Model } from "../../Model/entities/Model";

interface CPC {
    id?:string,
    FK_customer: string,
    FK_model: string,
    createdAt?: Date,
    updatedAt?: Date,
    customers?: Customer,
    models?: Model,
}

export { CPC }