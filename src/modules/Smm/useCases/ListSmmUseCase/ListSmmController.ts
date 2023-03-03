import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSmmUseCase } from "./ListSmmUseCase";

class ListSmmController {
  async handle(req: Request, res: Response) {
    
    const { skip = 0,take = 10, status } = req.query

    const listSmmUseCase = container.resolve(ListSmmUseCase)

    const smm = await listSmmUseCase.execute({ skip: Number(skip), take: Number(take), status: Number(status)});

    return res.status(200).json(smm);
  }
}

export { ListSmmController };
