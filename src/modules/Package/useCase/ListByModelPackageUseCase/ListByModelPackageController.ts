import { Request, Response} from "express"
import { ListByModelPackageServices } from "../../backup/services/Package/ListByModelPackageServices"

class ListByModelPackageController {

    async list(req: Request, res: Response){

        const {model} = req.params

        if(!model){res.status(200).end()}

        // Instanciando o os serviços de embalagem
        const listByModelPackageServices = new ListByModelPackageServices()

        // buscando as embalagem no banco
        const embalagens = await listByModelPackageServices.list(String(model))

        return res.status(200).json(embalagens)

    }

}

export { ListByModelPackageController }