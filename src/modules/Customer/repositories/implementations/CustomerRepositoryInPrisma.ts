import { prisma } from "../../../../config/prisma";
import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../ICustomerRepository";

class CustomerRepositoryInPrisma implements ICustomerRepository {
    create(): Promise<void> {
        throw new Error("Method not implemented.");
    } 
    delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async list(): Promise<Customer[]> {
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
        where:{
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
    findById(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateActive(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}

export {CustomerRepositoryInPrisma}