import { Router } from "express";
import { FindBySerialNumberController } from "../../modules/Package/useCase/FindBySerialNumberUseCase/FindBySerialNumberController";


const packageRouter = Router()
const findBySerialNumberController = new FindBySerialNumberController()

packageRouter.get("/:serial_number", findBySerialNumberController.handle)


export { packageRouter }