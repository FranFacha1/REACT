import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../itemList/itemList";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(Response => {
            console.log(Response)
            setProductos(Response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    // console.log([productos])

    // const productosMapped = productos.map(prod => <li key={prod.id}>{prod.name}</li>)
    // console.log(productosMapped)

    if (loading) {
        return <h1>Laoding...</h1>
    }

    return (
        <div>
          <h1>Listado de productos</h1>
          {/* {productosMapped} */}
          {/* Otra forma de hacerlo al map */}
          {/* {productos.map(prod => <li>{prod.name}</li>)}   */}

          <ItemList productos = {productos}/>

        </div>
    )
}

export default ItemListContainer;