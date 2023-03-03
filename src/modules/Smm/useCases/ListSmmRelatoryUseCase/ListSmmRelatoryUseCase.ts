import { inject, injectable } from "tsyringe";
import { ISmmRepository } from "../../repositories/ISmmRepository";

@injectable()
class ListSmmRelatoryUseCase {

    
    constructor(
        @inject("SmmRepository")
        private smmRepository: ISmmRepository,
    ){}

     async execute(dataInicial: Date, dataFinal: Date){

        const data = await this.smmRepository.listRelatory(dataInicial, dataFinal)

        return data
    }


}

export {
    ListSmmRelatoryUseCase
}