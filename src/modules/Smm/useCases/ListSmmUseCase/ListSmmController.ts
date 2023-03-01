import { Request, Response } from "express";
import { ListSmmService } from "../../backup/services/Smm/ListSmmService";

class ListSmmController {
  async list(req: Request, res: Response) {
    

    const service = new ListSmmService();

    const smm = await service.list();

    return res.status(200).json(smm);
  }
}

export { ListSmmController };
