import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListByCpnjSmeUseCase } from "./ListByCpnjSmeUseCase"

class ListByCnpjSmeController{

    async handle(req: Request, res: Response){

        const { take = 10, skip = 0 } = req.query

        // buscando valores da requisição
        const {cnpj} = req.params
        

        const listByCpnjSmeUseCase = container.resolve(ListByCpnjSmeUseCase)

        // buscando no banco
        const sme = await listByCpnjSmeUseCase.execute(
         String(cnpj),   
        {skip:Number(skip),take: Number(take)});

        return res.status(200).json(sme)

    }

}

export { ListByCnpjSmeController }