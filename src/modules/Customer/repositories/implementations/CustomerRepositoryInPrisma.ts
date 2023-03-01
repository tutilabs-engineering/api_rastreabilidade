import { prisma } from "../../../../config/prisma";
import { CreateCustomerDTO } from "../../dtos/CreateCustomerDTO";
import { FiltersCustomerDTO } from "../../dtos/FiltersCustomerDTO";
import { UpdateCustomerDTO } from "../../dtos/UpdateCustomerDTO";
import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../ICustomerRepository";

class CustomerRepositoryInPrisma implements ICustomerRepository {
    async findByCNPJ(cnpj: string): Promise<Customer> {
        const data: Customer = await prisma.customers.findFirst({
            select:{
                id: true,  
                cnpj: true,     
                razao_social:true,   
                img_path :true,    
                ativo: true, 
                createdAt :true,
                updatedAt:true, 
                // cpc: true,
                // packages: true,
            },
            where:{
               cnpj     
            }
         }).catch((error)=>{
            throw new Error(error);
    
         })
         return data
    }
    async create({cnpj,img_path,razao_social}: CreateCustomerDTO): Promise<void> {
       await prisma.customers.create({
            data:{
                cnpj,
                img_path,
                razao_social,
                ativo: true,
            }
           
         }).catch((error)=>{
            throw new Error(error);
    
         })
    } 
    async delete(id: string): Promise<void> {
        await prisma.customers.delete({
          where:{
            id
          }
         }).catch((error)=>{
            throw new Error(error);
    
         })
    }
    async list({skip, take, status}: FiltersCustomerDTO): Promise<Customer[]> {
     const data: Customer[] = await prisma.customers.findMany({
        select:{
            id: true,  
            cnpj: true,     
            razao_social:true,   
            img_path :true,    
            ativo: true, 
            createdAt :true,
            updatedAt:true, 
            // cpc: true,
            // packages: true,
        },
        take,
        skip,
        where:{
            ativo: Boolean(status),
            NOT: [
                {cnpj:"68088234000176"}, // Jaguarao
                {cnpj:"84501873000178"},  // Matriz
                {cnpj:"84501873000330"},  // Filial
                {cnpj:"86631663000120"}   // CD
            ]
        }
     }).catch((error)=>{
        throw new Error(error);

     })
     return data
    }
    listInative(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async findById(id: string): Promise<Customer> {
        const data: Customer = await prisma.customers.findFirst({
            select:{
                id: true,  
                cnpj: true,     
                razao_social:true,   
                img_path :true,    
                ativo: true, 
                createdAt :true,
                updatedAt:true, 
                // cpc: true,
                // packages: true,
            },
            where:{
               id     
            }
         }).catch((error)=>{
            throw new Error(error);
    
         })
         return data
    }
    async updateActive(id: string,status: boolean): Promise<void> {
        await prisma.customers.update({
            data:{
                ativo: status
            },
            where:{
                id
            }
            
           
         }).catch((error)=>{
            throw new Error(error);
    
         })
    }
    async update({cnpj,img_path,razao_social,ativo,id}: UpdateCustomerDTO): Promise<void> {
        await prisma.customers.update({
            data:{
                cnpj,
                img_path,
                razao_social,
                ativo: Boolean(ativo),
                updatedAt: new Date()

            },
            where:{
                id
            }
            
           
         }).catch((error)=>{
            throw new Error(error);
    
         })
    }
    
}

export {CustomerRepositoryInPrisma}