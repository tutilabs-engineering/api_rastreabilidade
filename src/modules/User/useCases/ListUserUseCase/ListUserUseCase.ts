import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ListUserUseCase{
    constructor(@inject("UserRepository") private UserRepository: IUserRepository){}

    async execute():Promise<User[]>{

        const data = await this.UserRepository.list();

        return data
    }
}

export { ListUserUseCase }