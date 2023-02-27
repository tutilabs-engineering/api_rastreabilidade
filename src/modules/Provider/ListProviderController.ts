import { Request, Response } from "express";
import { ListProviderService } from "../../backup/services/Provider/ListProviderService";

class ListProviderController {
  async list(req: Request, res: Response) {
    //iniciando serviço
    const service = new ListProviderService();

    const provider = await service.list();

    return res.status(200).json(provider);
  }
}

export { ListProviderController };
