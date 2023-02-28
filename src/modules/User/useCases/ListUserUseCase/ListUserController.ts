import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController{

    async handle(req: Request, res: Response){

        const listUserUseCase = container.resolve(ListUserUseCase)
        const {take = 10, skip = 0} = req.query

        const data = await listUserUseCase.execute({take: Number(take), skip: Number(skip)})

        
        return res.status(200).json({users: data})
    }
}

export { ListUserController }