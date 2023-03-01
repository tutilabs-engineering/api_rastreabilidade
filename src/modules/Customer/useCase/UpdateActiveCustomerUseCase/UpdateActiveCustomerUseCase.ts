import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../config/AppError";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";

@injectable()
class UpdateActiveCustomerUseCase {
    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ){}

    async execute(id: string, status: boolean){

        const customer = await this.customerRepository.findById(id)

        if(!customer){
            throw new AppError(404, "Cliente não encontrado")
        }

        await this.customerRepository.updateActive(id, Boolean(status));

    }


}

export { UpdateActiveCustomerUseCase }