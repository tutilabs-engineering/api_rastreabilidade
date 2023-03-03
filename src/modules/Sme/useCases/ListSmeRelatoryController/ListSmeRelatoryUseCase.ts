import dayjs from "dayjs";
import { inject, injectable } from "tsyringe";
import { FiltersSmeDTO } from "../../dtos/FiltersSmeDTO";
import { ISmeRepository } from "../../repositories/ISmeRepository";

@injectable()
class ListSmeRelatoryUseCase {
    constructor(
        @inject("SmeRepository")
        private smeRepository: ISmeRepository,
    ){}

    async execute(inicio: string, final: string,{skip, take}:FiltersSmeDTO ){
        const dataInicial = dayjs(inicio).format("MM-DD-YYYY")
        const dataFinal = dayjs(final).format("MM-DD-YYYY")

        const data = await this.smeRepository.listByDate(dataInicial, dataFinal,{skip,take})

        return data

    }

}

export {
    ListSmeRelatoryUseCase
}