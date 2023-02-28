import { inject, injectable } from "tsyringe";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

import utc from 'dayjs/plugin/utc'
import dayjs from "dayjs";

@injectable()
class UpdateUserUseCase{
    constructor(@inject("UserRepository") private userRepository: IUserRepository){}

    
    async execute(id: string, {admin,email,matricula,nome}: IUpdateUserDTO){
        dayjs.extend(utc)

        const user =  await this.userRepository.findById(id);
        const updatedAt = new Date(dayjs().utc(true).toISOString());

        if(!user){
            throw new Error("Usuário não encontrado.") 
        }
        await this.userRepository.update(id,{admin,email,matricula,nome,updatedAt});
    }
}

export { UpdateUserUseCase }