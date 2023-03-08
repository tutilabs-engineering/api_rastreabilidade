import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";

@injectable()
class ListPackageByModelAndOriginUseCase{

    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository
      ) { }
    
      async execute(origin: string ,{ skip, take, status,FK_modelo }: FiltersPackageDTO): Promise<{serial_number: string}[]> {

        if(origin != "CD" && origin != "Jaguarão" && origin != "Filial" && origin != "Matriz"){
          throw new AppError(404, "Origem não encontrada")

          
        }

        const data = await this.packageRepository.listByModelAndStatusWitchOrigin(origin, { skip, take, status,FK_modelo })

        return data


    
      }
}

export {ListPackageByModelAndOriginUseCase}