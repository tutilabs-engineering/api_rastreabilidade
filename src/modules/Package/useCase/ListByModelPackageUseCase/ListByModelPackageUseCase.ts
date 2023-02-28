import { inject, injectable } from "tsyringe";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";


interface IRequest {
    model: string
}

@injectable()
class ListByModelPackageUseCase {

    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository
    ){}

    async execute({model}:IRequest,{limit, take, status}: FiltersPackageDTO): Promise<Package[]> {

    }
}

export { ListByModelPackageUseCase }