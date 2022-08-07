import React,{useEffect, useState} from "react";
function Functional(props){
    console.log("set state")
    const [s1,setS1]=useState(0)
    const buttonHandler=()=>{
        console.log("hendler")
        let val =s1
        val++;
        setS1(val)
    }
    useEffect(()=>{
        console.log("effect")
    })
    console.log("render()")
    return(
        
        <div>
            {console.log("render2()")}
        <button onClick={buttonHandler}>Push</button>
         {s1}
         </div>
    )
}
export default Functional;