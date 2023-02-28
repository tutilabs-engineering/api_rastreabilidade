import { Options, diskStorage } from "multer"
import { resolve } from "path"
import { randomBytes } from "crypto"

const multerConfig = {
    dest: resolve(process.cwd(), "src", "uploads"),
    storage: diskStorage({
        destination: (req, file, callback) => {
            callback(null, resolve(process.cwd(), "src", "uploads"))
        },
        filename: (req, file, callback)=>{
            randomBytes(16, (error, hash) =>{
                if(error){ callback(error, file.filename) }

                const filename = `${hash.toString("hex")}-${file.originalname}`
                
                req.pathImg = filename

                callback(null, filename)
            })
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    },
    fileFilter: (req, file, callback) => {
        const formats = [
            'image/jpeg',
            'image/jpg',
            'image/png'
        ]

        if(formats.includes(file.mimetype)){
            callback(null, true)
        }else{
            callback(new Error("Formato não aceito"))
        }
    }
} as Options

export { multerConfig }