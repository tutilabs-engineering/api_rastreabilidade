import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteCustomerUseCase } from "./DeleteCustomerUseCase"

class DeleteCustomerController {

    async handle(req: Request, res: Response) {

        const { id } = req.params

        const deleteCustomerUseCase = container.resolve(DeleteCustomerUseCase)
        await deleteCustomerUseCase.execute(id)
        return res.status(200).json({ menssage: "Cliente deletado com sucesso" })

    }

}

export { DeleteCustomerController }