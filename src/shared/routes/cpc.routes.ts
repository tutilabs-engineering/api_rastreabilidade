import { Router } from "express";
import { ListCpcByCustomerController } from "../../modules/Cpc/useCases/ListCpcByCustomerControllerUseCase/ListCpcByCustomerController";


const listCpcByCustomerController = new ListCpcByCustomerController()

const cpcRouter = Router()

cpcRouter.get("/:FK_customer", listCpcByCustomerController.handle)

export { cpcRouter }