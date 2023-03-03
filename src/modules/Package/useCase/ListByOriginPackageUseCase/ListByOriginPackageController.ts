import { Request, Response} from "express"
import { container } from "tsyringe"
import { ListByOriginPackageUseCase } from "./ListByOriginPackageUseCase"

class ListByOriginPackageController {

    async handle(req: Request, res: Response){

        const {origin} = req.params

        const { skip = 0, take = 10, status = 0 } = req.query
        // Instanciando o os serviços de embalagem
        // const listByOriginsPackageServices = new ListByOriginsPackageServices()
        const listByOriginPackageUseCase = container.resolve(ListByOriginPackageUseCase)
       
        const embalagens = await listByOriginPackageUseCase.execute(
            {origin},
            {skip: Number(skip), take:  Number(take), status:Number(status)}
            )
        // buscando as embalagem no banco
        // const embalagens = await listByOriginsPackageServices.list(String(origin))

        return res.status(200).json(embalagens)

    }

}

export { ListByOriginPackageController }