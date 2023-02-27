import { Model } from "../entities/Model"

interface IModelRepository {
     create(data: Model): Promise<void>
     delete(): Promise<void>
     findById(id: string): Promise<Model>
     listModel(): Promise<Model[]>
     update(data: Model): Promise<void>
}

export { IModelRepository }