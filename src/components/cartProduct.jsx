import "./cartProduct.css";

function CartProduct(props) {
        function getTotal() {
        let total  = props.data.price * props.data.quantity;
        return total.toFixed(2);
    }
        return (
        <div className='cart-product'>
            <img src={'/images' + props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>
            <p>{props.data.category}</p>

            <label>{props.data.price}</label>
            <label>{props.data.quantity}</label>
            <label>{getTotal()}</label>
        </div>
    );
}
export default CartProduct;