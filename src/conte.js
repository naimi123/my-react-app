import { useState } from "react";
export default  function Cont(){
 const   [index,setindex]=useState(0)
    function addnmr(){
        setindex(index+1)
        setindex((c)=>{
            return c+1
        })
    }
    
    return <div> <h1> conteur:{index} </h1>
    <button onClick={addnmr}>+</button>
    </div> 
}