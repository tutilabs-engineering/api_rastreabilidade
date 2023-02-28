import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListByStatusPackageServices } from "../../backup/services/Package/ListByStatusPackageServices"
import { ListByStatusPackageUseCase } from "./ListByStatusPackageUseCase"

class ListByStatusPackageController{

    async handle(req: Request, res: Response){

        const {status} = req.params
        const { limit, take } = req.query

        if(!status){return res.status(400).end()}

        if(typeof(Number(status)) != "number"){return res.status(400).end()}
        
        const listByStatusPackageUseCase = container.resolve(ListByStatusPackageUseCase)

        const embalagens = listByStatusPackageUseCase.execute({
            limit: Number(limit), take:  Number(take), status: Number(status)
        })

        return res.status(200).json(embalagens)
    }

}

export { ListByStatusPackageController }