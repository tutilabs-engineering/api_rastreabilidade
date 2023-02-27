import { inject, injectable } from "tsyringe";
import { FiltersPackage } from "../../dtos/FiltersPackage";
import { UpdatePackage } from "../../dtos/UpdatePackage";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";

@injectable()
class UpdateOriginPackageUseCase {
    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository
      ) { }
    
      async execute({serial_number, origem, status }: UpdatePackage): Promise<Package[]> {
    
      }

}

export { UpdateOriginPackageUseCase }