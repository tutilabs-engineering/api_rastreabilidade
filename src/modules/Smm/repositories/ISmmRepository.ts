interface ISmmRepository{
    findByMovimentStatus(statusDeMovimentacao: boolean):Promise<Smm[]>
}

export { ISmmRepository }