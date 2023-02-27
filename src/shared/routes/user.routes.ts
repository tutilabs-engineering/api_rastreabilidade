import { Router } from "express";
import { ListUserController } from "../../modules/User/useCases/ListUserUseCase/ListUserController";

const listUserController = new ListUserController()
const userRouter = Router()

userRouter.get("/",listUserController.handle)

export { userRouter }