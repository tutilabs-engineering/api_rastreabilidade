import { Request, Response } from "express"

class DeletePackageController {

    async delete(req: Request, res: Response){

        const {id} = req.params

        // const deletePackageServices = new DeletePackageServices()

        // const menssage = await deletePackageServices.delete(id)

        return res.status(200).json(menssage)

    }

}

export { DeletePackageController }