import { container } from "tsyringe"
import { ICpcRepository } from "../../modules/Cpc/repositories/ICpcRepository"
import { CpcRepositoryInPrisma } from "../../modules/Cpc/repositories/implementations/CpcRepositoryInPrisma"
import { ICustomerRepository } from "../../modules/Customer/repositories/ICustomerRepository"
import { CustomerRepositoryInPrisma } from "../../modules/Customer/repositories/implementations/CustomerRepositoryInPrisma"

import { IModelRepository } from "../../modules/Model/repositories/IModelRepository"
import { ModelRepositoryInPrisma } from "../../modules/Model/repositories/implementations/ModelRepositoryInPrisma"
import { PackageRepositoryInPrisma } from "../../modules/Package/repositories/implementations/PackageRepositoryInPrisma"
import { IPackageRepository } from "../../modules/Package/repositories/IPackageRepository"

container.registerSingleton<IModelRepository>(
    "ModelRepository",
     ModelRepositoryInPrisma
)

container.registerSingleton<ICpcRepository>(
    "CpcRepository",
     CpcRepositoryInPrisma
)


container.registerSingleton<IPackageRepository>(
    "PackageRepository",
     PackageRepositoryInPrisma
)

container.registerSingleton<ICustomerRepository>(
    "CustomerRepository",
     CustomerRepositoryInPrisma
)