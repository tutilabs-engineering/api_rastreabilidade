import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { ValidarSMM } from "../../../../utils/ValidarSMM";
import { ICustomerRepository } from "../../../Customer/repositories/ICustomerRepository";
import { Model } from "../../../Model/entities/Model";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
import { ISmmRepository } from "../../../Smm/repositories/ISmmRepository";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";


interface IRequest {
    model: string
}

@injectable()
class ListPackageByCustomerUseCase {

    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository,
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository,
        @inject("ModelRepository")
        private modelRepository: IModelRepository
    ){}

    async execute({skip, take }: FiltersPackageDTO, FK_destino: string): Promise<{serial_number:string}[]> {  

        if(!FK_destino){
            throw new AppError(404, "Cliente não selecionado")
        }
        
        const data = await this.packageRepository.listPackageByCustomer({
          skip,
          take
        },
        FK_destino)


        return  data
    
    }
}

export { ListPackageByCustomerUseCase }