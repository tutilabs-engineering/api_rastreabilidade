import { inject, injectable } from "tsyringe";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";

@injectable()
class ListPackageStoppedByCustomerUseCase{

    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository
      ) { }
    
      async execute({ limit, take, status }: FiltersPackageDTO): Promise<any> {
        const data = await this.packageRepository.listPackageStoppedByCustomer()

        return JSON.parse(JSON.stringify(
          data,
          (key, value) => (typeof value === 'bigint' ? Number(value) : value) //serialize bigInt
        ))

      }
}

export {ListPackageStoppedByCustomerUseCase}