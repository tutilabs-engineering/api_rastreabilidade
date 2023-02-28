import { inject, injectable } from "tsyringe";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
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

    async execute({FK_destino}:IRequest,{limit, take, status}: FiltersPackageDTO): Promise<Package[]> {

    }



}

export { ListByDestinoPackageUseCase}