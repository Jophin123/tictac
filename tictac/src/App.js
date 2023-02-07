
import './App.css';
import { useState } from 'react';
function Singletile(){
  const[value,setvalue]=useState(null);
  function handleClick(){
    setvalue('x')
  }
  return(
<button type='button' className='mybutton' onClick={handleClick}>{value}</button>
  );
}
  export default function tile(){
    return (
      <div className="App">
        <h1>Just play</h1>
      <div className='first'>
        <Singletile value="1" />
        <Singletile value="2" />
        <Singletile value="3" />

        
      </div>
      <div className='first'>
      <Singletile value="4" />
        <Singletile value="5" />
        <Singletile value="6" />
      
      </div>
      <div className='first'>
      <Singletile value="7" />
        <Singletile value="8" />
        <Singletile value="9" />
        
      </div>
      </div>
    );
  }
  

