import React from "react";
import { createContext } from "react";
import { CartContext } from "../context/Cartcontext";
import { useContext } from "react";
const Item=(props)=>{
    const cartcxt=useContext(CartContext);
    console.log(cartcxt)
    return(
        <div className="item-card">
          <h4>{props.name}</h4>
          <p>Price : {props.price}</p>
          <button className = "cart-btn"onClick={()=>
        cartcxt.setitems([...cartcxt.item,{name:props.name,price:props.price}])}>Add to cart</button>
        </div>
    )
}
export default Item;