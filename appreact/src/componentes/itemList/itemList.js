import Item from "../item/item"

const ItemList = (productos) => {
    //listar

    //map transformando los productos en componentes item

    return (
        <div>
            { productos.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList