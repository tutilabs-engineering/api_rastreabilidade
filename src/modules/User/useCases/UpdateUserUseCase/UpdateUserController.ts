import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController{
    async handle(req: Request, res: Response){
        const id = req.params.id;
        const {admin, email, matricula, nome, mnt, password} = req.body
        const updateUserUseCase = container.resolve(UpdateUserUseCase);
        await updateUserUseCase.execute(id,{admin,email,matricula,nome, mnt, password});

        return res.status(200).json({message: "Usuário atualizado com sucesso"})
    }
}


export { UpdateUserController }