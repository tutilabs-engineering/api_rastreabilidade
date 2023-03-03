import { inject, injectable } from "tsyringe";
import { FiltersSmeDTO } from "../../dtos/FiltersSmeDTO";
import { ISmeRepository } from "../../repositories/ISmeRepository";

@injectable()
class ListSmeRelatoryUseCase {
    constructor(
        @inject("SmeRepository")
        private smeRepository: ISmeRepository,
    ){}

    async execute(dataInicial: Date, dataFinal: Date,{skip, take}:FiltersSmeDTO ){

        const data = await this.smeRepository.listByDate(dataInicial, dataFinal,{skip,take})

        return data

    }

}

export {
    ListSmeRelatoryUseCase
}