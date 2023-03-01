import { prisma } from "../../../../config/prisma";
import { CreateModelDTO } from "../../dtos/CreateModelDTO";
import { FiltersModelDTO } from "../../dtos/FiltersModelDTO";
import { UpdateModelDTO } from "../../dtos/UpdateModelDTO";
import { Model } from "../../entities/Model";
import { IModelRepository } from "../IModelRepository";

class ModelRepositoryInPrisma implements IModelRepository {
   
    async findByDescription(desc: string): Promise<Model> {
        const model:Model = await prisma.models.findFirst({
            select: {
                id: true,
                descricao: true,
                img_path: true,
                createdAt: true,
                updatedAt: true,
            },
            where: {
                descricao: desc
            }
        }).catch((error) => {
            throw new Error(error)
        })

        return model
    }

    async create({ descricao, img_path }: CreateModelDTO): Promise<void> {
        await prisma.models.create({
            data: {
                descricao,
                img_path
            }
        }).catch((error) => {
            throw new Error(error)
        })

    }
    async delete(id: string): Promise<void> {
        await prisma.models.delete({
            where: {
                id,
            }
        }).catch((error) => {
            throw new Error(error)
        })
    }
    async findById(id: string): Promise<Model> {
        const model:Model = await prisma.models.findUnique({
            select: {
                id: true,
                descricao: true,
                img_path: true,
                createdAt: true,
                updatedAt: true,
            },
            where: {
                id,
            }
        }).catch((error) => {
            throw new Error(error)
        })

        return model
    }
    async listModel({skip,take}: FiltersModelDTO): Promise<Model[]> {

        const model: Model[] = await prisma.models.findMany({
            select: {
                id: true,
                descricao: true,
                packages: true,
                img_path: true,
                createdAt: true,
                updatedAt: true,
            },
            take,
            skip
        }).catch((error) => {
            throw new Error(error)
        })


        return model

    }

    async update({ id, descricao, img_path }: UpdateModelDTO): Promise<void> {
        await prisma.models.update({
            data: {
                descricao,
                img_path
            },
             where: {
                id
            }
        }).catch((error) => {
            throw new Error(error)
        })
    }

}

export { ModelRepositoryInPrisma }