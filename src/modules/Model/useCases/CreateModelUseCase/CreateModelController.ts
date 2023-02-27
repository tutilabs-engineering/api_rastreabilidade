import { Request, Response} from "express"
import { CreateModelServices } from "../../../../backup/services/Model/CreateModelServices"

class CreateModelController{

    async execute(req: Request, res: Response){

        // Recebendo dados da requisição
        const {descricao} = req.body

        let img_path = req.pathImg

        // instanciando classe 
        const createModelServices = new CreateModelServices()

        const model = await createModelServices.create({descricao, img_path})

        return res.status(200).json(model)

    }

}

export { CreateModelController}