import { inject, injectable } from "tsyringe";
import { UpdatePackageDTO } from "../../dtos/UpdatePackageDTO ";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";

@injectable()
class UpdatePackageUseCase {

    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository
      ) { }
    
      async execute({id, serial_number, FK_destino, origem, FK_modelo, status }: UpdatePackageDTO): Promise<Package[]> {
    
      }
}


export { UpdatePackageUseCase }