import { Router } from "express";
import { CreateCpcController } from "../../modules/Cpc/useCases/CreateCpcUseCase/CreateCpcController";
import { DeleteCpcController } from "../../modules/Cpc/useCases/DeleteCpcUseCase/DeleteCpcController";
import { ListCpcByCustomerController } from "../../modules/Cpc/useCases/ListCpcByCustomerControllerUseCase/ListCpcByCustomerController";
import { ListCpcController } from "../../modules/Cpc/useCases/ListCpcControllerUseCase/ListCpcController";


const listCpcByCustomerController = new ListCpcByCustomerController()
const listCpcController = new ListCpcController()
const createCpcController = new CreateCpcController()
const deleteCpcController = new DeleteCpcController()

const cpcRouter = Router()

cpcRouter.get("/:FK_customer", listCpcByCustomerController.handle)
cpcRouter.get("/" ,listCpcController.handle)
cpcRouter.post("/", createCpcController.handle)
cpcRouter.delete("/:id", deleteCpcController.handle)

export { cpcRouter }