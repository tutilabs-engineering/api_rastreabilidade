import { Request, Response } from "express"
import { InstanceSystemServices } from "../../backup/services/Instance/InstanceSystemServices"

class InstanceSystemController{

    async list(req: Request, res: Response){

        // Instanciando serviço de embalagens
        const instanceSystemServices = new InstanceSystemServices()

        // Buscando embalagens no banco
        const data = await instanceSystemServices.list()


        return res.status(200).json(data)
    }

}

export { InstanceSystemController }