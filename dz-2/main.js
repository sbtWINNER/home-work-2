let products = [
    { name: "Телефон", price: 1000, category: "Электроника" },
    { name: "Ноутбук", price: 2000, category: "Электроника" },
    { name: "Книга", price: 20, category: "Книги" },
    { name: "Игрушка", price: 15, category: "Детские товары" },
    { name: "Футболка", price: 25, category: "Одежда" }
]



function tovar (product) {
    const el = document.createElement("p")
    el.textContent = `Название: ${product.name}, Цена: ${product.price}, Категория: ${product.category}`
    document.body.appendChild(el)
}

function displeiProducts() {
    tovar(products[0])
    tovar(products[1])
    tovar(products[2])
    tovar(products[3])
    tovar(products[4])

}
function colculatorTovar() {
    const totalsum = products[0].price + products[1].price + products[2].price + products[3].price + products[4].price;
    const totalsunEl = document.createElement("h1");
    totalsunEl.textContent = `Общая сумма всех товаров: ${totalsum}`
    document.body.appendChild(totalsunEl)
}
function filtrTovat(category) {
    let run = false


    if (products[0].category.toLowerCase() === category.toLowerCase()) {
        tovar(products[0])
        run = true
    }
    if (products[1].category.toLowerCase() === category.toLowerCase()) {
        tovar(products[1])
        run = true
    }
    if (products[2].category.toLowerCase() === category.toLowerCase()) {
        tovar(products[2])
        run = true
    }
    if (products[3].category.toLowerCase() === category.toLowerCase()) {
        tovar(products[3])
        run = true
    }
    if (products[4].category.toLowerCase() === category.toLowerCase()) {
        tovar(products[4])
        run = true
    }
    if (!run) {
        const resaltTovar = document.createElement("p")
        resaltTovar.textContent = "Нет товаров в выбранной категории."
    }
}


displeiProducts()
colculatorTovar()




const avtor = prompt ('категория товара')
if (avtor) {
    filtrTovat(avtor)
}