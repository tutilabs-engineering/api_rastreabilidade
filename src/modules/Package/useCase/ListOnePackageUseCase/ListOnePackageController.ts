import { Request, Response } from "express";
import { ListOnePackageServices } from "../../backup/services/Package/ListOnePackageServices";

class ListOnePackageController {
  async list(req: Request, res: Response) {
    const { serial_number } = req.params;

    if (!serial_number) {
      res.status(400).end();
    }

    // Instanciando o os serviços de embalagem
    const listOnePackageServices = new ListOnePackageServices();

    // buscando as embalagem no banco
    const embalagens = await listOnePackageServices.list(serial_number);


    return res.status(200).json(embalagens);
  }
}

export { ListOnePackageController };
