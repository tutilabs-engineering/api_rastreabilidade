import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController{
    async handle(req: Request, res: Response){
        const deleteUserUseCase = container.resolve(DeleteUserUseCase);

        const id = req.params.id;

        await deleteUserUseCase.execute(id);

        return res.status(200).json({message: "Usuário deletado com sucesso!"})

    }
}

export { DeleteUserController }