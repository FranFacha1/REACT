import "./NavBar.css"
import CardWidget from "../CartWidget/CardWidget"

const NavBar = (props) => {
    const src = "https://bellottisrl.com.ar/wp-content/uploads/2019/05/logo_Bellotti_cont-1.png"
    return (
        <nav>
            <div className= "div1">
            
                <img src={src}/>

            </div>

            
            <div>
                <button>Incio</button>
                <button>Compras</button>
                <button>Productos</button>
            </div>

            
            <CardWidget/>
        </nav>

    )
}

export default NavBar