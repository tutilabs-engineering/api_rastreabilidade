import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateModelUseCase } from "./UpdateModelUseCase"

class UpdateModelController{

    async handle(req: Request, res:Response){

        // Recebendo dados da requisição
        const {id} = req.params

        const {descricao} = req.body

        // Buscando caminho da imagem na requisição
        let img_path = req.pathImg

        const updateModelUseCase = container.resolve(UpdateModelUseCase) 

        const modelo = await updateModelUseCase.execute({id, descricao, img_path})

        return res.status(200).json({modelo})

    }

}

export { UpdateModelController }