import"./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";
import DataService from "../services/dataService";

function Catalogue(props){

    return(
        <div className="product">
            <div className="product-image-container">
                <img src={"/images/"+props.data.image}/>
            </div>
            <h5> {props.data.title}</h5>
            <label>{props.data.price}</label>
            <label>Total</label>

            <div className='prices'>
                <label>{props.data.price}</label>
                <label>{props.data.price}</label>
            </div>

            <QuantityPicker/>

            <button className="btn btn-sm btn-success">Add</button>
        </div>
    )
}

export default Catalogue;
