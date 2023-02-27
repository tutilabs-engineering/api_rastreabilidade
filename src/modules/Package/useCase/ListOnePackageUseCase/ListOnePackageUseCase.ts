import { inject, injectable } from "tsyringe";
import { FiltersPackage } from "../../dtos/FiltersPackage";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";

interface IRequest {
  serial_number: string
}

@injectable()
class ListOnePackageUseCase {
  constructor(
    @inject("PackageRepository")
    private packageRepository: IPackageRepository
  ) { }

  async execute({ serial_number }: IRequest, { limit, take, status }: FiltersPackage): Promise<Package[]> {

  }
}

export { ListOnePackageUseCase };
