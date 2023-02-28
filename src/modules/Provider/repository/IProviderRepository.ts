import { CreateProvider } from "../dtos/CreateProvider"
import { FiltersProvider } from "../dtos/FiltersProvider"
import { UpdateProvider } from "../dtos/UpdateProvider"

interface IProviderRepository {
    create(data: CreateProvider): Promise<void>
    findById(data: FiltersProvider): Promise<Provider>
    listOne(): Promise<Provider[]>
    update(data: UpdateProvider):Promise<void>


}

export { IProviderRepository }