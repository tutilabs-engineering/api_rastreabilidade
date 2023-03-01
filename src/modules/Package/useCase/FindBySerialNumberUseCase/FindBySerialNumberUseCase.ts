import { inject, injectable } from "tsyringe";
import { IPackageRepository } from "../../repositories/IPackageRepository";

@injectable()
class FindBySerialNumberUseCase{
    constructor(@inject("PackageRepository") private packageRepository: IPackageRepository){}

    async execute(serial_number: string){
        const data = await this.packageRepository.findBySerialNumber(serial_number);

        return data
    }
}

export { FindBySerialNumberUseCase }