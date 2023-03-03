import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSmmRelatoryUseCase } from "./ListSmmRelatoryUseCase";

class ListSmmRelatoryController {
  async handle(req: Request, res: Response) {

    const {dataInicial,dataFinal } = req.body

    const listSmmRelatoryUseCase = container.resolve(ListSmmRelatoryUseCase)

    const smm = await listSmmRelatoryUseCase.execute(dataInicial, dataFinal);

    return res.status(200).json(smm);
  }
}

export { ListSmmRelatoryController };
