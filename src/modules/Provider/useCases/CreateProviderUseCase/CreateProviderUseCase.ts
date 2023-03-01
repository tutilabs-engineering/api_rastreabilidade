import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'

import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { CreateProviderDTO } from "../../dtos/CreateProviderDTO";
import { IProviderRepository } from "../../repository/IProviderRepository";


@injectable()
class CreateProviderUseCase {

    constructor(
        @inject("ProviderRepository")
        private providerRepository: IProviderRepository
    ){}

    async execute({nome, externo}: CreateProviderDTO): Promise<void>{
        dayjs.extend(utc)

        if(!nome){
            throw new AppError(400, "Nome não pode ficar vazio.")
        }

        if(externo == null){
            throw new AppError(400, "Local não pode ficar vazio")
        }
        const createdAt = new Date(dayjs().utc(true).toISOString());
        const updatedAt = new Date(dayjs().utc(true).toISOString());

        await this.providerRepository.create({nome,externo,createdAt,updatedAt})
    }


}

export { CreateProviderUseCase }