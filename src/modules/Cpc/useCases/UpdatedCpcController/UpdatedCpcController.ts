import { Request, Response } from "express"

class UpdateCpcController{

    async update(req: Request, res: Response){

        // recebendo dados da reequisição
        const {id} = req.params

        const {FK_customer, FK_model} = req.body

        // instanciando atualização de CPC
        // const updateCpcServices = new UpdateCpcServices()

        // atualizando no banco 
        // const cpc = await updateCpcServices.update({id, FK_customer, FK_model})

        return res.status(200).json({message:""})

    }

}

export { UpdateCpcController}