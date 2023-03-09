import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { ICustomerRepository } from "../../../Customer/repositories/ICustomerRepository";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
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
   // @inject("CustomerRepository")
   // private customerRepository: ICustomerRepository
      @inject("ModelRepository")
   private modelRepository: IModelRepository
   ){}
   
   async execute({id}: IRequest): Promise<CPC[]>{

      const model = await this.modelRepository.findById(id)

      if(!model){
         throw new AppError(404, "Id de modelo não existe.")
      }

      const data = await this.cpcRepository.listCPCByCustomer(id)

      return data
   }
}

export { ListCpcByCustomerUseCase }