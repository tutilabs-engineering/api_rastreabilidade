import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListPackageUseCase } from "./ListPackageUseCase"


class ListPackageController{

    async handle(req: Request, res: Response){

        const { limit, take } = req.query

        // Instanciando serviço de embalagens
        const listPackageUseCase = container.resolve(ListPackageUseCase)
        const embalagens  = await listPackageUseCase.execute({ limit: Number(limit), take:  Number(take)})
        // Buscando embalagens no banco
        // const embalagens = await listPackageServices.list()


        return res.status(200).json(embalagens)
    }

}

export { ListPackageController }