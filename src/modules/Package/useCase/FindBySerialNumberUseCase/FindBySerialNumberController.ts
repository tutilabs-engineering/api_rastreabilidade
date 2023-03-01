import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindBySerialNumberUseCase } from "./FindBySerialNumberUseCase";

class FindBySerialNumberController{
    async handle(req: Request, res: Response){
        const serial_number = req.params.serial_number;

        if (!serial_number) {
          res.status(400).end();
        }
    
        const findBySerialNumberUseCase = container.resolve(FindBySerialNumberUseCase)
        
        const embalagem = await findBySerialNumberUseCase.execute(serial_number)
    
        return res.status(200).json(embalagem);
    }
}

export { FindBySerialNumberController }