
import { Request, Response, NextFunction, request } from "express"
import { verify } from "jsonwebtoken"
import { UserRepositoryInPrisma } from "../../modules/User/repositories/implementations/UserRepositoryInPrisma"

interface iPayload {
    sub: string
}

interface iUserActive {
    ativo: boolean
}

async function AuthenticatedMiddleware(req: Request, res: Response, next: NextFunction) {

    // Recebendo o token da requisição
    const tokenHeader = req.headers.authorization

    // Verificando se o token não está vazio
    if (!tokenHeader) { return res.status(401).end() }

    // Separando Bearer do token
    const [, token] = tokenHeader.split(" ")

    try {

        // Verifica se o token é válido
        const { sub } = verify(token, "secret") as iPayload

        // Iniciando repositorio de usuário
        const userRepository = new UserRepositoryInPrisma()

        // Puxando usuário para verificação
        const {ativo} = await userRepository.findById(sub) as iUserActive

        // Verificando se o usuário está ativo
        if(!ativo){return res.status(401).end()}

        // passando meu id pra acesso ao usuário
        req.userId = sub
        
        return next()
    } catch (e) {
        return res.status(401).end()
    }
}

export { AuthenticatedMiddleware }