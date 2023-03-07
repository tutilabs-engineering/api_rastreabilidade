import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";
import { compare } from "bcryptjs";
import { AppError } from "../../../../config/AppError";
import { sign } from "jsonwebtoken";
import { User } from "../../entities/User";


interface IRequest {
    email: string, 
    password: string
}
@injectable()
class AuthenticateUserUseCase{
    constructor(@inject("UserRepository") private userRepository: IUserRepository){}

    async execute({email, password}: IRequest):Promise<{token: string, user: User}> {

    const user = await this.userRepository.findUserByEmail(email)

     if (!user.ativo) {
            throw new AppError(401, "User is disabled");
     }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError(401, "register or password incorrect");
    }

    delete user.password
    
    const token = sign({}, process.env.SECRET, {
        subject: user.id,
        expiresIn: "1d",
      });

      return {token, user}

    }
  
}

export {
    AuthenticateUserUseCase
}