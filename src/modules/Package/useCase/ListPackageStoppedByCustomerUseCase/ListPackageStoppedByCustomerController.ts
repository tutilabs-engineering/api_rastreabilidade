import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListPackageStoppedByCustomerUseCase } from "./ListPackageStoppedByCustomerUseCase"


class ListPackageStoppedByCustomerController{

    async handle(req: Request, res: Response){
        const { limit, take } = req.query
        // Instanciando serviço de embalagens
        const listPackageStoppedByCustomerUseCase = container.resolve(ListPackageStoppedByCustomerUseCase)
        const embalagens  = await listPackageStoppedByCustomerUseCase.execute({ limit: Number(limit), take:  Number(take)})
        // Buscando embalagens no banco
        // const embalagens = await listPackageServices.list()


        return res.status(200).json(embalagens)
    }

}

export { ListPackageStoppedByCustomerController }