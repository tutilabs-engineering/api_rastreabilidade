import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOneProviderUseCase } from "./ListOneProviderUseCase";
class ListProviderController {

  async handle(req: Request, res: Response) {

    const { limit, take } = req.query


    const listOneProviderUseCase = container.resolve(ListOneProviderUseCase)

    const provider = await listOneProviderUseCase.execute({
      limit:Number(limit), take: Number(take)
    })

    return res.status(200).json(provider);
  }
}

export { ListProviderController };
