import"./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    useEffect(function (){
        console.log('component loaded');
    }, []);

function onQuantityChange(value) {
    console.log('quantity has changed', value);
    setQuantity(value);
}
    
function getTotal() {
    const total = quantity * props.data.price;
    return total.toFixed(2);
}

function handleAdd() {
    console.log("a message")
}

    return(
        <div className="product">
            <div className="product-image-container">
                <img src={"/images/"+props.data.image}/>
            </div>
            <h5> {props.data.title}</h5>
            <label>{props.data.price}</label>
            <label>Total</label>

            <div className='prices'>
                <label className="total">${getTotal()}</label>
                <label className="price">${props.data.price.toFixed(2)}</label>
            </div>

            <QuantityPicker onChange={onQuantityChange}/>

            <button className="btn btn-sm btn-success">Add</button>
            <button onClick={handleAdd} className="btn btn-sm btn-success">Add</button>       
         </div>
    );
}
export default Product;
