import { inject, injectable } from "tsyringe";
import { CPC } from "../../entities/CPC";
import { ICpcRepository } from "../../repositories/ICpcRepository";

interface IRequest {
   id: string
}

@injectable()
class ListCpcByCustomerUseCase {
   constructor( 
   @inject("CpcRepository")
   private cpcRepository: ICpcRepository){}
   
   async execute({id}: IRequest): Promise<CPC[]>{

       
      const data = await this.cpcRepository.listCPCByCustomer(id)

      return data
   }
}

export { ListCpcByCustomerUseCase }