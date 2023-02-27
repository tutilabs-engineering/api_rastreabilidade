import { Request, Response } from "express"
import { UpdateModelServices } from "../../../../backup/services/Model/UpdateModelServices"

class UpdateModelController{

    async update(req: Request, res:Response){

        // Recebendo dados da requisição
        const {id} = req.params

        const {descricao} = req.body

        // Buscando caminho da imagem na requisição
        let img_path = req.pathImg

        if(!img_path){img_path = ""}

        // instanciando classe de atualização de modelos
        const updateModelServices = new UpdateModelServices()

        const modelo = await updateModelServices.update({id, descricao, img_path})

        return res.status(200).json({modelo})

    }

}

export { UpdateModelController }