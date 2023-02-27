import { inject, injectable } from "tsyringe";
import { FiltersPackage } from "../../dtos/FiltersPackage";
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

    async execute({model}:IRequest,{limit, take, status}: FiltersPackage): Promise<Package[]> {

    }
}

export { ListByModelPackageUseCase }