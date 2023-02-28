import { Request, Response } from "express"
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../config/AppError"
import { ICustomerRepository } from "../../repositories/ICustomerRepository"

@injectable()
class DeleteCustomerUseCase {
    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ){}

    async execute(id: string): Promise<void>{        

       const customer = await this.customerRepository.findById(id)
        
       if(!customer){
        throw new AppError(404, "Cliente não encontrado")
       }

        // deletando cliente do banco
       await this.customerRepository.delete(id)

    

    }   

}

export { DeleteCustomerUseCase }