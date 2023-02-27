import { inject, injectable } from "tsyringe";
import { CreatePackage } from "../../dtos/CreatePackage";
import { IPackageRepository } from "../../repositories/IPackageRepository";


@injectable()
class CreatePackageUseCase {
    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository
    ){}

    async execute({FK_destino,FK_modelo,origem,serial_number,status}: CreatePackage): Promise<void> {

    }

}

export  { CreatePackageUseCase }