export interface ICreateUserDTO{
    nome: string,
    ativo: boolean,
    matricula: string,
    email: string,
    password: string
    admin: boolean,
    mnt: boolean,
    createdAt?: Date
    updatedAt?: Date
}