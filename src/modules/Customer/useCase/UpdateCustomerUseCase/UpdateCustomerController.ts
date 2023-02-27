import { Request, Response } from "express"
import { UpdateCustomerServices } from "../../backup/services/Customer/UpdateCustomerServices"

class UpdateCustomerController {

    async update(req: Request, res: Response){

        // Buscando id nos parametros
        const {id} = req.params

        // Buscando dados no corpo da requisição
        const {cnpj, razao_social, ativo } = req.body

        // Buscando caminho da imagem na requisição
        const imgPath = req.pathImg

        // Instanciando serviço de atualização de clientes
        const updateCustomerServices = new UpdateCustomerServices()

        // Atualizando cliente
        const customer = await updateCustomerServices.update({id, cnpj, razao_social, img_path: imgPath, ativo})

        return res.status(200).json(customer)

    }

}

export { UpdateCustomerController }