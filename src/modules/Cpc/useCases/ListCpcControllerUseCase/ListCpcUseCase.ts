import { inject, injectable } from 'tsyringe'
import { FiltersCPCDTO } from '../../dtos/FiltersCpcDTO'
import { CPC } from '../../entities/CPC'
import { ICpcRepository } from '../../repositories/ICpcRepository'


@injectable()
class ListCpcCUseCase{
    constructor( 
        @inject("CpcRepository")
        private cpcRepository: ICpcRepository){}

    async execute({skip, take}:FiltersCPCDTO): Promise<CPC[]>{

        const cpc = await this.cpcRepository.list({skip, take})

        return cpc

    }

}

export { ListCpcCUseCase }