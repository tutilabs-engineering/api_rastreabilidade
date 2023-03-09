import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../../config/multer";
import { optimizationImage } from "../../config/sharp";

import { CreateModelController } from "../../modules/Model/useCases/CreateModelUseCase/CreateModelController";
import { DeleteModelController } from "../../modules/Model/useCases/DeleteModelUseCase/DeleteModelControler";
import { ListModelController } from "../../modules/Model/useCases/ListModelUseCase/ListModelController";
import { UpdateModelController } from "../../modules/Model/useCases/UpdateModelUseCase/UpdateModelController";
import { AuthenticatedMiddleware } from "../middlewares/AuthenticatedMiddlewares";

const listModelController = new ListModelController();
const createModelController = new CreateModelController()
const updateModelController = new UpdateModelController()
const deleteModelUseCase = new DeleteModelController()

const modelRouter = Router()

modelRouter.get("/",AuthenticatedMiddleware, listModelController.handle); //Listar todos os modelos
modelRouter.delete("/:id",AuthenticatedMiddleware, deleteModelUseCase.handle); //Listar todos os modelos

modelRouter.post("/", 
  AuthenticatedMiddleware,
  multer(multerConfig).single("file"),
  async (req, res, next) => {
    await optimizationImage(req.pathImg)
    return next()
  }, 
  createModelController.handle) // Create

  modelRouter.put("/:id", 
  AuthenticatedMiddleware,
  multer(multerConfig).single("file"),
  async (req, res, next) => {
    await optimizationImage(req.pathImg)
    return next()
  }, 
  updateModelController.handle)
export { modelRouter }