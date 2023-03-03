import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { ISmeRepository } from "../../repositories/ISmeRepository";

@injectable()
class FindByOneSmeUseCase {
    constructor(
        @inject("SmeRepository")
        private smeRepository: ISmeRepository,
    ){}

    async execute(id: string ){
       const data = await this.smeRepository.findByOne(id)

       if(!data){
        throw new AppError(404, "SME não encontrado")
       }

        return data
        
       }


}

export {
    FindByOneSmeUseCase
}