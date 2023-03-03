import { inject, injectable } from "tsyringe";
import { FiltersSmeDTO } from "../../dtos/FiltersSmeDTO";
import { ISmeRepository } from "../../repositories/ISmeRepository";

@injectable()
class ListByCpnjSmeUseCase{
    constructor(
        @inject("SmeRepository")
        private smeRepository: ISmeRepository,
    ){}

    async execute(cnpj: string, {skip, take}:FiltersSmeDTO ){

        return await this.smeRepository.listByCnpj(cnpj,{skip, take})

    }

}

export {
    ListByCpnjSmeUseCase
}