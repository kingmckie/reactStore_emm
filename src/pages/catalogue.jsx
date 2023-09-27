import Product from "../components/product";
import DataService from "../services/dataService";
import"./catalogue.css";
import { useEffect, useState } from "react";

function Catalogue(props) {

    const [products, setProducts]= useState([]);
    const [categories, setCategories]=useState([]);
    const [productToDisplay, setProdsDisplay]= useState([]);

    useEffect(function(){
        console.log("component loaded");
        loadCatalogue();
        
    },[]);

    function filter(category) {
        console.log("filter clicked")
        console.log(category)
        let list =[];
        for (let i=0; i<products.length; i++) {
            if(products[i].category === category){
                list.push(products[i])
            }
        }
        console.log(list)
        setProdsDisplay(list);
    
    }

    function loadCatalogue(){
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
        let tmpCategories = ["chicks on bikes", "grocery", "guns and ammo"];
        setCategories(tmpCategories);
        setProdsDisplay(prods);
    }

    function clearFilter() {
        console.log("clear")
        setProdsDisplay(products);
        
    }


    
    return(
        <div className="catalogue">
            <h1> Check out our {products.length} new Products</h1>
            <br/>
            <button onClick={clearFilter} className="btn btn-dark btn-filter">ALL</button>
            {categories.map(c =>(
             <button key={c} onClick={()=>filter(c)} className="btn btn-sm btn-primary btn-filter">{c}</button>))}
            <br/>
            <div>
             {productToDisplay.map(p=> <Product key={p._id} data={p}/>)}   
            </div>
            
         
        </div>
    );
}

export default Catalogue;
