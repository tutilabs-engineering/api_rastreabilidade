import { Request, Response, NextFunction } from "express"
import { ValidarImagem } from "../../app/utils/ValidarImagem"

// Middlware de verificação de exceptions
function VerificarErros(err:Error, req:Request, res:Response, next:NextFunction){
    
    if(err instanceof Error){

        if(err.name === "QueryFailedError"){
            if(req.pathImg){
                ValidarImagem(req.pathImg)
            }
            return res.status(400).json({message: err.message})
        }

        return res.status(400).json({
            messsage: err.message,
        })
    }

    return res.status(501).json({
        message: "Server Internal Error"
    })
    
}

export { VerificarErros }