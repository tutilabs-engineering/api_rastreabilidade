import { Router } from "express";
import { FindByIdCustomerController } from "../../modules/Customer/useCase/FindByIdCustomerUseCase/FindByIdCustomerController";
import { FindByOneSmeController } from "../../modules/Sme/useCases/FindByOneSmeController/FindByOneSmeController";
import { ListByCnpjSmeController } from "../../modules/Sme/useCases/ListByCnpjSmeController/ListByCnpjSmeController";
import { ListByPackageSmeController } from "../../modules/Sme/useCases/ListByPackageSmeController/ListByPackageSmeController";
import { ListSmeController } from "../../modules/Sme/useCases/ListSmeController/ListSmeController";
import { ListSmeRelatoryController } from "../../modules/Sme/useCases/ListSmeRelatoryController/ListSmeRelatoryController";

const smeRouter = Router()

const findByOneSmeController = new FindByOneSmeController()
const listByCnpjSmeController = new ListByCnpjSmeController()
const listByPackageSmeController = new ListByPackageSmeController()
const listSmeRelatoryController = new ListSmeRelatoryController()
const listSmeController = new ListSmeController()

smeRouter.get("/cnpj/:cnpj", listByCnpjSmeController.handle)
smeRouter.get("/find/:id", findByOneSmeController.handle)
smeRouter.get("/serial/:serial_number",listByPackageSmeController.handle)
smeRouter.get("/",listSmeController.handle)
smeRouter.get("/relatory",listSmeRelatoryController.handle)


export { smeRouter }