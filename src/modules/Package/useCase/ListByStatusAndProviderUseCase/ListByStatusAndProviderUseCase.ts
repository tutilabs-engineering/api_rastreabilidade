import { inject, injectable } from "tsyringe";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";


@injectable()
class ListByStatusAndProviderUseCase {
    constructor(
        @inject
            ("PackageRepository")
        private packageRepository: IPackageRepository
    ) { }

    async execute({ limit, take, status }: FiltersPackageDTO): Promise<any> {
        const data = await this.packageRepository.listByStatusAndProvider({ status: 3 })

        let dataRe = []
        await Promise.all(
            dataRe = JSON.parse(JSON.stringify(
                data,
                (key, value) => (typeof value === 'bigint' ? Number(value) : value) //serialize bigInt
            )))
        return dataRe
    }

}

export { ListByStatusAndProviderUseCase }