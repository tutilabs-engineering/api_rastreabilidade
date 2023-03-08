
import { Request, Response, NextFunction, request } from "express"
import { verify } from "jsonwebtoken"
import { User } from "../../modules/User/entities/User"
import { UserRepositoryInPrisma } from "../../modules/User/repositories/implementations/UserRepositoryInPrisma"

interface iPayload {
    sub: string
}

interface iUserActive {
    ativo: boolean
}

async function VerifyAuthMiddlewares(req: Request, res: Response, next: NextFunction) {

    // Recebendo o token da requisição
    const tokenHeader = req.headers.authorization

    // Verificando se o token não está vazio
    if (!tokenHeader) { return res.status(401).end() }


    // Separando Bearer do token
    const [, token] = tokenHeader.split(" ")

    try {
       
        // Verifica se o token é válido 
        const { sub } = verify(token, process.env.SECRET) as iPayload

                     // Iniciando repositorio de usuário
        const userRepository = new UserRepositoryInPrisma()

        // Puxando usuário para verificação
        const user  = await userRepository.findById(sub) as User
        
        // Verificando se o usuário está ativo
        if(!user.ativo){return res.status(401).end()}
        
        delete user.id
        delete user.password
        delete user.updatedAt
        // delete user.mnt
        // delete user.admin
        // delete user.ativo
   
        return res.status(200).json(user)
    } catch (e) {
        return res.status(401).end()
    }
}

export { VerifyAuthMiddlewares }