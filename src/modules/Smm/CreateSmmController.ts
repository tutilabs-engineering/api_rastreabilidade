import { Request, Response } from "express";
import { CreateSmmService } from "../../backup/services/Smm/CreateSmmService";

interface iSmmRequest {
  user: {
    username: string;
    matricula: string;
  };
  fornecedor: {
    descricao: string;
    statusDoFornecedor: boolean;
  };
  embalagem: {
    descricao: string;
    serial_number: string;
    modeloDaEmbalagem: string;
  };
  localizacao: string
}

class CreateSmmController {
  async create(req: Request, res: Response) {
    const { user, fornecedor, embalagem, localizacao } = req.body as iSmmRequest;  
    
    // instanciando serviço
    const service = new CreateSmmService();

    try {
      const smm = await service.create({ user, fornecedor, embalagem, localizacao });

      return res.status(200).json(smm);
    } catch ({ message }) {
      return res.status(400).json(message);
    }
  }
}

export { CreateSmmController };
