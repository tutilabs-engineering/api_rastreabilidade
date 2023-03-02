import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { ICustomerRepository } from "../../../Customer/repositories/ICustomerRepository";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
import { UpdatePackageDTO } from "../../dtos/UpdatePackageDTO ";
import { IPackageRepository } from "../../repositories/IPackageRepository";

@injectable()
class UpdatePackageUseCase {

    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository,
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository,
        @inject("ModelRepository")
        private modelRepository: IModelRepository
      ) { }
    
      async execute(id: string, { FK_destino, origem, FK_modelo, status }: UpdatePackageDTO): Promise<void> {
        dayjs.extend(utc)

        const embalagem = this.packageRepository.findById({id})
        if(!embalagem){
          throw new AppError(404,"Embalagem não existe no sistema.")
        }

        if(FK_destino){
          const id_customer = await this.customerRepository.findById(FK_destino);
          if(!id_customer){
              throw new AppError(404,"Cliente não encontrado.")
          }
        }
        
        
        if(FK_modelo){
          const id_modelo = await this.modelRepository.findById(FK_modelo)
          if(!id_modelo){
              throw new AppError(404,"Modelo não encontrado.")
          }
        }
        
        if(status){
          if(status > 3 || status < 0){
            throw new AppError(400, "Status deve ser um número entre 0 e 3.")
          } 
        }

        const updatedAt = new Date(dayjs().utc(true).toISOString());
        
        await this.packageRepository.updatePackage(id,{FK_destino, origem, FK_modelo, status, updatedAt})
      }
}


export { UpdatePackageUseCase }