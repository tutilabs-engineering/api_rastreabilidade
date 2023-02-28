import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO"
import { User } from "../entities/User"

export interface IUserRepository{
    create(userInfo: ICreateUserDTO):Promise<void>
    list():Promise<User[]>
    update(id: string, userInfo: IUpdateUserDTO):Promise<void>
    delete(id: string):Promise<void>
    findById(id: string):Promise<User | null>;
    findUserByEmail(email: string):Promise<User | null>;
    findUserByMatricula(matricula: string):Promise<User | null>;
}