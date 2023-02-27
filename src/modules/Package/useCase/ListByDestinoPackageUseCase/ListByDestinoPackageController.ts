import { Request, Response } from "express"

class ListByDestinoPackageController{

    async list(req: Request, res: Response){

        // recebendo dados da requisição
        const {FK_destino} = req.params

        // instanciando classe de serviços
        const listByDestinoPackageServices = new ListByDestinoPackageServices()

        // buscando no banco
        const embalagem = await listByDestinoPackageServices.list(FK_destino)

        return res.status(200).json(embalagem)

    }

}

export { ListByDestinoPackageController }