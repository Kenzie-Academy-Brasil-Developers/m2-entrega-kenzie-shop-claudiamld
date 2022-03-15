export class Api{
    static async get(){
        let response = await fetch('https://m2-kenzie-shop.herokuapp.com/products')
        let data     = await response.json()
        let produtos = data.products
        return produtos
    }
}