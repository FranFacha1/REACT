import React from "react"
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer props="Bienvenidos"/>
    </div>
  );
}

export default App;
