import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO"
import { User } from "../entities/User"

export interface IUserRepository{
    create():Promise<void>
    list():Promise<User[]>
    update(id: string, userInfo: IUpdateUserDTO):Promise<void>
    delete():Promise<void>
    findById(id: string):Promise<User | null>;
}