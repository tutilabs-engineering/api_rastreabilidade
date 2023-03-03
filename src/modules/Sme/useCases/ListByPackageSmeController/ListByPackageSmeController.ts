import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListByCpnjSmeUseCase } from "../ListByCnpjSmeController/ListByCpnjSmeUseCase"
import { ListByPackageSmeUseCase } from "./ListByPackageSmeUseCase"

class ListByPackageSmeController {

    async handle(req: Request, res: Response){

        const { take = 10, skip = 0 } = req.query

        // buscando dados da requisição
        const {serial_number} = req.params

        // instanciando serviços
        const listByPackageSmeUseCase= container.resolve(ListByPackageSmeUseCase)

        // buscando no banco
        const sme = await listByPackageSmeUseCase.execute(
            serial_number,
            {skip:Number(skip),take: Number(take)}
            )

        return res.status(200).json(sme)

    }

}

export { ListByPackageSmeController }