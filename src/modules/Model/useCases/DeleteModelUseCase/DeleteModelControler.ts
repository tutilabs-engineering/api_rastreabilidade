import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteModelUseCase } from "./DeleteModelUseCase"

class DeleteModelController{

    async handle(req: Request, res: Response){

        // Recebendo dados da requisição
        const {id} = req.params 

        // instanciando serviços de exclusão de modelos
        const deleteModelUseCase = container.resolve(DeleteModelUseCase)

        const menssage = await deleteModelUseCase.execute(id)

        return res.status(200).json(menssage)

    }

}

export { DeleteModelController }