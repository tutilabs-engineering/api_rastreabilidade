import { inject, injectable } from "tsyringe";
import { FiltersSmeDTO } from "../../dtos/FiltersSmeDTO";
import { ISmeRepository } from "../../repositories/ISmeRepository";

@injectable()
class ListByPackageSmeUseCase{
    constructor(
        @inject("SmeRepository")
        private smeRepository: ISmeRepository,
    ){}

    async execute(serial_number: string, {skip,take}: FiltersSmeDTO){


        return await this.smeRepository.listByPackage(serial_number, {skip, take})

    }



}

export { 
    ListByPackageSmeUseCase
}