import { Router } from "express";
// import { ListCpcByCustomerController } from "../../modules/Cpc/useCases/ListCpcByCustomerControllerUseCase/ListCpcByCustomerController";
// import { CreateModelController } from "../../modules/Model/useCases/CreateModelUseCase/CreateModelController";
// import { DeleteModelController } from "../../modules/Model/useCases/DeleteModelUseCase/DeleteModelControler";
import { ListModelController } from "../../modules/Model/useCases/ListModelUseCase/ListModelController";
// import { UpdateModelController } from "../../modules/Model/useCases/UpdateModelUseCase/UpdateModelController";
// import { AuthenticatedMiddleware } from "../middlewares/AuthenticatedMiddlewares";

// const createModelController = new CreateModelController(); // Criação de modelo para embalagens
const listModelController = new ListModelController(); // Busca todos os modelos
// const listCpcByCustomerController = new ListCpcByCustomerController(); // Busca todas as embalagens daquele cliente
// const updateModelController = new UpdateModelController(); // Atualização de modelos
// const deleteModelController = new DeleteModelController(); // Exclusão de modelos


const modelRouter = Router()

// router.get(
//     "/api/packages/modelo/:model",
//     AuthenticatedMiddleware,
//     listByModelPackageController.list
//   ); // busca embalagens por modelo
  //modelos
  modelRouter.get("/", listModelController.handle); //Busca todos os modelos
  // modelRouter.get("/api/models", AuthenticatedMiddleware, listModelController.list); //Busca todos os modelos

export {modelRouter}