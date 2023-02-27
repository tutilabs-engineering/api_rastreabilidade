import { Request, Response } from "express";
import { ListSmeRelatoryServices } from "../../backup/services/Sme/ListSmeRelatoryServices";

class ListSmeRelatoryController {
  async list(req: Request, res: Response) {
    const dataInicial = req.query.inicio;
    const dataFinal = req.query.final;

    // instanciando serviço
    const listSmeServices = new ListSmeRelatoryServices();

    // buscando no banco
    const result = await listSmeServices.list(dataInicial, dataFinal);

    return res.status(200).json(result);
  }
}

export { ListSmeRelatoryController };
