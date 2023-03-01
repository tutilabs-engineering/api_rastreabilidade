import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProviderUseCase } from "./ListOneProviderUseCase";
class ListProviderController {

  async handle(req: Request, res: Response) {

    const { skip = 0, take = 10 } = req.query


    const listProviderUseCase = container.resolve(ListProviderUseCase)

    const provider = await listProviderUseCase.execute({
      skip:Number(skip), take: Number(take)
    })

    return res.status(200).json({provider});
  }
}

export { ListProviderController };
