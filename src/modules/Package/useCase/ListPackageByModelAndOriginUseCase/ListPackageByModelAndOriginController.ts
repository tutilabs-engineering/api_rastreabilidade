import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListPackageByModelAndOriginUseCase } from "./ListPackageByModelAndOriginUseCase"


class ListPackageByModelAndOriginController{

    async handle(req: Request, res: Response){

        const { FK_modelo } = req.params

        const { skip = 0, take = 10, status = 0, origin  } = req.query

        // Instanciando serviço de embalagens
        const listPackageUseCase = container.resolve(ListPackageByModelAndOriginUseCase)
        const embalagens  = await listPackageUseCase.execute(
            String(origin),
            {skip: Number(skip), take:  Number(take), status:Number(status), FK_modelo}
            )
        // Buscando embalagens no banco
        // const embalagens = await listPackageServices.list()


        return res.status(200).json(embalagens)
    }

}

export { ListPackageByModelAndOriginController }