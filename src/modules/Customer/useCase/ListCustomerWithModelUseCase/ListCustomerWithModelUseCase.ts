import { inject, injectable } from "tsyringe";
import { FiltersModelDTO } from "../../../Model/dtos/FiltersModelDTO";
import { Model } from "../../../Model/entities/Model";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";

@injectable()
class ListCustomerWithModelUseCase {
    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ){}

    async execute({skip,take}:FiltersModelDTO, customer_cnpj: string): Promise<Customer[]> {
        
        const data = await this.customerRepository.listCustomerWithModel({skip,take},"32322323")

        return data;
    }

}

export { ListCustomerWithModelUseCase }