import { inject, injectable } from "tsyringe";
import { FiltersPackage } from "../../dtos/FiltersPackage";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";

@injectable()
class ListByStatusPackageUseCase {
    constructor(
        @inject
        ("PackageRepository")
        private packageRepository: IPackageRepository
    ){}

    async execute({limit, take, status}: FiltersPackage): Promise<Package[]> {

    }

}

export { ListByStatusPackageUseCase }