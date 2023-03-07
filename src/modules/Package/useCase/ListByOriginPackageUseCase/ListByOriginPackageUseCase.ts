import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
import { CountByOriginAndModelPackageDTO } from "../../dtos/CountByOriginAndModelPackageDTO";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";


interface IRequest {
    origin: string
}

@injectable()
class ListByOriginPackageUseCase{
    constructor(
        @inject
        ("PackageRepository")
        private packageRepository: IPackageRepository,
        @inject
        ("ModelRepository")
        private modelRepository: IModelRepository
    ){}

    async execute({ origin }:IRequest,{skip, take, status = undefined}: FiltersPackageDTO): Promise<{all: number, data: CountByOriginAndModelPackageDTO[] }> {

        if(origin != "CD" && origin != "Jaguarão" && origin != "Filial" && origin != "Matriz" && origin != "Geral"){
            throw new AppError(404, "Origem não encontrada")
        }


        if(origin == "Geral"){
            origin = undefined
            status = undefined
        }


        const data = await  this.packageRepository.listByOrigin({skip, take, status}, origin)

        await Promise.all(
            data.map(async (item)=>{
               const modelo = await this.modelRepository.findById(item.FK_modelo)
               item['description_model'] = modelo.descricao
               item['img_path'] = modelo.img_path
            })
        )
        let all = 0
        await Promise.all(
            data.map(async (item)=>{
                all = item._count + all
        })

        )
       
        const result = {
            all,
            data
        }


        return result

    }

}

export { ListByOriginPackageUseCase }