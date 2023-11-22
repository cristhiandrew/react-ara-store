import Image from "./Image";
import "../../assets/styles/cardItems.css"
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButttonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";

const CardItem = (props) => {
    return(
        <div className="cardItem">
            <Image 
                imagen={props.imagen}
                />
            <Description 
                title= {props.title}
                cantidad = {props.cantidad}
                precio={props.precio}
                />
            <div className="buttons">
                <Link to={ `/item/${props.id}` }>
                <ButtonDetalles txt="Ver detalles" /> 

                </Link>
                <ButttonAddCart />
            </div>
        </div>
    )
}

export default CardItem;