import {Request, Response, NextFunction} from "express"
import { getCustomRepository } from "typeorm"
import {UserRepository} from "../../app/backup/repositories/UserRepositoryInType"

async function EnsureAdmin(req: Request, res: Response, next: NextFunction){

    // Iniciando repositório de usuário
    const userRepository = getCustomRepository( UserRepository )

    // Buscando id de usuário da requisição
    const userId = req.userId

    // Buscando dados do usuário
    const user = await userRepository.findOne({id: userId})

    // Verificando se o usuário é válido
    if(!user){throw new Error("Usuário inválido")}

    // Verificando se o usuário é administrador
    if(!user.admin){ return res.status(401).json({Error: "Usuário não autorizado"})}

    // Se administrador continua na rota
    return next()

}

export { EnsureAdmin }