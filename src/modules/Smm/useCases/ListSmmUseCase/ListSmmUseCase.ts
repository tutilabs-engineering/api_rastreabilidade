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

    async execute({skip, take}: FiltersSmmDTO){

    const data = await this.smmRepository.list({
        skip,
        take
    })

    return data
       
    } 


}

export {
    ListSmmUseCase
}