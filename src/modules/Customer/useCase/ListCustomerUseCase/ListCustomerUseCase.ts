import { inject, injectable } from "tsyringe"
import { FiltersCustomerDTO } from "../../dtos/FiltersCustomerDTO"
import { Customer } from "../../entities/Customer"
import { ICustomerRepository } from "../../repositories/ICustomerRepository"

@injectable()
class ListCustomerUseCase {

    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ){}

    async execute({ take, skip, status }: FiltersCustomerDTO): Promise<Customer[]>{
        return await this.customerRepository.list({skip, take, status})
    }

}

export { ListCustomerUseCase }



















































































































