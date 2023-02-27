import { inject, injectable } from "tsyringe";
import { FiltersPackage } from "../../dtos/FiltersPackage";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";

interface IRequest {
    FK_destino: string
}
@injectable()
class ListByDestinoPackageUseCase {
    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository
    ){}

    async execute({FK_destino}:IRequest,{limit, take, status}: FiltersPackage): Promise<Package[]> {

    }



}

export { ListByDestinoPackageUseCase}