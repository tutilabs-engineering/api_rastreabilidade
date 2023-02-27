import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

class FindUserByIdController{
    async handle(req: Request, res: Response){
        const id = req.params.id
        const findUserByIdUseCase = container.resolve(FindUserByIdUseCase) ;
        return res.status(200).json(await findUserByIdUseCase.execute(id))
    }
}

export { FindUserByIdController }