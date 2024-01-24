import { useState } from "react";

import React from "react";
import {CartContext, useCart} from "../context/Cartcontext";

 const Cart=(props)=>{
    const cartcxt=useCart()
    const total=cartcxt.item.reduce((total,curr)=>{
        return total+curr.price;
    },0)
    return(
        <div className="cart">
            <h1>Cart</h1>
            {
                cartcxt && cartcxt.item.map((item)=>(
                <>
                <li>
                    {item.name} -${item.price}
                </li>
                </>
               )
                )
            }
            <h4>Total bill :$ {total}</h4>
        </div>
    )
}
export default Cart;