import { Request, Response } from "express";
import { ListSmeServices } from "../../backup/services/Sme/ListSmeServices";

interface iForm {
  id: string;
  // Usuario
  nome_do_usuario: string;
  matricula_do_usuario: string;
  // Cliente que tá usando o carrinho
  razao_social: string;
  cnpj: string;
  ativo: boolean;
  // Embalagem
  serial_number: string;
  origem: string;
  destino: string;
  modelo: string;
  status: string;
  data_hora: string;
}

class ListSmeController {
  async list(req: Request, res: Response) {
    // instanciando serviço
    const listSmeServices = new ListSmeServices();

    // buscando no banco
    const result = await listSmeServices.list();

    return res.status(200).json(result);
  }
}

export { ListSmeController };
