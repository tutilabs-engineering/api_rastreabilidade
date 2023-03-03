import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindByOneSmeUseCase } from "./FindByOneSmeUseCase"

class FindByOneSmeController {

    async handle(req: Request, res: Response){

        // buscando dados da requisição
        const {id} = req.params

        // instanciando serviços
        const findByOneSmeUseCase = container.resolve(FindByOneSmeUseCase);

        // buscando no banco
        const sme = await findByOneSmeUseCase.execute(id)

        return res.status(200).json(sme)

    }

}

export { FindByOneSmeController }