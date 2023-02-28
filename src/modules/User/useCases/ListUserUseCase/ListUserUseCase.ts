import { inject, injectable } from "tsyringe";
import { IFiltersUserDTO } from "../../dtos/FiltersUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ListUserUseCase{
    constructor(@inject("UserRepository") private UserRepository: IUserRepository){}

    async execute({take, skip}: IFiltersUserDTO):Promise<User[]>{

        const data = await this.UserRepository.list({take, skip});

        return data
    }
}

export { ListUserUseCase }