import { Request, Response, Router } from "express";
import { CreatePackageController } from "../../modules/Package/useCase/CreatePackageUseCase/CreatePackageController";
import { FindBySerialNumberController } from "../../modules/Package/useCase/FindBySerialNumberUseCase/FindBySerialNumberController";
import { ListByCustomerController } from "../../modules/Package/useCase/ListByCustomerUseCase/ListByCustomerController";
import { ListByModelPackageController } from "../../modules/Package/useCase/ListByModelPackageUseCase/ListByModelPackageController";
import { ListByOriginPackageController } from "../../modules/Package/useCase/ListByOriginPackageUseCase/ListByOriginPackageController";
import { ListByStatusAndProviderController } from "../../modules/Package/useCase/ListByStatusAndProviderUseCase/ListByStatusAndProviderController";
import { ListPackageByCustomerController } from "../../modules/Package/useCase/ListPackageByCustomer/ListPackageByCustomerController";
import { ListPackageByCustomerUseCase } from "../../modules/Package/useCase/ListPackageByCustomer/ListPackageByCustomerUseCase";
import { ListPackageByModelAndOriginController } from "../../modules/Package/useCase/ListPackageByModelAndOriginUseCase/ListPackageByModelAndOriginController";
import { ListPackageStoppedByCustomerController } from "../../modules/Package/useCase/ListPackageStoppedByCustomerUseCase/ListPackageStoppedByCustomerController";
import { UpdatePackageController } from "../../modules/Package/useCase/UpdatePackageUseCase/UpdatePackageController";
import { CreateSmeController } from "../../modules/Sme/useCases/CreateSmeController/CreateSmeController";
import { AuthenticatedMiddleware } from "../middlewares/AuthenticatedMiddlewares";


const packageRouter = Router()
const findBySerialNumberController = new FindBySerialNumberController()
const updatePackageController = new UpdatePackageController()
const createPackageController = new CreatePackageController()
const listModelByPackageController = new ListByModelPackageController()
const listByOriginPackageController = new ListByOriginPackageController()
const listPackageByModelAndOriginController = new ListPackageByModelAndOriginController()
const listByCustomerController = new ListByCustomerController()
const listPackageByCustomerController = new ListPackageByCustomerController()
const listPackageStoppedByCustomerController = new ListPackageStoppedByCustomerController()
const listByStatusAndProviderController = new ListByStatusAndProviderController()

// SME
const createSmeController = new CreateSmeController()

packageRouter.get("/stopped",listPackageStoppedByCustomerController.handle)
packageRouter.get("/mnt",listByStatusAndProviderController.handle)

packageRouter.get("/packageByCustomerWithModel",listByCustomerController.handle)
packageRouter.get("/packagesByCustomer/:FK_destino", listPackageByCustomerController.handle)
packageRouter.get("/packagesByModelOriginStatus/:FK_modelo", listPackageByModelAndOriginController.handle); //Listar todos os modelos
packageRouter.get("/model/:id", listModelByPackageController.handle); //Listar todos os modelos
packageRouter.get("/origin/:origin", listByOriginPackageController.handle); //Listar todos os modelos
packageRouter.get("/:serial_number", findBySerialNumberController.handle)

packageRouter.put("/:id",
     AuthenticatedMiddleware, 
     updatePackageController.handle,
     createSmeController.handle,
     (req: Request, res: Response)=>{
    return res.status(200).json({message: "Movimentação realizada!"})
})

packageRouter.post("/",createPackageController.handle)




export { packageRouter }