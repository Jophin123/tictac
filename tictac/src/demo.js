import {React,useState} from "react";
import './demo.css';
function Singlebutton({value,myClick}){
  return  <button type="submit" onClick={myClick} >{value}</button>
}

export default function Demo(){
const[name,setname]=useState("press")
let yellow='#DDA0DD';
const[color,setcolor]=useState(yellow)
function singleClick(){
    let purple='#ffc800';
setcolor(
purple
);
}
    return(
        <div style={{background:color}} >
           <Singlebutton value={name} myClick={()=>singleClick}  />
           <Singlebutton value={name} myClick={()=>singleClick}/>
           <Singlebutton value={name} myClick={()=>singleClick}/>
           <Singlebutton value={name} myClick={()=>singleClick}/>
        </div>
        )
}