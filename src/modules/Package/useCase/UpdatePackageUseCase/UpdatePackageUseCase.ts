import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { ICustomerRepository } from "../../../Customer/repositories/ICustomerRepository";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
import { UpdatePackageDTO } from "../../dtos/UpdatePackageDTO ";
import { Package } from "../../entities/Package";
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
    
      async execute(id: string, { FK_destino, origem, FK_modelo, status }: UpdatePackageDTO): Promise<Package> {
        dayjs.extend(utc)

        const embalagem = this.packageRepository.findById({id})

        if(status){
          if(status > 3 || status < 0){
            throw new AppError(400, "Status deve ser um número entre 0 e 3.")
          } 
        }

        if(!embalagem){
          throw new AppError(404,"Embalagem não existe no sistema.")
        }

        if(!origem){
          throw new AppError(404,"Origem é obrigatorio.")
        }

        if(status == 0  || status == 1 || status == 3){
          const costumer = await this.customerRepository.findByRazaoSocial(origem);
          if(costumer){
            FK_destino = String(costumer.id)
          }

        }

        if(status == 2){
          if(FK_destino){
            const id_customer = await this.customerRepository.findById(FK_destino);
            if(!id_customer){
                throw new AppError(404,"Cliente não encontrado.")
            }
          }
        }
     
        
        if(FK_modelo){
          const id_modelo = await this.modelRepository.findById(FK_modelo)
          if(!id_modelo){
              throw new AppError(404,"Modelo não encontrado.")
          }
        }
        
       

        const updatedAt = new Date(dayjs().utc(true).toISOString());

        const data = await this.packageRepository.updatePackage(id,{FK_destino, origem, FK_modelo, status, updatedAt})

        return data
      }
}


export { UpdatePackageUseCase }