import { Request, Response } from "express";
import { UserLoggedServices } from "../../backup/services/User/UserLoggedService";

class UserLoggedController {
  async verifyUser(req: Request, res: Response) {
    const tokenHeader = req.headers.authorization;

    // Verificando se o token não está vazio
    if (!tokenHeader) {
      return res.status(401).end();
    }

    // Separando Bearer do token
    const [, token] = tokenHeader.split(" ");

    const userLoggedServices = new UserLoggedServices();

    const user = await userLoggedServices.verifyUser(token);

    if (!user) {
      return res.status(500).end;
    }

    return res.status(200).json(user);
  }
}

export { UserLoggedController };
