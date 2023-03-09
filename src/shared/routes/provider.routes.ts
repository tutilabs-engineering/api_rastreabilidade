import { Router } from "express";
import { CreateProviderController } from "../../modules/Provider/useCases/CreateProviderUseCase/CreateProviderController";
import { ListProviderController } from "../../modules/Provider/useCases/ListProviderUseCase/ListProviderController";
import { UpdateProviderController } from "../../modules/Provider/useCases/UpdateProviderUseCase/UpdateProviderController";
import { AuthenticatedMiddleware } from "../middlewares/AuthenticatedMiddlewares";
import { EnsureAdmin } from "../middlewares/EnsureAdmin";
import { EnsureInt } from "../middlewares/EnsureInt";


const providerRouter = Router()

const listProviderController = new ListProviderController()
const createProviderController = new CreateProviderController()
const updateProviderController = new UpdateProviderController()

providerRouter.get("/",AuthenticatedMiddleware,EnsureInt,listProviderController.handle)
providerRouter.post("/",AuthenticatedMiddleware,EnsureAdmin,createProviderController.handle)
providerRouter.put("/:id",AuthenticatedMiddleware,EnsureAdmin,updateProviderController.handle)

export { providerRouter }