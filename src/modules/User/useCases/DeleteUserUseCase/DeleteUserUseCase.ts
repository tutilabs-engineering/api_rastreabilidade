import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class DeleteUserUseCase{
    constructor(@inject("UserRepository") private userRepository: IUserRepository){}

    async execute(id: string){
        if(!id){throw new AppError(400,"Id inválido")}

        const user = await this.userRepository.findById(id);

        if(!user){
            throw new AppError(404,"Usuário não existe no sistema");
        }

        await this.userRepository.delete(id);

    }
}

export { DeleteUserUseCase }