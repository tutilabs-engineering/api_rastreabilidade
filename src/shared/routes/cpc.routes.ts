import { Router } from "express";
import { CreateCpcController } from "../../modules/Cpc/useCases/CreateCpcUseCase/CreateCpcController";
import { DeleteCpcController } from "../../modules/Cpc/useCases/DeleteCpcUseCase/DeleteCpcController";
import { ListCpcByCustomerController } from "../../modules/Cpc/useCases/ListCpcByCustomerControllerUseCase/ListCpcByCustomerController";
import { ListCpcController } from "../../modules/Cpc/useCases/ListCpcControllerUseCase/ListCpcController";
import { AuthenticatedMiddleware } from "../middlewares/AuthenticatedMiddlewares";
import { EnsureAdmin } from "../middlewares/EnsureAdmin";


const listCpcByCustomerController = new ListCpcByCustomerController()
const listCpcController = new ListCpcController()
const createCpcController = new CreateCpcController()
const deleteCpcController = new DeleteCpcController()

const cpcRouter = Router()

cpcRouter.get("/:FK_customer", listCpcByCustomerController.handle)
cpcRouter.get("/" ,AuthenticatedMiddleware,EnsureAdmin, listCpcController.handle)
cpcRouter.post("/",AuthenticatedMiddleware,EnsureAdmin, createCpcController.handle)
cpcRouter.delete("/:id",AuthenticatedMiddleware,EnsureAdmin,deleteCpcController.handle)

export { cpcRouter }