import { CPC } from "../../Cpc/entities/CPC"

interface Customer {
    id?: String   
    cnpj?: String   
    razao_social:String    
    img_path?:String     
    ativo?: boolean   
    createdAt?: Date  
    updatedAt?: Date   
    cpc?: CPC[]
    packages?: any[]
}

export { Customer }