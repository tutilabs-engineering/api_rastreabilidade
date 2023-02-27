import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateOriginPackageUseCase } from "./UpdateOriginPackageUseCase";

class UpdateOriginPackageController {
  async handle(req: Request, res: Response) {
    // Buscando id nos parametros
    const { serial_number } = req.params;

    // Buscando dados da requisição
    const { origem, status } = req.body;

    // const updateOriginPackageServices = new UpdateOriginPackageServices();

    // const embalagem = await updateOriginPackageServices.update({
    //   origem,
    //   serial_number,
    //   status,
    // });

    const updateOriginPackageUseCase = container.resolve(UpdateOriginPackageUseCase)
    const embalagem = await updateOriginPackageUseCase.execute({
      serial_number,
      origem, 
      status,
    })

    return res.json(embalagem);
  }
}

export { UpdateOriginPackageController };
