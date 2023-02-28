import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdatePackageUseCase } from "./UpdatePackageUseCase"

class UpdatePackageController {

    async handle(req: Request, res: Response){
        
        // Buscando id nos parametros
        const {id} = req.params
          
        // Buscando dados da requisição
        const { serial_number, FK_destino, origem, FK_modelo, status } = req.body
        
        // Unstanciando serviço de atualização de embalagens
        // const updatePackageServices = new UpdatePackageServices()
        // Atualizando cliente
        // const embalagem = await updatePackageServices.update({id, serial_number, origem, FK_destino, FK_modelo, status})
         
        const updatePackageUseCase = container.resolve(UpdatePackageUseCase)
         const embalagem = updatePackageUseCase.execute({id, serial_number, FK_destino, origem, FK_modelo, status })

        return res.status(200).json(embalagem)
    }

}

export { UpdatePackageController }