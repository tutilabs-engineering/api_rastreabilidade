import sharp from "sharp"
import fs from "fs"
import path from "path"

const arrayList = fs.readdirSync(path.resolve(__dirname, "..", "..", "uploads"))

async function optimizationImage(file: string) {

    try {
        const image = await sharp(path.resolve(__dirname, "..", "..", "uploads", file)).toFormat("webp").webp({ quality: 45 }).resize({ width: 500, fit: "contain", background: {
            b: 255,g: 255,r: 255
        } }).toBuffer()

        const imageExists = arrayList.includes(`${file.split(".")[0]}.webp`)
    
        if(!imageExists){
            fs.writeFileSync(path.resolve(__dirname, "..", "..", "uploads", `${file.split(".jpg" || ".png" || "jpeg")[0]}.webp`), image)
        }

    } catch (error) {
        console.log(error)
    }

}

arrayList.forEach(async (file)=>{

    if(!file.includes(".webp")){
        await optimizationImage(file)
    }

})



