import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";

@injectable()
class FindByIdCustomerUseCase {
    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ){}

    async execute(id: string): Promise<Customer> {

        const customer = await this.customerRepository.findById(id)

        if(!customer){
            throw new AppError(404, "Cliente não encontrado")
        }

        return customer;

    }



}

export {FindByIdCustomerUseCase}