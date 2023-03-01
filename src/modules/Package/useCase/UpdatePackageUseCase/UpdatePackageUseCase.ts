import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { UpdatePackageDTO } from "../../dtos/UpdatePackageDTO ";
import { IPackageRepository } from "../../repositories/IPackageRepository";

@injectable()
class UpdatePackageUseCase {

    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository
      ) { }
    
      async execute(id: string, { FK_destino, origem, FK_modelo, status }: UpdatePackageDTO): Promise<void> {
        dayjs.extend(utc)

        const embalagem = this.packageRepository.findById({id})
        if(!embalagem){
          throw new AppError(404,"Embalagem não existe no sistema.")
        }

        const updatedAt = new Date(dayjs().utc(true).toISOString());
        
        await this.packageRepository.updatePackage(id,{FK_destino, origem, FK_modelo, status, updatedAt})
      }
}


export { UpdatePackageUseCase }