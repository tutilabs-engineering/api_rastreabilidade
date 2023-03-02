import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { ICustomerRepository } from "../../../Customer/repositories/ICustomerRepository";
import { CPC } from "../../entities/CPC";
import { ICpcRepository } from "../../repositories/ICpcRepository";

interface IRequest {
   id: string
}

@injectable()
class ListCpcByCustomerUseCase {
   constructor( 
   @inject("CpcRepository")
   private cpcRepository: ICpcRepository,
   @inject("CustomerRepository")
   private customerRepository: ICustomerRepository
   ){}
   
   async execute({id}: IRequest): Promise<CPC[]>{

      const cpc = await this.customerRepository.findById(id)

      if(!cpc){
         throw new AppError(404, "Cliente não existe.")
      }

      const data = await this.cpcRepository.listCPCByCustomer(id)

      return data
   }
}

export { ListCpcByCustomerUseCase }