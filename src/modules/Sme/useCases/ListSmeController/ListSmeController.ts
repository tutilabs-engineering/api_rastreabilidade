import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSmeUseCase } from "./ListSmeUseCase";



class ListSmeController {
  async handle(req: Request, res: Response) {

    const { take = 10, skip = 0 } = req.query

    // instanciando serviço
    const listSmeUseCase = container.resolve(ListSmeUseCase)

    // buscando no banco
    const result = await listSmeUseCase.execute({skip:Number(skip),take: Number(take)});

    return res.status(200).json(result);
  }
}

export { ListSmeController };
