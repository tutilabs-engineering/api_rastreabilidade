import { inject, injectable } from "tsyringe";
import { FiltersSmeDTO } from "../../dtos/FiltersSmeDTO";
import { ISmeRepository } from "../../repositories/ISmeRepository";

@injectable()
class ListSmeUseCase {
    constructor(
        @inject("SmeRepository")
        private smeRepository: ISmeRepository,
    ){}

    async execute({skip, take}:FiltersSmeDTO ){


        const data = await this.smeRepository.list({skip,take})

        return data

    }

}

export {
    ListSmeUseCase
}