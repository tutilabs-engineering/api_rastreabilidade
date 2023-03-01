import { Request, Response } from "express"
import { ListOneSmeServices } from "../../backup/services/Sme/ListOneSmeServices"

class ListOneSmeController {

    async list(req: Request, res: Response){

        // buscando dados da requisição
        const {id} = req.params

        // instanciando serviços
        const listOneSmeServices = new ListOneSmeServices()

        // buscando no banco
        const sme = await listOneSmeServices.list(id)

        return res.status(200).json(sme)

    }

}

export { ListOneSmeController }