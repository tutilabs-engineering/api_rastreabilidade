import { CreateModelDTO } from "../dtos/CreateModelDTO"
import { FiltersModelDTO } from "../dtos/FiltersModelDTO"
import { UpdateModelDTO } from "../dtos/UpdateModelDTO"
import { Model } from "../entities/Model"

interface IModelRepository {
     create(data: CreateModelDTO): Promise<void>
     delete(id: string): Promise<void>
     findById(id: string): Promise<Model>
     findByDescription(desc: string): Promise<Model>
     listModel(data: FiltersModelDTO): Promise<Model[]>
     update(data: UpdateModelDTO): Promise<void>
}

export { IModelRepository }