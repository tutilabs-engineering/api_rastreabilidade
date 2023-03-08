import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'

import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { ICustomerRepository } from "../../../Customer/repositories/ICustomerRepository";
import { IModelRepository } from "../../../Model/repositories/IModelRepository";
import { CreatePackageDTO } from "../../dtos/CreatePackageDTO";
import { IPackageRepository } from "../../repositories/IPackageRepository";


@injectable()
class CreatePackageUseCase {
    constructor(
        @inject("PackageRepository")
        private packageRepository: IPackageRepository,
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository,
        @inject("ModelRepository")
        private modelRepository: IModelRepository
    ){}

    async execute({FK_modelo,origem,serial_number}: CreatePackageDTO): Promise<void> {
        // if(!FK_destino){
        //     throw new AppError(400, "Cliente nao informado.")
        // }
        if(!FK_modelo){
            throw new AppError(400, "Modelo nao informado.")
        }

        if(!origem){
            throw new AppError(400, "Origem nao informado.")
        }

        if(!serial_number){
            throw new AppError(400, "Numero de serie nao informado.")
        }

        const package_exists = await this.packageRepository.findBySerialNumber(serial_number)
        if(package_exists){
            throw new AppError(400, "Embalagem já existe no banco de dados.")
        }

        // if(status == undefined || status == null){
        //     throw new AppError(400, "Status nao informado.")
        // }

        const id_customer = await this.customerRepository.findByRazaoSocial(origem);
        // if(!id_customer){
        //     throw new AppError(404,"Cliente não encontrado.")
        // }
        const FK_destino = String(id_customer.id)
        
        const id_modelo = await this.modelRepository.findById(FK_modelo)
        if(!id_modelo){
            throw new AppError(404,"Modelo não encontrado.")
        }

        // if(!(status >= 0 && status <= 3)){
        //     throw new AppError(400, "Status deve ser um número entre 0 e 3.")
        // }  

        dayjs.extend(utc)
        const createdAt = new Date(dayjs().utc(true).toISOString());
        const updatedAt = new Date(dayjs().utc(true).toISOString());
        
        await this.packageRepository.create({FK_destino,FK_modelo,origem,serial_number, status: 0,createdAt,updatedAt})
    }

}

export  { CreatePackageUseCase }