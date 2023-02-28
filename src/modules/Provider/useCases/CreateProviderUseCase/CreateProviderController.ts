import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProviderUseCase } from "./CreateProviderUseCase";

class CreateProviderController {
  async create(req: Request, res: Response) {
    const { nome, externo } = req.body;

   // instanciando serviço
   // const service = new CreateProviderService(); 
   // const provider = await service.create({ nome, externo });
   
   const createProviderUseCase = container.resolve(CreateProviderUseCase)
  
   await createProviderUseCase.execute({ nome, externo })
    
   return res.status(200).json();
  
  }
}

export { CreateProviderController };
