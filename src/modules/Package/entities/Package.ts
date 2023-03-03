import { Customer } from "../../Customer/entities/Customer";

class Package {
    id?: string
    serial_number: string;
    origem: string
    FK_destino: string
    FK_modelo: string
    status: number
    customers?: Customer
    createdAt?: Date
    updatedAt?: Date
}

export { Package }