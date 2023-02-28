import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class DeleteUserUseCase{
    constructor(@inject("UserRepository") private userRepository: IUserRepository){}

    async execute(id: string){
        if(!id){throw new Error("Id inválido")}

        const user = await this.userRepository.findById(id);

        if(!user){
            throw new Error("Usuário não existe no sistema");
        }

        await this.userRepository.delete(id);

    }
}

export { DeleteUserUseCase }