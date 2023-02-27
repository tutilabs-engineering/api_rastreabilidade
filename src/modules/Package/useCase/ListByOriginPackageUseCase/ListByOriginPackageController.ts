import { Request, Response} from "express"
import { container } from "tsyringe"
import { ListByOriginsPackageServices } from "../../backup/services/Package/ListByOriginPackageServices"
import { ListByDestinoPackageUseCase } from "../ListByDestinoPackageUseCase/ListByDestinoPackageUseCase"
import { ListByOriginPackageUseCase } from "./ListByOriginPackageUseCase"

class ListByOriginPackageController {

    async handle(req: Request, res: Response){

        const {origin} = req.params

        const { limit, take } = req.query
        // Instanciando o os serviços de embalagem
        // const listByOriginsPackageServices = new ListByOriginsPackageServices()
        const listByOriginPackageUseCase = container.resolve(ListByOriginPackageUseCase)
       
        const embalagens = await listByOriginPackageUseCase.execute(
            {origin},
            {limit: Number(limit), take:  Number(take)}
            )
        // buscando as embalagem no banco
        // const embalagens = await listByOriginsPackageServices.list(String(origin))

        return res.status(200).json(embalagens)

    }

}

export { ListByOriginPackageController }