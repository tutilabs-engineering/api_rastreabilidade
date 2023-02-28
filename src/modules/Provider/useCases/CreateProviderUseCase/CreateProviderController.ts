import { Request, Response } from "express";
import { CreateProviderService } from "../../backup/services/Provider/CreateProviderService";

class CreateProviderController {
  async create(req: Request, res: Response) {
    const { nome, externo } = req.body;

    // instanciando serviço
    const service = new CreateProviderService();

    const provider = await service.create({ nome, externo });

    return res.status(200).json(provider);
  }
}

export { CreateProviderController };
