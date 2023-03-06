import { inject, injectable } from "tsyringe";
import { ValidarSMM } from "../../../../utils/ValidarSMM";
import { ISmmRepository } from "../../../Smm/repositories/ISmmRepository";
import { FiltersPackageDTO } from "../../dtos/FiltersPackageDTO";
import { Package } from "../../entities/Package";
import { IPackageRepository } from "../../repositories/IPackageRepository";


interface IRequest {
    model: string
}

@injectable()
class ListByModelPackageUseCase {

    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository,
        @inject("SmmRepository")
        private smmRepository: ISmmRepository
    ){}

    async execute({model}:IRequest,{skip, take, status}: FiltersPackageDTO): Promise<any> {        
        const Disponivel = await this.packageRepository.countByModel(0,model)
        const EmUso = await this.packageRepository.countByModel(1,model)
        const Externas = await this.packageRepository.countByModel(2,model)
        
        const smmNotMoviment = await this.smmRepository.findByMovimentStatus(false)
        const packages_manutencao = await this.packageRepository.listByStatusAndModel(3,model)
        const Manutencao = await ValidarSMM(packages_manutencao,smmNotMoviment)
        
        const Clientes = await this.packageRepository.listClientByModel(model)

        return {
            Disponivel,
            EmUso,
            Externas,
            Manutencao,
            Clientes
        }
    }
}

export { ListByModelPackageUseCase }