import { Request, Response } from 'express'
import { ListCpcServices } from '../../../services/Cpc/ListCpcServices'

class ListCpcController{

    async list(req: Request, res: Response){

        // Instanciando serviço de listagem de CPC
        const listCpcServices = new ListCpcServices()

        // buscando no banco
        const cpc = await listCpcServices.list()

        return res.status(200).json(cpc)

    }

}

export { ListCpcController }