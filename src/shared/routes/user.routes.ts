import { Router } from "express";
import { UpdateUserController } from "../../modules/User/useCases/UpdateUserUseCase/UpdateUserController";
import { FindUserByIdController } from "../../modules/User/useCases/FindUserByIdUseCase/FindUserByIdController";
import { ListUserController } from "../../modules/User/useCases/ListUserUseCase/ListUserController";

const listUserController = new ListUserController()
const findUserByIdController = new FindUserByIdController()
const updateUserController = new UpdateUserController()

const userRouter = Router()

userRouter.get("/",listUserController.handle)
userRouter.get("/:id",findUserByIdController.handle)
userRouter.post("/:id",updateUserController.handle)

export { userRouter }