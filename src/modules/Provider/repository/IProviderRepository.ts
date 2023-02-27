import { CreateProvider } from "../dtos/CreateProviderDTO"
import { FiltersProvider } from "../dtos/FiltersProviderDTO"
import { UpdateProvider } from "../dtos/UpdateProviderDTO"

interface IProviderRepository {
    create(data: CreateProvider): Promise<void>
    findById(data: FiltersProvider): Promise<Provider>
    listOne(): Promise<Provider[]>
    update(data: UpdateProvider):Promise<void>


}

export { IProviderRepository }