import { Router } from "express";
import { UpdateUserController } from "../../modules/User/useCases/UpdateUserUseCase/UpdateUserController";
import { FindUserByIdController } from "../../modules/User/useCases/FindUserByIdUseCase/FindUserByIdController";
import { ListUserController } from "../../modules/User/useCases/ListUserUseCase/ListUserController";
import { CreateUserController } from "../../modules/User/useCases/CreateUserUseCase/CreateUserController";
import { DeleteUserController } from "../../modules/User/useCases/DeleteUserUseCase/DeleteUserCotroller";
import { AuthenticateUserController } from "../../modules/User/useCases/AuthenticateUserUseCase/AuthenticateUserController";
import { VerifyAuthMiddlewares } from "../middlewares/VerifyAuthMiddlewares";
import { AuthenticatedMiddleware } from "../middlewares/AuthenticatedMiddlewares";
import { EnsureAdmin } from "../middlewares/EnsureAdmin";

const listUserController = new ListUserController()
const findUserByIdController = new FindUserByIdController()
const updateUserController = new UpdateUserController()
const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const authenticateUserController = new AuthenticateUserController()
const userRouter = Router()


userRouter.get("/verify", VerifyAuthMiddlewares)
userRouter.post("/session", authenticateUserController.handle)
userRouter.get("/",AuthenticatedMiddleware,EnsureAdmin, listUserController.handle)
userRouter.post("/",AuthenticatedMiddleware,EnsureAdmin, createUserController.handle)
userRouter.get("/:id",AuthenticatedMiddleware,findUserByIdController.handle)
userRouter.put("/:id",AuthenticatedMiddleware,EnsureAdmin,updateUserController.handle)
userRouter.delete("/:id",AuthenticatedMiddleware, EnsureAdmin, deleteUserController.handle)
export { userRouter }