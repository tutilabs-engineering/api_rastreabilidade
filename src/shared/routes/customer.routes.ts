import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../../config/multer";
import { optimizationImage } from "../../config/sharp";
import { CreateCustomerController } from "../../modules/Customer/useCase/CreateCustomerUseCase/CreateCustomerController";
import { DeleteCustomerController } from "../../modules/Customer/useCase/DeleteCusomerUseCase/DeleteCustomerController";
import { ListCustomerController } from "../../modules/Customer/useCase/ListCustomerUseCase/ListCustomerController";
import { UpdateCustomerController } from "../../modules/Customer/useCase/UpdateCustomerUseCase/UpdateCustomerController";


const listCustomerController = new ListCustomerController()
const lireateCustomerController = new CreateCustomerController()
const deleteCustomerController = new DeleteCustomerController()
const updateCustomerController = new UpdateCustomerController()
const customerRouter = Router()

customerRouter.get("/", listCustomerController.handle)
customerRouter.delete("/:id", deleteCustomerController.handle)
customerRouter.post("/",
    multer(multerConfig).single("file"),
    async (req, res, next) => {
        await optimizationImage(req.pathImg)
        return next()
    },
    lireateCustomerController.handle)

customerRouter.put("/:id",
    multer(multerConfig).single("file"),
    async (req, res, next) => {
        await optimizationImage(req.pathImg)
        return next()
    },
    updateCustomerController.handle)


export { customerRouter }