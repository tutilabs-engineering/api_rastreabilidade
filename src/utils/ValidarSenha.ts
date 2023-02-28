function ValidarSenha(password: string){
    if(password.length < 6) {throw new Error("Senha muito curta, insira uma nova senha")}
}

export { ValidarSenha }