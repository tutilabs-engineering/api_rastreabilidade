import { Request, Response } from "express"

class CreatePackageController{

    async create(req: Request, res: Response){

        // Pegando dados da requisição
        const {serial_number, origem, FK_destino, FK_modelo, status} = req.body

        const createPackageServices = new CreatePackageServices()

        // Criando cliente
        const embalagem = await createPackageServices.create({serial_number, origem, FK_destino, FK_modelo, status})

        return res.status(200).json({
            embalagem
        })

    }

}

export { CreatePackageController }