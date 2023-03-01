import { Request, Response} from "express"
import { container } from "tsyringe"
import { CreateCpcUseCase } from "./CreateCpcUseCase"

class CreateCpcController{

    async handle(req: Request, res: Response){

        // pegando da requisição
        const {FK_customer, FK_model} = req.body

        // instanciando criação de CPC
         const createCpcUseCase = container.resolve(CreateCpcUseCase)

        // salvando no banco
        await createCpcUseCase.execute({FK_customer, FK_model})

        return res.status(200).json({message: "Cadastrado com sucesso"})

    }
    
}

export { CreateCpcController }