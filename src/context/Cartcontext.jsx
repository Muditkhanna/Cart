import { useState,useContext } from "react";
import {createContext} from "react";

export const CartContext=createContext(null);
export const useCart=()=>{
    const carcxt=useContext(CartContext)
    return carcxt;
}
 export const CartProvider=(props)=>{
    const[item,setitems]=useState([]);
    return(
        <CartContext.Provider value={{item,setitems}}>
            {props.children}
        </CartContext.Provider>
    )
}
