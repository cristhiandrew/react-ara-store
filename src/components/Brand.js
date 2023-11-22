import brand from "../assets/img/brand.png"
import { Link } from "react-router-dom";

const Brand = () => {
    return(
        
            <Link to="/">
                <img src={brand} alt='brand'></img>
                </Link>

    )
}

export default Brand;