import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdProviderUseCase } from "./FindByIdProviderUseCase";
    
class FindByIdProviderController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
      

     const findByIdProviderUseCase = container.resolve(FindByIdProviderUseCase)
    //iniciando serviço
    // const service = new ListOneProviderService();

    const provider = await findByIdProviderUseCase.execute({ id })

    return res.status(200).json(provider);
  }
}

export { FindByIdProviderController };
