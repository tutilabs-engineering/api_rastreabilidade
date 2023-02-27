import { inject, injectable } from "tsyringe";
import { UpdateProvider } from "../../dtos/UpdateProvider";
import { IProviderRepository } from "../../repository/IProviderRepository";

@injectable()
class UpdateProviderUseCase {
    constructor(
        @inject("ProviderRepository")
        private providerRepository: IProviderRepository
    ){}

    async execute({id,nome, externo}: UpdateProvider) {
  
          
    

      }

}

export { UpdateProviderUseCase }