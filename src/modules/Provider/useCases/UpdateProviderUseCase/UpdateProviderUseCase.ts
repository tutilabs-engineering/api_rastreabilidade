import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'

import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import {  UpdateProviderDTO } from "../../dtos/UpdateProviderDTO";
import { IProviderRepository } from "../../repository/IProviderRepository";

@injectable()
class UpdateProviderUseCase {
    constructor(
        @inject("ProviderRepository")
        private providerRepository: IProviderRepository
    ){}

    async execute({id,nome, externo}: UpdateProviderDTO) {

        dayjs.extend(utc)
        const updatedAt = new Date(dayjs().utc(true).toISOString());
        
        const provider = await this.providerRepository.findById({id});
          if(!provider){ 
            throw new AppError(404,"Fornecedor não existe no banco.")
          }

          if(!nome){
            nome = String(provider.nome)    
        }
        
        await this.providerRepository.update({id,externo,nome,updatedAt})

      }

}

export { UpdateProviderUseCase }