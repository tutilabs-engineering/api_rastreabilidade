import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSmmByModelUseCase } from "./FindSmmByModelUseCase";

class FindSmmByModelController {
  async handle(req: Request, res: Response) {
    
    const { skip = 0,take = 10, status } = req.query
    const { serial_number } = req.params

    const findSmmByModelUseCase = container.resolve(FindSmmByModelUseCase)

    const smm = await findSmmByModelUseCase.execute({serial_number});

    return res.status(200).json(smm);
  }
}

export { FindSmmByModelController };
