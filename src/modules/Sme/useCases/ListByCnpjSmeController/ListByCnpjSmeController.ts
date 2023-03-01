import { Request, Response } from "express"
import { ListByCnpjSmeServices } from "../../backup/services/Sme/ListByCnpjSmeServices"

class ListByCnpjSmeController{

    async list(req: Request, res: Response){

        // buscando valores da requisição
        const {cnpj} = req.params

        // instanciando serviço
        const listByCnpjSmeServices = new ListByCnpjSmeServices()

        // buscando no banco
        const sme = await listByCnpjSmeServices.list(String(cnpj))

        return res.status(200).json(sme)

    }

}

export { ListByCnpjSmeController }