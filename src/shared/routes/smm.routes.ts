import { Router } from "express";
import { ListSmmRelatoryController } from "../../modules/Smm/useCases/ListSmmRelatoryUseCase/ListSmmRelatoryController";
import { ListSmmController } from "../../modules/Smm/useCases/ListSmmUseCase/ListSmmController";

const smmRouter = Router()


const listSmmController = new ListSmmController()
const listSmmRelatoryController = new ListSmmRelatoryController()


smmRouter.get("/", listSmmController.handle)
smmRouter.get("/relatory", listSmmRelatoryController.handle)


export {
    smmRouter
}