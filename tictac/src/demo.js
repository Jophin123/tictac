import React, { useState } from "react";

function Demosc(){
const[value,setvalue]=useState(null);
// function handleClick(){
//     setvalue('x');
// }
return <button type="button" className="mybutton" onClick={handleClick}>{value}</button>
function handleClick(){
    setvalue('X');
}
}

export default function Demo(){
    return(
        <div>
            <h1>hshs</h1>
        <Demosc value={2} />
        <Demosc value={3} />
        <Demosc value={4} />
        <Demosc value={4} />

        </div>
       
    )
        

    
}
   