import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateProviderUseCase } from "./UpdateProviderUseCase"

export class UpdateProviderController {

    async handle(req: Request, res: Response) {

        const { id } = req.params
        const { nome, externo } = req.body

        const updateProviderUseCase = container.resolve(UpdateProviderUseCase)
        await updateProviderUseCase.execute({id, nome, externo})

        return res.status(200).json()

    }

}