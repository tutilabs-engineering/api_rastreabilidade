import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { UpdateCustomerDTO } from "../../dtos/UpdateCustomerDTO";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";

@injectable()
class UpdateCustomerUseCase{

    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ){}

    async execute({id, cnpj, img_path, razao_social, ativo}: UpdateCustomerDTO): Promise<void>{
          
        const customer = await this.customerRepository.findById(id)

        if(!customer){
            throw new AppError(404, "Cliente não existe")
        }
        
        if(!razao_social || !cnpj){
            throw new AppError(404, "Dados obrigatorios não preenchidos")
        }
       
        if(!img_path){
            img_path = String(customer.img_path)
        }

         await this.customerRepository.update({id, cnpj, img_path, razao_social,ativo})
         
    }

}

export {
    UpdateCustomerUseCase
}