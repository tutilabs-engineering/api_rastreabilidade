import { Router } from "express";
import { FindBySerialNumberController } from "../../modules/Package/useCase/FindBySerialNumberUseCase/FindBySerialNumberController";
import { UpdatePackageController } from "../../modules/Package/useCase/UpdatePackageUseCase/UpdatePackageController";


const packageRouter = Router()
const findBySerialNumberController = new FindBySerialNumberController()
const updatePackageController = new UpdatePackageController()

packageRouter.get("/:serial_number", findBySerialNumberController.handle)
packageRouter.put("/:id",updatePackageController.handle)

export { packageRouter }