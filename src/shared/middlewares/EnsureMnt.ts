import {Request, Response, NextFunction} from "express"
import { User } from "../../modules/User/entities/User"

async function EnsureMnt(req: Request, res: Response, next: NextFunction){


    const {user} = req.body 

    // Verificando se o usuário é válido
    if(!user){throw new Error("Usuário inválido")}
    
    // Verificando se o usuário é administrador
    if(!user.mnt){ return res.status(401).json({Error: "Usuário não autorizado"})}

    // Se administrador continua na rota
    return next()

}

export { EnsureMnt }