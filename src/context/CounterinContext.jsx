import { createContext ,useState} from "react";

export const CounterContext=createContext(null);

export const CounterProvider= (props)=>{

    const [count,setcount]=useState(5); 
    return(
    <CounterContext.Provider value={{count,setcount,name:'Mudit'}}>
        {props.children} 
    </CounterContext.Provider>
    )
}