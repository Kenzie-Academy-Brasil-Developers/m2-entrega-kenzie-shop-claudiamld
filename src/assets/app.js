const vitrine = document.querySelector('#card-vitrine')

export class Produto{
    static async renderProduct(){
        const response = await fetch('https://m2-kenzie-shop.herokuapp.com/products')
        .then((res) => res.json())

        const createProductCard = response.products.map((prod) => {
            const card = document.createElement('div')
            const picture = document.createElement('img')
            const text = document.createElement('p')
            const price = document.createElement('span')
            const pricePromo = document.createElement('span')
            const button = document.createElement('button')

            card.id = 'card'
            picture.src = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${prod.id}/Image.png`
            text.innerText = prod.productName
            price.innerText = `R$ ${prod.price.productPrice}`
            pricePromo.innerText = `R$ ${prod.price.productPromotionPrice}`
            pricePromo.classList.add('preco-promo')
            button.innerText = 'COMPRAR'

            card.appendChild(picture)
            card.appendChild(text)
            card.appendChild(price)
            if(prod.promotionStatus){
                card.appendChild(pricePromo)
                card.classList.add('promocao')
                price.classList.add('preco-normal')
            }
            card.appendChild(button)
            vitrine.appendChild(card)
        })  
    }
}

Produto.renderProduct()