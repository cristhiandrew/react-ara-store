import Brand from "./Brand.js";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget.js"; 


const NavBar = () => {
   return (
    <header>
        <div className="containerBrand">
            <Brand />
             


        </div>
        
        <nav className="containerItemList">
                    <ItemListContainer 
                        itemUno = "Mangas"
                        itemDos = "Remeras"
                        itemTres = "Figuras"
                    />
                </nav>

        <div className="containerCart">
            <CartWidget />
           
           

        </div>
    </header>
   )
}

export default NavBar;