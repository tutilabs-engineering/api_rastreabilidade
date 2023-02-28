import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase"

class UpdateCustomerController {

    async handle(req: Request, res: Response){

        // Buscando id nos parametros
        const {id} = req.params

        // Buscando dados no corpo da requisição
        const {cnpj, razao_social, ativo } = req.body

        // Buscando caminho da imagem na requisição
        const imgPath = req.pathImg

        // Instanciando serviço de atualização de clientes
        const updateCustomerUseCase = container.resolve(UpdateCustomerUseCase)

        // Atualizando cliente
        const customer = await updateCustomerUseCase.execute(
            {id, cnpj, razao_social, img_path: imgPath, ativo: Boolean(ativo)}
        )

        return res.status(200).json({message: "Cliente Atualizado com sucesso"})

    }

}

export { UpdateCustomerController }