import { CreateCustomerDTO } from "../dtos/CreateCustomerDTO"
import { FiltersCustomerDTO } from "../dtos/FiltersCustomerDTO"
import { UpdateCustomerDTO } from "../dtos/UpdateCustomerDTO"
import { Customer } from "../entities/Customer"

interface ICustomerRepository {
    create(data: CreateCustomerDTO): Promise<void>
    delete(id: string): Promise<void>
    list(data:FiltersCustomerDTO): Promise<Customer[]>
    listInative(): Promise<void>
    findById(id: string): Promise<Customer>
    findByCNPJ(cnpj: string): Promise<Customer>
    updateActive(): Promise<void>
    update(data: UpdateCustomerDTO): Promise<void>
}

export {ICustomerRepository}