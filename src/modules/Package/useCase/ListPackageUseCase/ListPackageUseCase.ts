import { inject, injectable } from "tsyringe";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";

@injectable()
class ListPackageUseCase{

    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository
      ) { }
    
      async execute({ limit, take, status }: FiltersPackageDTO): Promise<Package[]> {
    
      }
}

export {ListPackageUseCase}