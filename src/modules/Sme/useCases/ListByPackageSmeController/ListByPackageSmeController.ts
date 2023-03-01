import { Request, Response } from "express"
import { ListByPackageSmeServices } from "../../backup/services/Sme/ListByPackageSmeServices"

class ListByPackageSmeController {

    async list(req: Request, res: Response){

        // buscando dados da requisição
        const {serial_number} = req.params

        // instanciando serviços
        const listByPackageSmeServices = new ListByPackageSmeServices()

        // buscando no banco
        const sme = await listByPackageSmeServices.list(serial_number)

        return res.status(200).json(sme)

    }

}

export { ListByPackageSmeController }