import { useState } from "react";
import Sum from "./Sum";
 

function Counter1(){
    const[cnt,setCnt]=useState(0);
    return(
        <>
        <Sum />
        <button onClick={()=>setCnt(cnt+1)}>{cnt}</button>
        <pre>This is rendering unnecessary</pre>
        </>
    )
}
export default Counter1;