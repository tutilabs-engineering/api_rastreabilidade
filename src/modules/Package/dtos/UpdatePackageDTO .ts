interface UpdatePackageDTO {
        origem: string
        FK_modelo?: string,
        FK_destino?: string
        status?: number
        updatedAt?: Date    
}

export { UpdatePackageDTO  }