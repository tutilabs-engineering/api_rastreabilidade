import { inject, injectable } from "tsyringe";
import {  UpdateProviderDTO } from "../../dtos/UpdateProviderDTO";
import { IProviderRepository } from "../../repository/IProviderRepository";

@injectable()
class UpdateProviderUseCase {
    constructor(
        @inject("ProviderRepository")
        private providerRepository: IProviderRepository
    ){}

    async execute({id,nome, externo}: UpdateProviderDTO) {
  
          
    

      }

}

export { UpdateProviderUseCase }