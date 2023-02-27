import { Request, Response} from "express"
import { container } from "tsyringe"
import { ListByModelPackageUseCase } from "./ListByModelPackageUseCase"

class ListByModelPackageController {

    async handle(req: Request, res: Response){

        const {model} = req.params
        const { limit, take } = req.query

        const listByModelPackageUseCase = container.resolve(ListByModelPackageUseCase)
        const embalagens = await listByModelPackageUseCase.execute({model}, {limit: Number(limit), take:  Number(take)})

        // Instanciando o os serviços de embalagem
        // const listByModelPackageServices = new ListByModelPackageServices()

        // buscando as embalagem no banco
        // const embalagens = await listByModelPackageServices.list(String(model))

        return res.status(200).json(embalagens)

    }

}

export { ListByModelPackageController }