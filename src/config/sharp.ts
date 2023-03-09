import sharp from "sharp"
import fs from "fs"
import path from "path"

async function optimizationImage(file: string) {

    try {
        const image = await sharp(path.resolve(process.cwd(), "uploads", file)).toFormat("webp").webp({ quality: 45 }).resize({ height: 600, width: 600, fit: "contain", background: {
            b: 255,g: 255,r: 255
        } }).toBuffer()
        
        fs.writeFileSync(path.resolve(process.cwd(), "uploads", `${file.split(".jpg" || ".png" || ".jpeg")[0]}.webp`), image)

    } catch (error) {
        console.log(error)
    }

}

export { optimizationImage }