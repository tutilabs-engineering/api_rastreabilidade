import { Request, Response } from "express"
import { ListByStatusPackageServices } from "../../backup/services/Package/ListByStatusPackageServices"

class ListByStatusPackageController{

    async list(req: Request, res: Response){

        const {status} = req.params

        if(!status){return res.status(400).end()}

        if(typeof(Number(status)) != "number"){return res.status(400).end()}
        
        // Instanciando serviço de embalagens
        const listByStatusPackageServices = new ListByStatusPackageServices()

        // Buscando embalagens no banco
        const embalagens = await listByStatusPackageServices.list(Number(status))
        
        return res.status(200).json(embalagens)
    }

}

export { ListByStatusPackageController }