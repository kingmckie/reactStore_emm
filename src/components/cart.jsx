import './cart.css';
import { useContext } from 'react';
import storeContext from "../store/storeContext";
import cartProduct from '..'

function Cart() {
    
let cart = useContext(storeContext).cart;
    return(

    
    <div className='cart'>
        <h1>Hurry up and Buy!</h1>
        <h3>You have {Cart.length} too Little Products, Buy More</h3>

        <div className='prod-list'>
            {cart.map(prod => CartProduct key={prod._id} data={prod}/>)}
        </div>
    </div>
    );
}

export default Cart;