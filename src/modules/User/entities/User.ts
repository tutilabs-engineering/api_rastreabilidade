export interface User{
    id?: string,
    nome: string,
    matricula: string,
    email: string,
    password: string,
    admin: boolean,
    mnt: boolean,
    ativo: boolean,
    createdAt: Date,
    updatedAt: Date
}