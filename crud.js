import {products} from './products.js'

export function cardapio(produtos){
    produtos.forEach(produto => { // percorre os elementos do array sem alterá-los
        console.log(`[${produto.id}] ${produto.name} - R$ ${produto.price} (${produto.category}) >`)
  })
}

export function addProduct(id, name, price, category) {
    products.push({ id: id, name: name, price: price, category: category})
}

export function removeProduct(position){
    const indice = products.findIndex(products => products.id === position)
    if (indice !== -1){
        products.splice(indice, 1)
    }
}

export function updateProduct(position, name, price, category){
    const findIdUpdate = products.find(products => products.id === position)
        findIdUpdate.name = name
        findIdUpdate.price = price
        findIdUpdate.category = category
}

