import { inject, injectable } from "tsyringe";
import { CreatePackageDTO } from "../../dtos/CreatePackageDTO";
import { IPackageRepository } from "../../repositories/IPackageRepository";


@injectable()
class CreatePackageUseCase {
    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository
    ){}

    async execute({FK_destino,FK_modelo,origem,serial_number,status}: CreatePackageDTO): Promise<void> {

    }

}

export  { CreatePackageUseCase }