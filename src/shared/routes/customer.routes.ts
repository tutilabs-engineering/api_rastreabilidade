import { Router } from "express";
import { ListCustomerController } from "../../modules/Customer/useCase/ListCustomerUseCase/ListCustomerController";


const listCustomerController = new ListCustomerController()

const customerRouter = Router()

customerRouter.get("/", listCustomerController.handle)

export { customerRouter }