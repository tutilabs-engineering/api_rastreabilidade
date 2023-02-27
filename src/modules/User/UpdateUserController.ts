import { Request, Response } from "express";
import { UpdateUserServices } from "../../backup/services/User/UpdateUserServices";

class UpdateUserController {
  async update(req: Request, res: Response) {
    // Buscando id do parametro
    const { id } = req.params;

    // Pegando dados do corpo do quest
    const { nome, matricula, email, password, admin, mnt, ativo } = req.body;

    const updateUserServices = new UpdateUserServices();

    // atualizando usuário
    const user = await updateUserServices.update({
      id,
      matricula,
      nome,
      email,
      password,
      admin,
      mnt,
      ativo,
    });

    return res.status(200).json(user);
  }
}

export { UpdateUserController };
