import { inject, injectable } from "tsyringe"
import { Customer } from "../../entities/Customer"
import { ICustomerRepository } from "../../repositories/ICustomerRepository"

@injectable()
class ListCustomerUseCase {

    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ){}

    async execute(): Promise<Customer[]>{
        return await this.customerRepository.list()
    }

}

export { ListCustomerUseCase }



















































































































