import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSmmRelatoryUseCase } from "./ListSmmRelatoryUseCase";


interface IQuery {
  dataInicial: Date
  dataFinal: Date
}
class ListSmmRelatoryController {
  async handle(req: Request, res: Response) {

    const {dataInicial , dataFinal } = req.query as unknown as IQuery   

    const listSmmRelatoryUseCase = container.resolve(ListSmmRelatoryUseCase)

    const smm = await listSmmRelatoryUseCase.execute(new Date(dataInicial), new Date(dataFinal));

    return res.status(200).json(smm);
  }
}

export { ListSmmRelatoryController };
