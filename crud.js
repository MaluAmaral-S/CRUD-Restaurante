const products = [
    {id: 0, name: 'Marguerita', price: 25, category: 'food'},
    {id: 1, name: "Calabresa", price: 45, category: 'food'},
    {id: 2, name: "Coca-Cola", price: 5, category: 'drink'},
    {id: 3, name: "Quatro Queijos", price: 36, category: 'food'},
    {id: 4, name: "Camarão", price: 55, category: 'food'},
    {id: 5, name: "Chocolate com morango", price: 55, category: 'food'},
]

function cardapio(produtos){
    produtos.forEach(produto => { // percorre os elementos do array sem alterá-los
        console.log(`[${produto.id}] ${produto.name} - R$ ${produto.price} (${produto.category}) >`)
  })
}

function addProduct(id, name, price, category) {
    products.push({ id: id, name: name, price: price, category: category})
}

function removeProduct(position){
    const indice = products.findIndex(products => products.id === position)
    if (indice !== -1){
        products.splice(indice, 1)
    }
}

function updateProduct(position, name, price, category){
    const findIdUpdate = products.find(products => products.id === position)
        findIdUpdate.name = name
        findIdUpdate.price = price
        findIdUpdate.category = category
}

