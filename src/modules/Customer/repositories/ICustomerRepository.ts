import { Customer } from "../entities/Customer"

interface ICustomerRepository {
    create(): Promise<void>
    delete(): Promise<void>
    list(): Promise<Customer[]>
    listInative(): Promise<void>
    findById(): Promise<void>
    updateActive(): Promise<void>
    update(): Promise<void>
}

export {ICustomerRepository}