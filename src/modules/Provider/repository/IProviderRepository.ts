import { CreateProviderDTO } from "../dtos/CreateProviderDTO"
import { FiltersProviderDTO } from "../dtos/FiltersProviderDTO"
import { UpdateProviderDTO } from "../dtos/UpdateProviderDTO"

interface IProviderRepository {
    create(data: CreateProviderDTO): Promise<void>
    findById(data: FiltersProviderDTO): Promise<Provider>
    list(data: FiltersProviderDTO): Promise<Provider[] | null>
    update(data: UpdateProviderDTO):Promise<void>

}

export { IProviderRepository }