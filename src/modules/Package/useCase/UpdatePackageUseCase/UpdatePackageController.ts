import { Request, Response, NextFunction } from "express"
import { container } from "tsyringe"
import { UpdatePackageUseCase } from "./UpdatePackageUseCase"

class UpdatePackageController {

    async handle(req: Request, res: Response,next:NextFunction){
        
        // Buscando id nos parametros
        const id = req.params.id
          
        // Buscando dados da requisição
        const {FK_destino, origem, FK_modelo, status } = req.body
     
       console.log({id:req.userId});
       
        const updatePackageUseCase = container.resolve(UpdatePackageUseCase)
        const packageReturn = await updatePackageUseCase.execute(id, {FK_destino, origem, FK_modelo, status })

        req.body['packageId'] = packageReturn.id


        next()
        // return res.status(200).json({message: "Embalagem atualizada com sucesso!"})
    }

}

export { UpdatePackageController }