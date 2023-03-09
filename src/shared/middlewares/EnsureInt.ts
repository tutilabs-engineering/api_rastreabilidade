import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm"

async function EnsureInt(req: Request, res: Response, next: NextFunction){



    // Buscando dados do usuário
    const user = req.body.user

    // Verificando se o usuário é válido
    if(!user){throw new Error("Usuário inválido")}

    // Verificando se o usuário é administrador
    if(!user.admin && !user.mnt){ return res.status(401).json({Error: "Usuário não autorizado"})}

    // Se administrador/Manutenção continua na rota
    return next()

}

export { EnsureInt }