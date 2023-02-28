import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOnePackageUseCase } from "./ListOnePackageUseCase";

class ListOnePackageController {
  async handle(req: Request, res: Response) {
    
    const { serial_number } = req.params;

    if (!serial_number) {
      res.status(400).end();
    }

    const listOnePackageUseCase = container.resolve(ListOnePackageUseCase)

    // Instanciando o os serviços de embalagem
    // const listOnePackageServices = new ListOnePackageServices();
    
      const embalagens = await listOnePackageUseCase.execute({serial_number},{ limit: 0, take: 0 })
    // buscando as embalagem no banco
    // const embalagens = await listOnePackageServices.list(serial_number);


    return res.status(200).json(embalagens);
  }
}

export { ListOnePackageController };
