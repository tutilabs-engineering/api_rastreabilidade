import { Request, Response } from "express";
import { ListOneProviderService } from "../../backup/services/Provider/ListOneProviderService";

class ListOneProviderController {
  async list(req: Request, res: Response) {
    const { id } = req.params;

    //iniciando serviço
    const service = new ListOneProviderService();

    const provider = await service.list(id);

    return res.status(200).json(provider);
  }
}

export { ListOneProviderController };
