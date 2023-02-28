import { Request, Response } from "express"
import { UpdateProviderService } from "../../backup/services/Provider/UpdateProviderService"

export class UpdateProviderController {

    async handle(req: Request, res: Response) {

        const { id } = req.params
        const { fornecedor, tipo } = req.body

        const service = new UpdateProviderService()

        const provider = await service.execute(id, fornecedor, tipo)

        return res.json(provider)

    }

}