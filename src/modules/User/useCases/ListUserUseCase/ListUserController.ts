import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController{

    async handle(req: Request, res: Response){

        const listUserUseCase = container.resolve(ListUserUseCase)

        return res.status(200).json({users: await listUserUseCase.execute()})
    }
}

export { ListUserController }