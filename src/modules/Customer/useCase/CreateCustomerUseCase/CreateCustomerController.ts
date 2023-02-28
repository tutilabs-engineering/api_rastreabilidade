import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateCustomerUseCase } from "./CreateCustomerUseCase"

class CreateCustomerController {

    async handle(req: Request, res: Response){
        // Pegando da dados da requisição
        const {cnpj, razao_social } = req.body
 
        let img_path = req.pathImg

        const createCustomerUseCase = container.resolve(CreateCustomerUseCase)
        
        await createCustomerUseCase.execute({cnpj, razao_social, img_path})

        return res.status(200).json({message: "Criado com sucesso"})

    }

}

export { CreateCustomerController }