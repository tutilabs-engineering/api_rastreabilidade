import { Request, Response} from "express"
// import { ListModelServices } from "../../../../backup/services/Model/ListModelServices"
import { container } from "tsyringe"
import { ListModelUseCase } from "./ListModelUseCase"



class ListModelController {

    async handle(req: Request, res: Response){

        const listModelUseCase = container.resolve(ListModelUseCase)

        return res.status(200).json({  data: await listModelUseCase.execute()})


    }

}

export { ListModelController }