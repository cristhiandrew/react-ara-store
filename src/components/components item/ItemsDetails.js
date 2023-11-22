import Image from "./Image";
import Description from "./Description";
import "../../assets/styles/ItemsDetails.css";
import AddCantCart from "./AddCantCart";
import ButtonDetalles from "./ButtonDetalles";
import fetchSimulation from "../utils/fetchSimulation";
import productos from "../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemsDetails = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        fetchSimulation(productos.filter( flt => flt.id == idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])

    return(
        <div className="detailsItem">
            {
                datos.map( items => (
                   <>
                    <div className="containerLeft">
                        <Image 
                            imagen={datos[0].imagen}
                        />
                    </div>  

                    <div className="containerRigth">
                            <Description 
                                title= {datos[0].title}
                                parrafo= {datos[0].description}
                                cantidad = {datos[0].stock}
                                precio={datos[0].price}
                            />
                        <div className="buttons">
                                <AddCantCart 
                                    cant={5}
                                />

                                <ButtonDetalles 
                                    txt="Agregar al carrito"
                                />
                        </div>
                    </div>
                   </>
                ))
            }
        </div>
    )
}

export default ItemsDetails;