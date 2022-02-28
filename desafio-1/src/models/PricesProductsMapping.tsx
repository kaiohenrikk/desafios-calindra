export function getPrices(id: string) {
    const productsPricesMapping: any = {
        "56664056": '79,99',
        "4116684846": '99,99',
        "80502107": '74,99',
        "2533730399": '29,90',
        "3374278226": '79,90',
        "2418950425": '39,90'
    }
    return productsPricesMapping[id]
}