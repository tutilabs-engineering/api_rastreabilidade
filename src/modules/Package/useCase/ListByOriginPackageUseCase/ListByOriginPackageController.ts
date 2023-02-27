import { Request, Response} from "express"
import { ListByOriginsPackageServices } from "../../backup/services/Package/ListByOriginPackageServices"

class ListByOriginPackageController {

    async list(req: Request, res: Response){

        const {origin} = req.params

        if(!origin){res.status(200).end()}

        // Instanciando o os serviços de embalagem
        const listByOriginsPackageServices = new ListByOriginsPackageServices()

        // buscando as embalagem no banco
        const embalagens = await listByOriginsPackageServices.list(String(origin))

        return res.status(200).json(embalagens)

    }

}

export { ListByOriginPackageController }