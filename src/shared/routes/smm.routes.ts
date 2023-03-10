import { Router } from "express";
import { FindSmmByModelController } from "../../modules/Smm/useCases/FindSmmByModelUseCase/FindSmmByModelController";
import { ListSmmByModelController } from "../../modules/Smm/useCases/ListSmmByModelUseCase/ListSmmByModelController";
import { ListSmmByModelUseCase } from "../../modules/Smm/useCases/ListSmmByModelUseCase/ListSmmByModelUseCase";
import { ListSmmRelatoryController } from "../../modules/Smm/useCases/ListSmmRelatoryUseCase/ListSmmRelatoryController";
import { ListSmmController } from "../../modules/Smm/useCases/ListSmmUseCase/ListSmmController";
import { AuthenticatedMiddleware } from "../middlewares/AuthenticatedMiddlewares";

const smmRouter = Router()


const listSmmController = new ListSmmController()
const listSmmRelatoryController = new ListSmmRelatoryController()
const listSmmByModelController = new ListSmmByModelController()
const findSmmByModelController = new FindSmmByModelController()


smmRouter.get("/",AuthenticatedMiddleware, listSmmController.handle)
smmRouter.get("/relatory",AuthenticatedMiddleware, listSmmRelatoryController.handle)
smmRouter.get("/modelAndStatus",AuthenticatedMiddleware, listSmmByModelController.handle)
smmRouter.get("/:serial_number",AuthenticatedMiddleware,findSmmByModelController.handle)


export {
    smmRouter
}