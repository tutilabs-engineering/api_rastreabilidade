import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateActiveCustomerUseCase } from "./UpdateActiveCustomerUseCase"

class UpdateAticveCustomerController {

    async handle(req: Request,res: Response){

        // Buscando parametro na requisição
        const {id} = req.params
        const { status } = req.body

        // Iniciando serviço para deletar cliente
        const updateActiveCustomerUseCase = container.resolve(UpdateActiveCustomerUseCase)

       await updateActiveCustomerUseCase.execute(id, status)

        return res.status(200).json({mensagem: "Atualizado com sucesso."})

    }

}

export { UpdateAticveCustomerController }