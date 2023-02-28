import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListByDestinoPackageUseCase } from "./ListByDestinoPackageUseCase"



class ListByDestinoPackageController{

    async handle(req: Request, res: Response){

        // recebendo dados da requisição
        const { FK_destino } = req.params
        const { limit, take } = req.query

        // instanciando classe de serviços
        // const listByDestinoPackageServices = new ListByDestinoPackageServices()
        const listByDestinoPackageUseCase = container.resolve(ListByDestinoPackageUseCase)
        const embalagem = await listByDestinoPackageUseCase.execute(
            {FK_destino}, 
            {limit: Number(limit), take:  Number(take)}
            )
        // buscando no banco
        // const embalagem = await listByDestinoPackageServices.list(FK_destino)

        return res.status(200).json(embalagem)

    }

}

export { ListByDestinoPackageController }