import { inject, injectable } from "tsyringe";
import { FiltersPackage } from "../../dtos/FiltersPackage";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";


@injectable()
class ListByStatusAndProviderUseCase{
    constructor(
        @inject
        ("PackageRepository")
        private packageRepository: IPackageRepository
    ){}

    async execute({limit, take, status}: FiltersPackage): Promise<Package[]> {

    }

}

export { ListByStatusAndProviderUseCase }