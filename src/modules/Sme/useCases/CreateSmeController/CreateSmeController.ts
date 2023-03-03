import { Request, Response } from "express";

class CreateSmeController {
  async handle(req: Request, res: Response) {
    // recebendo dados da requisição
    const { id_customer, id_package, status, username, matricula, origem } =
      req.body;

    

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
