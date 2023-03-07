import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { CreateSmeUseCase } from "./CreateSmeUseCase";

class CreateSmeController {
  async handle(req: Request, res: Response,next:NextFunction) {
    // recebendo dados da requisição
    const { userId } = req 
    const { packageId } = req.body

    

    
    const createSmeUseCase = container.resolve(CreateSmeUseCase)
    const result = await createSmeUseCase.execute({
      id_user:String(userId),
      id_package: String(packageId)   
     });

  
    next()
    // return res.status(200).json();
  }
}

export { CreateSmeController };
