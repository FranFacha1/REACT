import { useState } from "react";
import "./Counter.css"
const Counter = ({onAdd}) => {
    const [count, setCount] = useState(0)
    // const [title, setTitle] = useState("Primer Titulo")  
    const restar = () => {
        if ( count > 0 ) {
            setCount(count - 1)
        }
    }

    const sumar = () => {
       setCount(count + 1)
    }

    return (
        <div>
            {/* <h1>{title}</h1> */}
            <h2>{count}</h2>
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
            {/* <button onClick={() => setTitle ("Cambie titulo")}>Cambiar titulo</button> */}
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
        
    )

}

export default Counter;