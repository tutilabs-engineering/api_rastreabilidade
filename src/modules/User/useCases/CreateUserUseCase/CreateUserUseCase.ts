import { inject, injectable } from "tsyringe";
import { HashPassword } from "../../../../utils/HashPassword";
import { ValidarEmail } from "../../../../utils/ValidarEmail";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

import utc from 'dayjs/plugin/utc'
import dayjs from "dayjs";
import { ValidarSenha } from "../../../../utils/ValidarSenha";
import { AppError } from "../../../../config/AppError";

@injectable()
class CreateUserUseCase{
    constructor(@inject("UserRepository") private userRepository: IUserRepository){}

    async execute({nome,ativo,admin, mnt,email,matricula,password}:  ICreateUserDTO){
        
        if(!nome) {throw new AppError(400,"Nome não existe, informe um nome")}

        if(!email) {throw new AppError(400,"Email não existe, informe um email")}
        const emailValido = ValidarEmail(email);
        
        if(!emailValido) {throw new AppError(400, "Email inválido, informe um novo email")}

        if(!password) {throw new AppError(400,"Senha vazia, insira uma senha")}
        ValidarSenha(password);

        const emailExists = await this.userRepository.findUserByEmail(email);
        if(emailExists){
            throw new AppError(404,"Usuário já existe, informe um novo email");
        }

        const matriculaExists = await this.userRepository.findUserByMatricula(matricula);
        if(matriculaExists){
            throw new AppError(404,"Usuário com esta matrícula já existe");
        }
        
        dayjs.extend(utc)
        const createdAt = new Date(dayjs().utc(true).toISOString());
        const updatedAt = new Date(dayjs().utc(true).toISOString());

        
        const hash_password = await HashPassword(password);

        await this.userRepository.create({admin, mnt, ativo, email,matricula,nome,password: hash_password,createdAt,updatedAt})
    }
}

export { CreateUserUseCase }