import { Router } from "express";
import { FindUserByIdController } from "../../modules/User/useCases/FindUserByIdUseCase/FindUserByIdController";
import { ListUserController } from "../../modules/User/useCases/ListUserUseCase/ListUserController";

const listUserController = new ListUserController()
const findUserByIdController = new FindUserByIdController()

const userRouter = Router()

userRouter.get("/",listUserController.handle)
userRouter.get("/:id",findUserByIdController.handle)

export { userRouter }