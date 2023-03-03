import { Router } from "express";
import { CreatePackageController } from "../../modules/Package/useCase/CreatePackageUseCase/CreatePackageController";
import { FindBySerialNumberController } from "../../modules/Package/useCase/FindBySerialNumberUseCase/FindBySerialNumberController";
import { ListByModelPackageController } from "../../modules/Package/useCase/ListByModelPackageUseCase/ListByModelPackageController";
import { ListPackageStoppedByCustomerController } from "../../modules/Package/useCase/ListPackageStoppedByCustomerUseCase/ListPackageStoppedByCustomerController";
import { UpdatePackageController } from "../../modules/Package/useCase/UpdatePackageUseCase/UpdatePackageController";


const packageRouter = Router()
const findBySerialNumberController = new FindBySerialNumberController()
const updatePackageController = new UpdatePackageController()
const createPackageController = new CreatePackageController()
const listModelByPackageController = new ListByModelPackageController()
const listPackageStoppedByCustomerController = new ListPackageStoppedByCustomerController()

packageRouter.get("/stopped",listPackageStoppedByCustomerController.handle)
packageRouter.get("/:serial_number", findBySerialNumberController.handle)
packageRouter.put("/:id",updatePackageController.handle)
packageRouter.post("/",createPackageController.handle)
packageRouter.get("/model/:id", listModelByPackageController.handle)//Listar todos os modelos

export { packageRouter }