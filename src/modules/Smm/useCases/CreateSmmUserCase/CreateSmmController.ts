import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSmmDTO } from "../../dtos/CreateSmmDTO";
import { CreateSmmUseCase } from "./CreateSmmUseCase";


class CreateSmmController {
  async handle(req: Request, res: Response) {
    const { user, fornecedor, embalagem, localizacao } = req.body as CreateSmmDTO;  
    
    // instanciando serviço
    const createSmmUseCase = container.resolve(CreateSmmUseCase);
    try {

      const smm = await createSmmUseCase.execute({ user, fornecedor, embalagem, localizacao });

      return res.status(200).json(smm);
      
    } catch ({ message }) {

      return res.status(400).json(message);
    }
  }
}

export { CreateSmmController };
