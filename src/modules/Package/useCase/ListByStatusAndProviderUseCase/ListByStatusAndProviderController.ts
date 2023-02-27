import { Request, Response } from "express"
import { ListByStatusAndProviderServices } from "../../backup/services/Package/ListByStatusAndProviderServices"

class ListByStatusAndProviderController {
    async handle(req: Request, res: Response) {

        const service = new ListByStatusAndProviderServices()

        const embalagens = await service.execute()

        return res.json(embalagens)

    }
}


export { ListByStatusAndProviderController }