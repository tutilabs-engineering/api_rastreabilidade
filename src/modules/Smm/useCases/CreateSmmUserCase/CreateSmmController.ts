import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSmmDTO } from "../../dtos/CreateSmmDTO";
import { CreateSmmUseCase } from "./CreateSmmUseCase";


class CreateSmmController {
  async handle(req: Request, res: Response, next:NextFunction) {
    const {  status , id_provider, descricao } = req.body as CreateSmmDTO; 
    const { packageId } = req.body

    const { userId } = req 
    // instanciando serviço
    const createSmmUseCase = container.resolve(CreateSmmUseCase);


      await createSmmUseCase.execute({id_package: packageId,id_user:String(userId), status, id_provider, descricao });

      // return res.status(200).json(smm);
      
      next()
  }
}

export { CreateSmmController };
