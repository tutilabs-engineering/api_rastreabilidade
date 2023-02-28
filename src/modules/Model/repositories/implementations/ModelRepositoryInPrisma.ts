import { prisma } from "../../../../config/prisma";
import { CreateModelDTO } from "../../dtos/CreateModelDTO";
import { Model } from "../../entities/Model";
import { IModelRepository } from "../IModelRepository";

class ModelRepositoryInPrisma implements IModelRepository {
  
    async create({ descricao, img_path }: CreateModelDTO): Promise<void> {
        await prisma.models.create({
            data:{
                descricao,
                img_path
            }
        }).catch((error) => {
            throw new Error(error)
        })

    }
    delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Model> {
        throw new Error("Method not implemented.");
    }
    async listModel(): Promise<Model[]> {

        const model: Model[] = await prisma.models.findMany({
            select:{
                id: true,
                descricao:true,
                packages: true,
                img_path: true,
                createdAt: true,
                updatedAt: true,
            }
        }).catch((error) => {
            throw new Error(error)
        })


        return model

    }

    update(data: Model): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export { ModelRepositoryInPrisma }