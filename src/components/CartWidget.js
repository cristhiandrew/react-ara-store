import cart from "../assets/img/Cart.png"

const CartWidget = () => {
    return(
        <div className="containerLenght">
            <img src={cart} alt="cart"></img>
            <span className="cantCart">
                1

            </span>
        </div>

        

    )
}

export default CartWidget;