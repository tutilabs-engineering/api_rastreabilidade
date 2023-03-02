import { Router } from "express";
import { CreatePackageController } from "../../modules/Package/useCase/CreatePackageUseCase/CreatePackageController";
import { FindBySerialNumberController } from "../../modules/Package/useCase/FindBySerialNumberUseCase/FindBySerialNumberController";
import { UpdatePackageController } from "../../modules/Package/useCase/UpdatePackageUseCase/UpdatePackageController";


const packageRouter = Router()
const findBySerialNumberController = new FindBySerialNumberController()
const updatePackageController = new UpdatePackageController()
const createPackageController = new CreatePackageController()

packageRouter.get("/:serial_number", findBySerialNumberController.handle)
packageRouter.put("/:id",updatePackageController.handle)
packageRouter.post("/",createPackageController.handle)

export { packageRouter }