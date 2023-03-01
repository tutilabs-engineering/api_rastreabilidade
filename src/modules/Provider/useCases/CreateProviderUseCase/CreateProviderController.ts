import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProviderUseCase } from "./CreateProviderUseCase";

class CreateProviderController {
  async handle(req: Request, res: Response) {
    const { nome, externo } = req.body;
   
   const createProviderUseCase = container.resolve(CreateProviderUseCase)
  
   await createProviderUseCase.execute({ nome, externo })
    
   return res.status(201).json({message: "Fornecedor criado com sucesso!"});
  
  }
}

export { CreateProviderController };
