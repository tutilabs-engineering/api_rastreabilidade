export type CreateSmmDTO = {
    user: {
      username: string;
      matricula: string;
    };
    fornecedor: {
      descricao: string;
      statusDoFornecedor: boolean;
    };
    embalagem: {
      descricao: string;
      serial_number: string;
      modeloDaEmbalagem: string;
    };
    localizacao: string
}