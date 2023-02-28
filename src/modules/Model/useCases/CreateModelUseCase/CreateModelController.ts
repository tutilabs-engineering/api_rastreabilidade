import { Request, Response} from "express"

class CreateModelController{

    async execute(req: Request, res: Response){

        // Recebendo dados da requisição
        const {descricao} = req.body

        let img_path = req.pathImg

        // instanciando classe 


        const model = await createModelServices.create({descricao, img_path})

        return res.status(200).json(model)

    }

}

export { CreateModelController}