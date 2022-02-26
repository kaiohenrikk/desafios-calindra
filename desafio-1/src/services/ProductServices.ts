import axios from 'axios';

export default class ProductService {
    static async getProducts() {
        try{
            return (await axios.get('https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook')).data.products
        } catch(e){
            console.log("ProductService.getProduct.error: ",e)
        }
    }
}