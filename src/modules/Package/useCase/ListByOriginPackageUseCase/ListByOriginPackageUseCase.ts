import { inject, injectable } from "tsyringe";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
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

    async execute({ origin }:IRequest,{limit, take, status}: FiltersPackageDTO): Promise<Package[]> {

    }

}

export { ListByOriginPackageUseCase }