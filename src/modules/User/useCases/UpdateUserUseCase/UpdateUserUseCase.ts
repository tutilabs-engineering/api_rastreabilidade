import { inject, injectable } from "tsyringe";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class UpdateUserUseCase{
    constructor(@inject("UserRepository") private userRepository: IUserRepository){}

    async execute(id: string, userInfo: IUpdateUserDTO){
        await this.userRepository.update(id,userInfo);
    }
}

export { UpdateUserUseCase }