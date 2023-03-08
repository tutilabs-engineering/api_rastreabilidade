import { inject, injectable } from "tsyringe";
import { ICustomerRepository } from "../../../Customer/repositories/ICustomerRepository";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
import { IPackageRepository } from "../../../Package/repositories/IPackageRepository";
import { IProviderRepository } from "../../../Provider/repository/IProviderRepository";
import { IUserRepository } from "../../../User/repositories/IUserRepository";
import { CreateSmmDTO } from "../../dtos/CreateSmmDTO";
import { ISmmRepository } from "../../repositories/ISmmRepository";

@injectable()
class CreateSmmUseCase {

    constructor(
        @inject("SmmRepository")
        private smmRepository: ISmmRepository,
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository,
        @inject("PackageRepository")
        private packageRepository: IPackageRepository,
        @inject("ModelRepository")
        private modelRepository: IModelRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository,
        @inject("ProviderRepository")
        private providerRepository: IProviderRepository,
    ){}

    async execute({ id_package,id_user,id_provider, status, descricao}: CreateSmmDTO){

        const _package = await this.packageRepository.findById({id: id_package})
       

        if(status == 3)
        {
        const _provider = await this.providerRepository.findById({id: id_provider})
        const _user = await this.userRepository.findById(id_user);
         
        // Buscar dados completos
        // const _customer = await this.customerRepository.findById(_package.FK_destino);
        const _model = await this.modelRepository.findById(_package.FK_modelo)
         
            await this.smmRepository.create({
                matricula: String(_user.matricula),
                username:String( _user.nome),
                fornecedor: String(_provider.nome),
                statusDoFornecedor:String(_provider.externo ? "Externo" : "Interno"),
                descricao: String(descricao),
                serial_number:String(_package.serial_number),
                statusDaEmbalagem: String("Em manutenção"),
                statusDeMovimentacao: true,
                modeloDaEmbalagem:  String(_model.descricao),
          })
        
        }else{

            await this.smmRepository.update(_package.serial_number)


        }

    }

}

export{
    CreateSmmUseCase
}