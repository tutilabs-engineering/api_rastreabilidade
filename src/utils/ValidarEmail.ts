// função de validação de emails
function ValidarEmail(email:string) {

    let emailValido = /\S+@\S+\.\S+/

    return emailValido.test(email)

}

export {ValidarEmail}