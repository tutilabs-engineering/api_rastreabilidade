import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { ICpcRepository } from "../../repositories/ICpcRepository";


@injectable()
class DeleteCpcUseCase {

    constructor( 
        @inject("CpcRepository")
        private cpcRepository: ICpcRepository){}


    async execute(id: string): Promise<void>{

        const cpc = await this.cpcRepository.findbyId(id)
               
        if(!cpc){
            throw new AppError(404, "Vinculaçao de não encontrada.")
        }
        await this.cpcRepository.delete(id)

    }

}

export {
    DeleteCpcUseCase
}