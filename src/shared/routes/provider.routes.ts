import { Router } from "express";
import { CreateProviderController } from "../../modules/Provider/useCases/CreateProviderUseCase/CreateProviderController";
import { ListProviderController } from "../../modules/Provider/useCases/ListProviderUseCase/ListProviderController";


const providerRouter = Router()

const listProviderController = new ListProviderController()
const createProviderController = new CreateProviderController()

providerRouter.get("/",listProviderController.handle)
providerRouter.post("/",createProviderController.handle)

export { providerRouter }