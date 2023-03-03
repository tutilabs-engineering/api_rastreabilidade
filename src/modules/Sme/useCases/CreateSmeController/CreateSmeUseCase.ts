import { inject, injectable } from "tsyringe";
import { ICustomerRepository } from "../../../Customer/repositories/ICustomerRepository";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
import { IPackageRepository } from "../../../Package/repositories/IPackageRepository";
import { IUserRepository } from "../../../User/repositories/IUserRepository";
import { CreateSmeDTO } from "../../dtos/CreateSmeDTO";
import { Sme } from "../../entities/Sme";
import { ISmeRepository } from "../../repositories/ISmeRepository";

@injectable()
class CreateSmeUseCase {

    constructor(
        @inject("SmeRepository")
        private smeRepository: ISmeRepository,
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository,
        @inject("PackageRepository")
        private packageRepository: IPackageRepository,
        @inject("ModelRepository")
        private modelRepository: IModelRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository
    ){}

    async execute({id_user,id_package}: CreateSmeDTO): Promise<void>{
         
        // Buscar dados de embalagem e usuario
        const _package = await this.packageRepository.findById({id: id_package})
        const _user = await this.userRepository.findById(id_user);
         
        // Buscar dados completos
        const _customer = await this.customerRepository.findById(_package.FK_destino);
        const _model = await this.modelRepository.findById(_package.FK_modelo)

         await this.smeRepository.create({
              matricula: String(_user.matricula),
              username:String( _user.nome),
              cnpj: String(_customer.cnpj),
              origem: String(_package.origem),
              ativo: true,
              destino: String(_customer.razao_social),
              razao_social:String(_customer.razao_social),
              data: new Date(),
              modelo: String(_model.descricao),
              serial_number:String(_package.serial_number),
              status: String(_package.status)
        })

    }
     

}

export {
    CreateSmeUseCase
}