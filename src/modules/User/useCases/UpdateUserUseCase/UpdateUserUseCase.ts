import { inject, injectable } from "tsyringe";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

import utc from 'dayjs/plugin/utc'
import dayjs from "dayjs";
import { HashPassword } from "../../../../utils/HashPassword";
import { ValidarSenha } from "../../../../utils/ValidarSenha";
import { AppError } from "../../../../config/AppError";

@injectable()
class UpdateUserUseCase{
    constructor(@inject("UserRepository") private userRepository: IUserRepository){}

    
    async execute(id: string, {admin,email,matricula,nome, password, mnt}: IUpdateUserDTO){
        dayjs.extend(utc)

        const user =  await this.userRepository.findById(id);

        const updatedAt = new Date(dayjs().utc(true).toISOString());

        if(!user){
            throw new AppError(404,"Usuário inválido") 
        }

        if (password) {
            ValidarSenha(password);
            password = await HashPassword(password);
        
        }
        await this.userRepository.update(id,{admin,email,password,mnt,matricula,nome,updatedAt});
    }
}

export { UpdateUserUseCase }