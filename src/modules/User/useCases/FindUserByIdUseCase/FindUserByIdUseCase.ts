import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class FindUserByIdUseCase{
    constructor(@inject("UserRepository") private userRepository: IUserRepository){}

    async execute(id: string){
        const data = await this.userRepository.findById(id);
        delete data.password
        delete data.matricula
        return data
    }
}

export { FindUserByIdUseCase }