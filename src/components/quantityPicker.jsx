import "./quantityPicker.css"
import { useState } from "react";


function QuantityPicker(){
    let [quantity,setQuantity] = useState(1);

function decrease(){
    console.log("Decreasing Quantity");
    let val = quantity-1;
    setQuantity(val);
}

function increase(){
    console.log("Increasing Quantity");
    let val = quantity+1;
    setQuantity(val);
}

    return(
        <div className="qt-Picker">
        {/*please create 2 buttons and a label to render the + and - symbol and use the component in the app.js*/}
        <button disabled={quantity===1}onClick={decrease}>-</button>
        <label>{quantity}</label>
        <button onClick={increase}>+</button>
        </div>
    )
}
export default QuantityPicker;