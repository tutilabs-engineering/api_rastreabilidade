import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";



class CreateUserController{
    async handle(req: Request, res: Response){
        const createUserUseCase = container.resolve(CreateUserUseCase);

        const {nome, matricula, email, password, admin, mnt, ativo} = req.body
        
        
        await createUserUseCase.execute({nome,ativo,admin,mnt,email,matricula,password})

        return res.status(200).json({message: "Usuário criado com sucesso!"})
    }
}

export { CreateUserController }