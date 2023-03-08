import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreatePackageUseCase } from "./CreatePackageUseCase"
class CreatePackageController {

    async handle(req: Request, res: Response){

        // Pegando dados da requisição
        const {serial_number, origem, FK_destino, FK_modelo, status} = req.body

        const createPackageUseCase = container.resolve(CreatePackageUseCase)

        await createPackageUseCase.execute({serial_number, origem, FK_modelo, status})

        return res.status(201).json({message: "Embalagem criada!"})
        

    }

}

export { CreatePackageController }