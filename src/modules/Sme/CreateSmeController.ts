import { Request, Response } from "express";
import { CreateSmeServices } from "../../backup/services/Sme/CreateSmeServices";

class CreateSmeController {
  async create(req: Request, res: Response) {
    // recebendo dados da requisição
    const { id_customer, id_package, status, username, matricula, origem } =
      req.body;

    // instanciando serviço de criação de SME
    const createSmeServices = new CreateSmeServices();

    const result = await createSmeServices.create({
      id_customer,
      id_package,
      status,
      username,
      matricula,
      origem,
    });

    const sme = {
      id: result.id,
      // Usuario
      nome_do_usuario: result.username,
      matricula_do_usuario: result.matricula,
      // Cliente que tá usando o carrinho
      razao_social: result.razao_social,
      cnpj: result.cnpj,
      ativo: result.ativo,
      // Embalagem
      serial_number: result.serial_number,
      origem: result.origem,
      destino: result.destino,
      modelo: result.modelo,
      status: result.status,
      data_hora: result.data,
    };

    return res.status(200).json(sme);
  }
}

export { CreateSmeController };
