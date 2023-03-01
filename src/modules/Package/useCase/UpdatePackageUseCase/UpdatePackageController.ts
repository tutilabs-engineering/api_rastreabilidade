import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdatePackageUseCase } from "./UpdatePackageUseCase"

class UpdatePackageController {

    async handle(req: Request, res: Response){
        
        // Buscando id nos parametros
        const id = req.params.id
          
        // Buscando dados da requisição
        const {FK_destino, origem, FK_modelo, status } = req.body
     
         
        const updatePackageUseCase = container.resolve(UpdatePackageUseCase)
        await updatePackageUseCase.execute(id, {FK_destino, origem, FK_modelo, status })

        return res.status(200).json({message: "Embalagem atualizada com sucesso!"})
    }

}

export { UpdatePackageController }