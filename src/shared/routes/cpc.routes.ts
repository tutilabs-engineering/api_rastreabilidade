import { Router } from "express";
import { CreateCpcController } from "../../modules/Cpc/useCases/CreateCpcUseCase/CreateCpcController";
import { ListCpcByCustomerController } from "../../modules/Cpc/useCases/ListCpcByCustomerControllerUseCase/ListCpcByCustomerController";


const listCpcByCustomerController = new ListCpcByCustomerController()
const createCpcController = new CreateCpcController()

const cpcRouter = Router()

cpcRouter.get("/:FK_customer", listCpcByCustomerController.handle)
cpcRouter.post("/", createCpcController.handle)

export { cpcRouter }