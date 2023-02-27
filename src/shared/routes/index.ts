import { Router } from "express";

/* ===================================================================================================================================== */

// Configurações do Multer -> middleware que detectat as imagens
import { multerConfig } from "../../app/config/multer";
import multer from "multer";

/* ===================================================================================================================================== */

// Import de controller de instancia de
import { InstanceSystemController } from "./app/controllers/Instance/InstanceSystemController";

// Import de controllers de usuário
import { UserLoggedController } from "./app/controllers/User/UserLoggedController";
import { AuthenticateUserController } from "./app/controllers/User/AuthenticateUserController";
import { CreateUserController } from "./app/controllers/User/CreateUserController";
import { ListUserController } from "./app/controllers/User/ListUserController";
import { ListUserInactiveController } from "./app/controllers/User/ListUserInactiveController";
import { ListOneUserController } from "./app/controllers/User/ListOneUserController";
import { UpdateUserController } from "./app/controllers/User/UpdateUserController";
import { UpdateActiveUserController } from "./app/controllers/User/UpdateActiveUserController";
import { DeleteUserController } from "./app/controllers/User/DeleteUserController";

// Import de controller de clientes
import { CreateCustomerController } from "./app/controllers/Customer/CreateCustomerController";
import { ListCustomerController } from "./app/controllers/Customer/ListCustomerController";
import { ListCustomerInactiveController } from "./app/controllers/Customer/ListCustomerInactiveController";
import { ListOneCustomerController } from "./app/controllers/Customer/ListOneCustomerController";
import { UpdateCustomerController } from "./app/controllers/Customer/UpdateCustomerController";
import { UpdateAticveCustomerController } from "./app/controllers/Customer/UpdateAticveCustomerController";
import { DeleteCustomerController } from "./app/controllers/Customer/DeleteCustomerController";

// Import de controller de modelos
import { CreateModelController } from "./app/controllers/Model/CreateModelController";
import { ListModelController } from "./app/controllers/Model/ListModelController";
import { UpdateModelController } from "./app/controllers/Model/UpdateModelController";
import { DeleteModelController } from "./app/controllers/Model/DeleteModelControler";

// Import de controller de embalagens
import { CreatePackageController } from "./app/controllers/Package/CreatePackageController";
import { ListPackageController } from "./app/controllers/Package/ListPackageController";
import { ListOnePackageController } from "./app/controllers/Package/ListOnePackageController";
import { ListByStatusPackageController } from "./app/controllers/Package/ListByStatusPackageController";
import { ListByModelPackageController } from "./app/controllers/Package/ListByModelPackageController";
import { ListByOriginPackageController } from "./app/controllers/Package/ListByOriginPackageController";
import { ListByDestinoPackageController } from "./app/controllers/Package/ListByDestinoPackageController";
import { ListByStatusAndProviderController } from "./app/controllers/Package/ListByStatusAndProviderController";
import { UpdatePackageController } from "./app/controllers/Package/UpdatePackageController";
import { DeletePackageController } from "./app/controllers/Package/DeletePackageController";
import { UpdateOriginPackageController } from "./app/controllers/Package/UpdateOriginPackageController";

// Import de controller de CPC (controle de preferência de clientes)
import { CreateCpcController } from "../../app/modules/Cpc/useCases/CreateCpcUseCase/CreateCpcController";
import { ListCpcController } from "../../app/modules/Cpc/ListCpcControllerUseCase/ListCpcController";
import { ListCpcByCustomerController } from "../../app/modules/Cpc/ListCpcByCustomerControllerUseCase/ListCpcByCustomerController";
import { UpdateCpcController } from "../../app/modules/Cpc/UpdatedCpcController/UpdatedCpcController";
import { DeleteCpcController } from "../../app/modules/Cpc/DeleteCpcUseCase/DeleteCpcController";

// import de controller do SME
import { CreateSmeController } from "./app/controllers/Sme/CreateSmeController";
import { ListSmeController } from "./app/controllers/Sme/ListSmeController";
import { ListOneSmeController } from "./app/controllers/Sme/ListOneSmeController";
import { ListByCnpjSmeController } from "./app/controllers/Sme/ListByCnpjSmeController";
import { ListByPackageSmeController } from "./app/controllers/Sme/ListByPackageSmeController";
import { ListSmeRelatoryController } from "./app/controllers/Sme/ListSmeRelatoryController";

// import de controller de provider
import { CreateProviderController } from "./app/controllers/Provider/CreateProviderController";
import { ListProviderController } from "./app/controllers/Provider/ListProviderController";
import { ListOneProviderController } from "./app/controllers/Provider/ListOneProviderController";
import { UpdateProviderController } from "./app/controllers/Provider/UpdateProviderController";

// import de controller de smm
import { CreateSmmController } from "./app/controllers/Smm/CreateSmmController";
import { ListSmmController } from "./app/controllers/Smm/ListSmmController";
import { ListSmmRelatoryController } from "./app/controllers/Smm/ListSmmRelatoryController";

/* ===================================================================================================================================== */

// import de Middleware
import { AuthenticatedMiddleware } from "../middlewares/AuthenticatedMiddlewares"; // Verifica autenticação
import { EnsureAdmin } from "../middlewares/EnsureAdmin"; // Verifica se o usuário é admin
import { EnsureInt } from "../middlewares/EnsureInt"; // Verifica se o usuário é intermediário (Manutenção)
import { optimizationImage } from "../../app/config/sharp";

/* ===================================================================================================================================== */

// Configuração das rotas
const route = Router();

/* ===================================================================================================================================== */

// Iniciando classe controller

//intanciar
const instanceSystemController = new InstanceSystemController();

//usuarios
const userLoggedController = new UserLoggedController(); // verifica se o token do usuário é valido
const createUserController = new CreateUserController(); // Criação de usuário
const authenticateUserController = new AuthenticateUserController(); // Autenticação de usuário
const listUserController = new ListUserController(); // Lista todos os usuários ativos
const listUserInactiveController = new ListUserInactiveController(); // Lista todos os usuário inativos
const listOneUserController = new ListOneUserController(); // Busca um único usuário
const updateUserController = new UpdateUserController(); // Edição de usuário
const updateActiveUserController = new UpdateActiveUserController(); // mudar chave de ativo: false
const deleteUserController = new DeleteUserController(); // Deleta o usuário

//clientes
const createCustomerController = new CreateCustomerController(); // Criação de um novo cliente
const listCustomerController = new ListCustomerController(); // Lista todos os clientes ativos
const listCustomerInactiveController = new ListCustomerInactiveController(); // Lista todos os clientes inativos
const listOneCustomerController = new ListOneCustomerController(); // Lista um cliente especifico
const updateCustomerController = new UpdateCustomerController(); // Atualiza um cliente especifico
const updateAticveCustomerController = new UpdateAticveCustomerController(); // Muda chave de status do cliente para inativo
const deleteCustomerController = new DeleteCustomerController(); // Deleta um cliente

//modelos
const createModelController = new CreateModelController(); // Criação de modelo para embalagens
const listModelController = new ListModelController(); // Busca todos os modelos
const listCpcByCustomerController = new ListCpcByCustomerController(); // Busca todas as embalagens daquele cliente
const updateModelController = new UpdateModelController(); // Atualização de modelos
const deleteModelController = new DeleteModelController(); // Exclusão de modelos

//embalagens
const createPackageController = new CreatePackageController(); // cria uma nova embalagem
const listPackageController = new ListPackageController(); // lista todas as embalagens
const listOnePackageController = new ListOnePackageController(); //lista uma embalagem especifica
const listByStatusPackageController = new ListByStatusPackageController(); // listando por status
const listByModelPackageController = new ListByModelPackageController(); // listando por modelo
const listByOriginPackageController = new ListByOriginPackageController(); // listando por origem
const listByDestinoPackageController = new ListByDestinoPackageController(); // listando por destino
const listByStatusAndProviderController = new ListByStatusAndProviderController() // recebe as embalagens com providers separados
const updatePackageController = new UpdatePackageController(); // Atualizar embalagem especifica
const deletePackageController = new DeletePackageController(); // Delete uma embalagem
const updateOriginPackageController = new UpdateOriginPackageController(); // Atualizar origem de embalagem

//cpc
const createCpcController = new CreateCpcController(); // cria um novo item pra controle de proferência do cliente
const listCpcController = new ListCpcController(); // lista os cpc cadastrdos
const updateCpcController = new UpdateCpcController(); // atualiza o CPC
const deleteCpcController = new DeleteCpcController(); // deleta o CPC

//sme
const createSmeController = new CreateSmeController(); //adicionar um SME
const listSmeController = new ListSmeController(); // buscar todos os sme cadastrados
const listOneSmeController = new ListOneSmeController(); // busca sme especifico
const listByCnpjSmeController = new ListByCnpjSmeController(); // buscar todos os sme por cnpj
const listByPackageSmeController = new ListByPackageSmeController(); // busca todos os sme por embalagem
const listSmeRelatoryController = new ListSmeRelatoryController();

//provider
const createProviderController = new CreateProviderController(); // criar um fornecedor
const listProviderController = new ListProviderController(); // lista todos os fornecedores
const listOneProviderController = new ListOneProviderController();
const updateProviderController = new UpdateProviderController()

//smm
const createSmmController = new CreateSmmController();
const listSmmController = new ListSmmController();
const listSmmRelatoryController = new ListSmmRelatoryController();

/* ===================================================================================================================================== */

// Rotas get

// Imagem
route.get("/api/imagens/:imgpath", (req, res) => {
  const { imgpath } = req.params;
  return res.status(200).sendFile(__dirname + `/uploads/${imgpath}`); // Carrega a imagem
});

// Instanciar sistema
route.get("/api/instance", AuthenticatedMiddleware, instanceSystemController.list) // Instanciando os dados no sistema

//usuarios
route.get(
  "/api/userLogged/",
  AuthenticatedMiddleware,
  userLoggedController.verifyUser
); // verifica se o token é valido
route.get(
  "/api/users/:id",
  AuthenticatedMiddleware,
  listOneUserController.list
); //Lista apenas um usuário

route.get("/api/users", AuthenticatedMiddleware, listUserController.list); //lista de usuários ativos

route.get(
  "/api/users_inactive",
  AuthenticatedMiddleware,
  listUserInactiveController.list
); //lista de usuários inativos

//clientes
route.get(
  "/api/customers/:id",
  AuthenticatedMiddleware,
  listOneCustomerController.list
); // Lista apenas um cliente

route.get(
  "/api/customers",
  AuthenticatedMiddleware,
  listCustomerController.list
); // lista de clientes ativos

route.get(
  "/api/customers_inactive",
  AuthenticatedMiddleware,
  listCustomerInactiveController.list
); // lista de clientes inativos



//embalagens
route.get("/api/packages", AuthenticatedMiddleware, listPackageController.list); // buscar todas as embalagens
route.get(
  "/api/packages/:serial_number",
  AuthenticatedMiddleware,
  listOnePackageController.list
); // busca uma embalagem especifica
route.get(
  "/api/packages/status/:status",
  AuthenticatedMiddleware,
  listByStatusPackageController.list
); // busca embalagem por status

route.get(
  "/api/packages/origem/:origin",
  AuthenticatedMiddleware,
  listByOriginPackageController.list
); // busca embalagens por origem
route.get(
  "/api/packages/destino/:FK_destino",
  AuthenticatedMiddleware,
  listByDestinoPackageController.list
); // busca embalagens por destino
route.get("/api/packagesByProvider",
  AuthenticatedMiddleware,
  listByStatusAndProviderController.handle
);

//cpc
route.get("/api/cpc", AuthenticatedMiddleware, listCpcController.list); // lista todas as embalagens e seus clientes
route.get(
  "/api/cpc/:FK_customer",
  AuthenticatedMiddleware,
  listCpcByCustomerController.list
); // lista as embalagens de preferência do cliente

//sme
route.get("/api/sme", AuthenticatedMiddleware, listSmeController.list); // busca todos os sme cadastrados
route.get("/api/sme/:id", AuthenticatedMiddleware, listOneSmeController.list); // busca o sme cadastrado
route.get(
  "/api/sme/cnpj/:cnpj",
  AuthenticatedMiddleware,
  listByCnpjSmeController.list
); // busca todos os sme do cliente pelo cnpj
route.get(
  "/api/sme/serial/:serial_number",
  AuthenticatedMiddleware,
  listByPackageSmeController.list
); // busca todos os sme do cliente pelo cnpj

route.get(
  "/api/relatory/sme/",
  AuthenticatedMiddleware,
  listSmeRelatoryController.list
);

//provider
route.get(
  "/api/provider",
  AuthenticatedMiddleware,
  listProviderController.list
);
route.get(
  "/api/provider/:id",
  AuthenticatedMiddleware,
  listOneProviderController.list
);

//smm
route.get("/api/smm", AuthenticatedMiddleware, listSmmController.list);

route.get(
  "/api/smm/relatory",
  AuthenticatedMiddleware,
  listSmmRelatoryController.list
);

/* ===================================================================================================================================== */

// Rotas post

//usuarios - autenticação
route.post("/api/users", createUserController.create); // Rota de criação de usuário
route.post("/api/session", authenticateUserController.execute); // Rota de login de usuário

//clientes
route.post(
  "/api/customers",
  AuthenticatedMiddleware,
  EnsureAdmin,
  multer(multerConfig).single("file"),
  async (req, res, next) => {
    await optimizationImage(req.pathImg)
    return next()
  },
  createCustomerController.create
); // Rota de Criação de cliente

//modelos
route.post(
  "/api/models",
  AuthenticatedMiddleware,
  EnsureAdmin,
  multer(multerConfig).single("file"),
  async (req, res, next) => {
    await optimizationImage(req.pathImg)
    return next()
  },
  createModelController.create
); // busca todos os modelos

//embalagens
route.post(
  "/api/packages",
  AuthenticatedMiddleware,
  createPackageController.create
); // rota de criação de embalagem

//cpc
route.post(
  "/api/cpc",
  AuthenticatedMiddleware,
  EnsureAdmin,
  createCpcController.create
); // criação de CPC

//sme
route.post("/api/sme", AuthenticatedMiddleware, createSmeController.create);

//provider
route.post(
  "/api/provider",
  AuthenticatedMiddleware,
  EnsureAdmin,
  createProviderController.create
);

//smm
route.post(
  "/api/smm",
  AuthenticatedMiddleware,
  EnsureInt,
  createSmmController.create
);

/* ===================================================================================================================================== */

// Rotas put - update

// usuarios
route.put(
  "/api/users/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  updateUserController.update
); // Edição de usuário

route.put(
  "/api/users_delete/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  updateActiveUserController.active
); // Delete de usuário

// clientes
route.put(
  "/api/customers/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  multer(multerConfig).single("file"),
  async (req, res, next) => {
    await optimizationImage(req.pathImg)
    return next()
  },
  updateCustomerController.update
); // Edição de clientes

route.put(
  "/api/customers_delete/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  updateAticveCustomerController.active
); // Delete de clientes

// modelos
route.put(
  "/api/models/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  multer(multerConfig).single("file"),
  async (req, res, next) => {
    await optimizationImage(req.pathImg)
    return next()
  },
  updateModelController.update
); // atualiza os modelos

// embalagens
route.put(
  "/api/packages/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  updatePackageController.update
); // Edição de embalagens

route.put(
  "/api/packages/update/:serial_number",
  updateOriginPackageController.update
);

// CPC
route.put(
  "/api/cpc/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  updateCpcController.update
); // atualização de cpc


// Provider
route.put("/api/provider/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  updateProviderController.handle
);
/* ===================================================================================================================================== */

// Rotas delete

// usuarios
route.delete(
  "/api/users_delete/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  deleteUserController.delete
); // Deleta um usuário

// clientes
route.delete(
  "/api/customers_delete/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  deleteCustomerController.delete
); // Deleta um cliente

// modelos
route.delete(
  "/api/models_delete/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  deleteModelController.delete
); // deletar modelos

// embalagens
route.delete(
  "/api/packages_delete/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  deletePackageController.delete
); // Deleta uma embalagem

// CPC
route.delete(
  "/api/cpc_delete/:id",
  AuthenticatedMiddleware,
  EnsureAdmin,
  deleteCpcController.delete
); // deletar CPC
/* ===================================================================================================================================== */

export { route };
