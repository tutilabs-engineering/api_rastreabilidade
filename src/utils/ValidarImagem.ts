import { unlink } from "fs"
import { resolve } from "path"

function ValidarImagem(img_path: string){


        unlink(resolve(__dirname, "..", "..", "uploads", img_path), (err)=>{

            if(err && err.code == "ENOENT"){
                throw new Error("Arquivo não existe no sistema")
            }
        
            if(err){
                throw new Error("Ocorreu um erro enquanto removia o arquivo")
            }
        
        })


}

export { ValidarImagem }