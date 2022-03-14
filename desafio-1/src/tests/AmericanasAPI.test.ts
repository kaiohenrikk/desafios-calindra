import ProductService from '../services/ProductServices';

  describe("Products Test", () => {

    const fakeProduct = {
        _meta: { score: 345.77496, visitsClickCount: '779' },
        id: '56664056',
        name: 'Kit Com 5 Camisetas Básicas Esportivas Masculina Preta, Branca E Cinza',
        type: 'organic'
      }

    it("Get Products", async () => {
        let search: any;
        const res = await ProductService.getProducts(search ? search : "camiseta")
        const product = res[0]

        expect(res).not.toBeInstanceOf(Error)

        expect(product.id).toBe(fakeProduct.id)
        expect(product.name).toBe(fakeProduct.name)
        expect(product.type).toBe(fakeProduct.type)
        expect(product._meta.score).toBe(fakeProduct._meta.score)
        expect(product._meta.visitsClickCount).toBe(fakeProduct._meta.visitsClickCount)
    })

})