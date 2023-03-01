import { Router } from "express";
import { ListProviderController } from "../../modules/Provider/useCases/ListProviderUseCase/ListProviderController";


const providerRouter = Router()

const listProviderController = new ListProviderController()

providerRouter.get("/",listProviderController.handle)

export { providerRouter }