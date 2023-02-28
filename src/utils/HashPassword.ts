import { hashSync } from "bcryptjs";

async function HashPassword(password: string){
   const hash_password = hashSync(password,8)
   
   return hash_password; 
}

export { HashPassword }