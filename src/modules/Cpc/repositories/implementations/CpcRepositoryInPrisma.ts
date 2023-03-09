import { prisma } from "../../../../config/prisma";
import { CreateCpcDTO } from "../../dtos/CreateCpcDTO";
import { FiltersCPCDTO } from "../../dtos/FiltersCpcDTO";
import { CPC } from "../../entities/CPC";
import { ICpcRepository } from "../ICpcRepository";

class CpcRepositoryInPrisma implements ICpcRepository {
    
    async findbyId(id: string): Promise<CPC> {
        const data: CPC = await prisma.cpc.findUnique({
            where:{
              id
            }
        }).catch((error)=>{
            throw new Error(error);
        })

        return data
        
    }
    async findbyModelAndCustomer(FK_customer: string, FK_model: string): Promise<CPC> {
        const data: CPC = await prisma.cpc.findFirst({
            select:{
            id: true,
            FK_customer: true,
            FK_model: true,
            createdAt: true,
            updatedAt: true,
            customers: true,
            models: true,
            },
            where:{
               AND:{
                FK_customer: FK_customer,
                FK_model: FK_model
               }

            }
        }).catch((error)=>{
            throw new Error(error);
        })
        
        return data
    }
    async create({FK_customer,FK_model}: CreateCpcDTO): Promise<void    > {
        prisma.cpc.create({
            data: {
                FK_customer,
                FK_model
            }
           
        }).catch((error)=>{
            throw new Error(error);
        })
    }
    async delete(id: string): Promise<void> {
         await prisma.cpc.delete({
            where:{
              id
            }
        }).catch((error)=>{
            throw new Error(error);
        })
    }
    async listCPCByCustomer(id: string): Promise<CPC[]> {

       const data: CPC[] = await prisma.cpc.findMany({
            select:{
            id: true,
            FK_customer: true,
            FK_model: true,
            // createdAt: true,
            // updatedAt: true,
            customers: {
                select:{
                    razao_social: true,
                }
            },
            // models: true,
            },
            where:{
                FK_model: id
            }
        }).catch((error)=>{
            throw new Error(error);
        })
        
        return data
        
    }
    async list({skip,take}: FiltersCPCDTO): Promise<{data: CPC[], all: Number}> {
        const data: CPC[] = await prisma.cpc.findMany({
            take,
            skip,
            select:{
            id: true,
            FK_customer: true,
            FK_model: true,
            // createdAt: true,
            // updatedAt: true,
            customers: {
                select:{
                    // id: true,
                    // cnpj: true,
                    razao_social: true,
                    img_path: true,
                }
            },
            models: {
                select:{
                    // id: true,
                    // cnpj: true,
                    descricao: true,
                    img_path: true,
                }
            },
            
            }
        
        }).catch((error)=>{
            throw new Error(error);
        })

        const all = await prisma.cpc.count({})
         
        return {all, data  }
    }
    update(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    
}

export {CpcRepositoryInPrisma}