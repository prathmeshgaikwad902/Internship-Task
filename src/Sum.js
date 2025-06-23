import React from "react";
import { useMemo } from "react";

function Sum(){
    const res=()=>{
         let sum1=0;
         for(let i=1;i<100;i++){
            sum1=sum1+i;
         }
         return sum1;
    }
    const total=useMemo(()=>res());
    console.log(total);  
    return(
        <p>sum of  n numbbers {total}</p>
    )
}

export default Sum;