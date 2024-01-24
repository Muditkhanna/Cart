import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterinContext";

export const Counter=()=>{
    const cntrcxt=useContext(CounterContext);
    function inc(){
        return function(){
            cntrcxt.setcount(cntrcxt.count+1);
        }
    }
    function dec(){
        return function(){
            if(cntrcxt.count>0){cntrcxt.setcount(cntrcxt.count-1);}
        }
    }
    return (
        <div>
            <button onClick={inc()}>Increment</button>
            <button onClick={dec()}>Decrement</button>
        </div>
    )
}
