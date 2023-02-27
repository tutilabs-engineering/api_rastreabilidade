import { inject, injectable } from "tsyringe";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class UpdateUserUseCase{
    constructor(@inject("UserRepository") private userRepository: IUserRepository){}

    async execute(id: string, userInfo: IUpdateUserDTO){

        const user =  await this.userRepository.findById(id);
        
        if(!user){
            throw new Error("Usuário não encontrado.") 
        }
        await this.userRepository.update(id,userInfo);
    }
}

export { UpdateUserUseCase }