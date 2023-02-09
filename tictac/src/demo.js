import React, { useState } from "react";

function Demos({value,newvalue}){
// const[value,setvalue]=useState(null);
return <button type="button" onClick={newvalue} >{value}</button>
// function handleTrigger() {
// setvalue('x');
// }
} 

export default function Demo(){
    const [xIsNext, setXIsNext] = useState(true);
    const[Demoss,setDemos]=useState(Array(9).fill(null));
    function handleClick(i){
        const x=Demoss.slice();
        if(xIsNext){
            x[i]='x';
        }
        else{
            x[i]='o';
        }
        setDemos(x);
        setXIsNext(!xIsNext);
    }
    return(
        <div>
           
        <Demos value={Demoss[0]} newvalue={()=>handleClick(0)}/>
        <Demos value={Demoss[1]} newvalue={()=>handleClick(1)}/>
        </div>
       
    )
        

    
}
   