import { inject, injectable } from "tsyringe";
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
class ListByCustomerUseCase {

    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository,
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository,
        @inject("ModelRepository")
        private modelRepository: IModelRepository
    ){}

    async execute({skip, take, status}: FiltersPackageDTO): Promise<any> {  
        
        const data = await this.packageRepository.listByCustomerWithModel({
          skip,
          status,
          take  
        })

        let all = 0
        await Promise.all(
            data.map(async (item)=>{
                const customer = await this.customerRepository.findById(item.FK_destino)
                item["customer"] = customer.razao_social
                item["img_path"] = customer.img_path
                const models = await this.packageRepository.listByModelByCustomer(item.FK_destino)
                console.log({models});
                
                models.map(async (item2)=>{
                    const model = await this.modelRepository.findById(item2.FK_modelo)
                    item2["description"] = model.descricao
                    item2["img_path"] = model.img_path

                })

                item["models"] = models
                all = item._count + all
            })
        )

        return {all, data}
    
    }
}

export { ListByCustomerUseCase }