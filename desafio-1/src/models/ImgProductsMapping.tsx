import imgKitCamisaBasica from '../assets/product/56664056.webp';
import imgCamisaJordam from '../assets/product/4116684846.webp';
import imgKitCamisaBasicaB from '../assets/product/80502107.jpeg';
import imgCamisaEstampada from '../assets/product/2533730399.jpg';
import imgKitCamisaPoliester from '../assets/product/3374278226.webp';
import imgCamisaST from '../assets/product/2418950425.webp';



export function getImg(id: string) {
    const productsImgMapping: any = {
        "56664056": imgKitCamisaBasica,
        "4116684846": imgCamisaJordam,
        "80502107": imgKitCamisaBasicaB,
        "2533730399": imgCamisaEstampada,
        "3374278226": imgKitCamisaPoliester,
        "2418950425": imgCamisaST
    }
    return productsImgMapping[id]
}
