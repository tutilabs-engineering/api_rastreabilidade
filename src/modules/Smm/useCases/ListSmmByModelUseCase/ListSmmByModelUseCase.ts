import { inject, injectable } from "tsyringe";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
import { FiltersSmmDTO } from "../../dtos/FiltersSmmDTO";
import { ISmmRepository } from "../../repositories/ISmmRepository";

@injectable()
class ListSmmByModelUseCase {

    constructor(
        @inject("SmmRepository")
        private smmRepository: ISmmRepository,
        @inject("ModelRepository")
        private modelRepository:IModelRepository,
    ){

    }

    async execute({skip, take, status }: FiltersSmmDTO){

    let statusEmb = "Interno"

    if(status == 1){statusEmb = "Externo"}
    

    const data = await this.smmRepository.listSmmByModel({
        skip,
        take,
    },
    statusEmb
    )

    let all = 0
    await Promise.all(
        data.map(async (item)=>{
             const model = await this.modelRepository.findByDescription(item.modeloDaEmbalagem)
            item["path"] = model.img_path
            all = item._count + all
        })

    )


    return {all, data}
       
    } 


}

export {
    ListSmmByModelUseCase
}