import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSmeRelatoryUseCase } from "./ListSmeRelatoryUseCase";

class ListSmeRelatoryController {
  async handle(req: Request, res: Response) {

    const {  take = 10, skip = 0 } = req.query
    const { inicio, final} = req.query


    // instanciando serviço

    const listSmeRelatoryUseCase = container.resolve(ListSmeRelatoryUseCase)

    // buscando no banco
    const result = await listSmeRelatoryUseCase.execute(String(inicio), String(final),
      {skip:Number(skip),take: Number(take)});

    return res.status(200).json(result);
  }
}

export { ListSmeRelatoryController };
