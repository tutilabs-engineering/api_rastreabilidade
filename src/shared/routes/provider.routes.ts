import { Router } from "express";
import { CreateProviderController } from "../../modules/Provider/useCases/CreateProviderUseCase/CreateProviderController";
import { ListProviderController } from "../../modules/Provider/useCases/ListProviderUseCase/ListProviderController";
import { UpdateProviderController } from "../../modules/Provider/useCases/UpdateProviderUseCase/UpdateProviderController";


const providerRouter = Router()

const listProviderController = new ListProviderController()
const createProviderController = new CreateProviderController()
const updateProviderController = new UpdateProviderController()

providerRouter.get("/",listProviderController.handle)
providerRouter.post("/",createProviderController.handle)
providerRouter.put("/:id",updateProviderController.handle)

export { providerRouter }