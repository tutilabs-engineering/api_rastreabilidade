import {Request, Response, NextFunction} from "express"

async function EnsureAdmin(req: Request, res: Response, next: NextFunction){

    // Iniciando repositório de usuário

    // Buscando id de usuário da requisição
  
    const {user} = req.body

    // Verificando se o usuário é válido
    if(!user){throw new Error("Usuário inválido")}
    
    // Verificando se o usuário é administrador
    if(!user.admin){ return res.status(401).json({Error: "Usuário não autorizado"})}

    // Se administrador continua na rota
    return next()

}

export { EnsureAdmin }