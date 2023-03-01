import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCpcCUseCase } from './ListCpcUseCase'

class ListCpcController{

    async handle(req: Request, res: Response){

        const { take = 10, skip = 0 } = req.query

        const listCpcCUseCase = container.resolve(ListCpcCUseCase)

        // buscando no banco
        const cpc = await listCpcCUseCase.execute(
            {skip: Number(skip), take: Number(take)}
        )

        return res.status(200).json(cpc)

    }

}

export { ListCpcController }