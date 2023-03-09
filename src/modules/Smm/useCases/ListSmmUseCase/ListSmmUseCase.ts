import { inject, injectable } from "tsyringe";
import { FiltersSmmDTO } from "../../dtos/FiltersSmmDTO";
import { ISmmRepository } from "../../repositories/ISmmRepository";

@injectable()
class ListSmmUseCase {

    constructor(
        @inject("SmmRepository")
        private smmRepository: ISmmRepository,
    ){

    }

    async execute({skip, take, status }: FiltersSmmDTO, modeloDaEmbalagem: string){

    let statusEmb = "Interno"

    if(status == 1){statusEmb = "Externo"}
     console.log({
        skip,
        take,

    statusEmb,
    modeloDaEmbalagem
     });
     

    const data = await this.smmRepository.list({
        skip,
        take,
    },
    statusEmb,
    modeloDaEmbalagem
    )

    return data
       
    } 


}

export {
    ListSmmUseCase
}