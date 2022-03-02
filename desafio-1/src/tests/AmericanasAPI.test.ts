import ProductService from '../services/ProductServices';

  describe("Products Test", () => {

    const productFake = {
        _meta: { score: 345.77496, visitsClickCount: '779' },
        id: '56664056',
        name: 'Kit Com 5 Camisetas Básicas Esportivas Masculina Preta, Branca E Cinza',
        type: 'organic'
      }

    it("Get Products", async () => {
        const res = await ProductService.getProducts()
        const product = res[0]

        expect(res).not.toBeInstanceOf(Error)

        expect(product.id).toBe(productFake.id)
        expect(product.name).toBe(productFake.name)
        expect(product.type).toBe(productFake.type)
        expect(product._meta.score).toBe(productFake._meta.score)
        expect(product._meta.visitsClickCount).toBe(productFake._meta.visitsClickCount)
    })

})