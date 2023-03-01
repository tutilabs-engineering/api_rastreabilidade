import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { ICustomerRepository } from "../../../Customer/repositories/ICustomerRepository";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
import { CreateCpcDTO } from "../../dtos/CreateCpcDTO";
import { ICpcRepository } from "../../repositories/ICpcRepository";

@injectable()
class CreateCpcUseCase {
    constructor( 
        @inject("CpcRepository")
        private cpcRepository: ICpcRepository,
        @inject("ModelRepository")
        private modelRepository: IModelRepository,
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository){}

        async execute({FK_customer,FK_model}: CreateCpcDTO): Promise<void>{


            const model = await this.modelRepository.findById(FK_model)
            const customer = await this.customerRepository.findById(FK_customer)

           if(!model){
                throw new AppError(404, "Modelo não encontrado")
            }

            if(!customer){
                throw new AppError(404, "Cliente não encontrado")
            }

            const cpc = await this.cpcRepository.findbyModelAndCustomer(FK_customer,FK_model);
          
            if(cpc){
                throw new AppError(404, "Modelo já vinculado ao cliente")
            }

            await this.cpcRepository.create({FK_customer,FK_model})

        }


}

export { 
    CreateCpcUseCase
}