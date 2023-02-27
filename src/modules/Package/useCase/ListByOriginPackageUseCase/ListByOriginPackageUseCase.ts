import { inject, injectable } from "tsyringe";
import { FiltersPackage } from "../../dtos/FiltersPackage";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";


interface IRequest {
    origin: string
}

@injectable()
class ListByOriginPackageUseCase{
    constructor(
        @inject
        ("PackageRepository")
        private packageRepository: IPackageRepository
    ){}

    async execute({ origin }:IRequest,{limit, take, status}: FiltersPackage): Promise<Package[]> {

    }

}

export { ListByOriginPackageUseCase }