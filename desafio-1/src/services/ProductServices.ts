import axios from 'axios';

export default class ProductService {
    static async getProducts(param: any) {
        try {
            return (await axios.get(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${param}&source=nanook`)).data.products
        } catch (e) {
            throw new Error("ProductService.getProduct.error")
        }
    }
}