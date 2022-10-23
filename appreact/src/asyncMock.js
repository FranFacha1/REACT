const productos = [
    {
        id: "1",
        name: "Iphone 12", 
        price: 1000,
        category: "celular",
        img: "https://cdn.idealo.com/folder/Product/200589/1/200589169/s11_produktbild_gross_15/apple-iphone-12.jpg",
        stock: 25,
        description: "Descripcion de iphone 12"

    },
    {id: "2", name: "samsung s21", price: 800, category: "celular", img:"https://mobilestore.ec/wp-content/uploads/2021/12/Galaxy-S21-FE-Violeta-Mobile-Store-Ecuador.jpg", },
    {id: "3", name: "samsung s20", price: 600, category: "celular", img:"https://elektragt.vtexassets.com/arquivos/ids/178206/CEL-TIGO-GALAXY-S20-FE--1-.jpg?v=637738917606500000",}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}