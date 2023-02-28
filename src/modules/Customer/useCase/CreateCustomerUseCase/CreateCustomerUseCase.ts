import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { CreateCustomerDTO } from "../../dtos/CreateCustomerDTO";
import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";

@injectable()
class CreateCustomerUseCase{

    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ){}

    async execute({cnpj, img_path, razao_social}: CreateCustomerDTO): Promise<void>{
        // return await this.customerRepository.list()

        const customer = await this.customerRepository.findByCNPJ(cnpj)
        
        if(!razao_social || !cnpj){
            throw new AppError(404, "Dados obrigatorios não preenchidos")
        }
        if(!img_path){
            throw new AppError(404, "Imagem obrigatoria não preenchida")
        }

        if(customer){
            throw new AppError(404, "CNPJ já existe")
        }

         await this.customerRepository.create({cnpj, img_path, razao_social})
         
    }

}

export { CreateCustomerUseCase }