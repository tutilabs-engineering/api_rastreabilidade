import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListByStatusAndProviderUseCase } from "./ListByStatusAndProviderUseCase"

class ListByStatusAndProviderController {
    async handle(req: Request, res: Response) {
        const { limit, take } = req.query

        
        const listByStatusAndProviderUseCase = container.resolve(ListByStatusAndProviderUseCase)
        const embalagens = await listByStatusAndProviderUseCase.execute({limit: Number(limit), take:  Number(take)} )

        return res.json(embalagens)

    }
}


export { ListByStatusAndProviderController }