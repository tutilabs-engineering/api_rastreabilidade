import { inject, injectable } from "tsyringe";
import { CreateSmmDTO } from "../../dtos/CreateSmmDTO";
import { ISmmRepository } from "../../repositories/ISmmRepository";

@injectable()
class CreateSmmUseCase {

    constructor(
        @inject("SmmRepository")
        private smmRepository: ISmmRepository,
    ){}

    async execute({ embalagem, fornecedor, localizacao, user}: CreateSmmDTO){

    }

}

export{
    CreateSmmUseCase
}