import { inject, injectable } from "tsyringe";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
import { FiltersSmmDTO } from "../../dtos/FiltersSmmDTO";
import { Smm } from "../../entities/Smm";
import { ISmmRepository } from "../../repositories/ISmmRepository";
interface IRequest {
    serial_number: string 
}
@injectable()
class FindSmmByModelUseCase {

    constructor(
        @inject("SmmRepository")
        private smmRepository: ISmmRepository,

    ){

    }

    async execute({serial_number}:IRequest): Promise<Smm>{

   
    const data = await this.smmRepository.findBySerialNumber(serial_number)
    

    return data
       
    } 


}

export {
    FindSmmByModelUseCase
}