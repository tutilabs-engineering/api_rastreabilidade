import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteCpcUseCase } from "./DeleteCpcUseCase"

class DeleteCpcController{

    async handle(req: Request, res: Response){

        const {id} = req.params 

        
        const deleteCpcUseCase = container.resolve(DeleteCpcUseCase)
       
        await deleteCpcUseCase.execute(id)

        return res.status(200).json({menssage: "CPC deletado com sucesso."})

    }

}

export { DeleteCpcController }