import { AppError } from "../config/AppError"

function ValidarSenha(password: string){
    if(password.length < 6) {throw new AppError(400,"Senha muito curta, insira uma nova senha")}
}

export { ValidarSenha }