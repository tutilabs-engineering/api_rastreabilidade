import { Request, Response } from "express";
import { ListSmmRelatoryService } from "../../backup/services/Smm/ListSmmRelatoryService";

class ListSmmRelatoryController {
  async list(req: Request, res: Response) {
    const dataInicial = req.query.inicio;
    const dataFinal = req.query.final;

    const service = new ListSmmRelatoryService();

    const smm = await service.list(dataInicial, dataFinal);

    return res.status(200).json(smm);
  }
}

export { ListSmmRelatoryController };
