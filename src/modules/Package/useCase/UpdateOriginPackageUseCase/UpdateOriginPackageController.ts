import { Request, Response } from "express";
import { UpdateOriginPackageServices } from "../../backup/services/Package/UpdateOriginPackageServices";

class UpdateOriginPackageController {
  async update(req: Request, res: Response) {
    // Buscando id nos parametros
    const { serial_number } = req.params;

    // Buscando dados da requisição
    const { origem, status } = req.body;

    const updateOriginPackageServices = new UpdateOriginPackageServices();

    const embalagem = await updateOriginPackageServices.update({
      origem,
      serial_number,
      status,
    });

    return res.json(embalagem);
  }
}

export { UpdateOriginPackageController };
