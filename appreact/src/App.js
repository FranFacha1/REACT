import React, {useState} from "react"
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Counter from "./componentes/Counter/Counter";
import Effect from "./componentes/Effect/Effect";
import iphone from "./imagenes/img/iphone12.png"
import ItemList from "./componentes/itemList/itemList";
function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = () => {
    console.log("se hizo click en agregar carrito");
  }

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <Counter onAdd = {handleOnAdd}/>
      {/* <button onClick={() => setShow(!show)}>show/hide</button>
      { show ? <Effect /> : null } */}
      
    </div>
  );
}

export default App;
