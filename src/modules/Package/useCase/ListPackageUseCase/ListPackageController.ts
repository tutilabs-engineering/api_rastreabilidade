import { Request, Response } from "express"
import { ListPackageServices } from "../../backup/services/Package/ListPackageServices"


class ListPackageController{

    async list(req: Request, res: Response){

        // Instanciando serviço de embalagens
        const listPackageServices = new ListPackageServices()

        // Buscando embalagens no banco
        const embalagens = await listPackageServices.list()


        return res.status(200).json(embalagens)
    }

}

export { ListPackageController }