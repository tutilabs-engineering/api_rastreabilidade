import { Request, Response} from "express"
import { container } from "tsyringe"
import { CreateModelUseCase } from "./CreateModelUseCase"

class CreateModelController{

    async handle(req: Request, res: Response){

        // Recebendo dados da requisição
        const { descricao } = req.body
   
        let img_path = req.pathImg
        
        const createModelUseCase = container.resolve(CreateModelUseCase)
        const model = await createModelUseCase.execute({descricao, img_path})

        return res.status(200).json(model)

    }

}

export { CreateModelController}