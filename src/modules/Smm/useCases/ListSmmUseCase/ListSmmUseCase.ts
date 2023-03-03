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

    async execute({skip, take, status }: FiltersSmmDTO){

    let statusEmb = "Interno"

    if(status == 1){statusEmb = "Externo"}
    

    const data = await this.smmRepository.list({
        skip,
        take,
    },
    statusEmb
    )

    return data
       
    } 


}

export {
    ListSmmUseCase
}