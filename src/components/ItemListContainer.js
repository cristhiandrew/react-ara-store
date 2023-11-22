import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li>
                <Link to="category/mangas"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/remeras">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/figuras">
                    {props.itemTres}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;