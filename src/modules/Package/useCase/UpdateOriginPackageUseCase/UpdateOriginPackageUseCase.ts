import { inject, injectable } from "tsyringe";
import { UpdatePackageDTO } from "../../dtos/UpdatePackageDTO ";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";

@injectable()
class UpdateOriginPackageUseCase {
    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository
      ) { }
    
      async execute({serial_number, origem, status }: UpdatePackageDTO): Promise<Package[]> {
    
      }

}

export { UpdateOriginPackageUseCase }