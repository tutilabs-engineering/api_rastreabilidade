import { Router } from "express";
import { CreatePackageController } from "../../modules/Package/useCase/CreatePackageUseCase/CreatePackageController";
import { FindBySerialNumberController } from "../../modules/Package/useCase/FindBySerialNumberUseCase/FindBySerialNumberController";
import { ListByCustomerController } from "../../modules/Package/useCase/ListByCustomerUseCase/ListByCustomerController";
import { ListByModelPackageController } from "../../modules/Package/useCase/ListByModelPackageUseCase/ListByModelPackageController";
import { ListByOriginPackageController } from "../../modules/Package/useCase/ListByOriginPackageUseCase/ListByOriginPackageController";
import { ListPackageByCustomerController } from "../../modules/Package/useCase/ListPackageByCustomer/ListPackageByCustomerController";
import { ListPackageByCustomerUseCase } from "../../modules/Package/useCase/ListPackageByCustomer/ListPackageByCustomerUseCase";
import { ListPackageByModelAndOriginController } from "../../modules/Package/useCase/ListPackageByModelAndOriginUseCase/ListPackageByModelAndOriginController";
import { UpdatePackageController } from "../../modules/Package/useCase/UpdatePackageUseCase/UpdatePackageController";


const packageRouter = Router()
const findBySerialNumberController = new FindBySerialNumberController()
const updatePackageController = new UpdatePackageController()
const createPackageController = new CreatePackageController()
const listModelByPackageController = new ListByModelPackageController()
const listByOriginPackageController = new ListByOriginPackageController()
const listPackageByModelAndOriginController = new ListPackageByModelAndOriginController()
const listByCustomerController = new ListByCustomerController()
const listPackageByCustomerController = new ListPackageByCustomerController()


packageRouter.get("/packageByCustomerWithModel",listByCustomerController.handle)
packageRouter.get("/packagesByCustomer/:FK_destino", listPackageByCustomerController.handle)
packageRouter.get("/:serial_number", findBySerialNumberController.handle)
packageRouter.put("/:id",updatePackageController.handle)
packageRouter.post("/",createPackageController.handle)
packageRouter.get("/model/:id", listModelByPackageController.handle); //Listar todos os modelos
packageRouter.get("/origin/:origin", listByOriginPackageController.handle); //Listar todos os modelos
packageRouter.get("/packagesByModelOriginStatus/:FK_modelo", listPackageByModelAndOriginController.handle); //Listar todos os modelos


export { packageRouter }