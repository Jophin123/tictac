import './App.css';
import { useState } from 'react';
function Singletile({value,onTileclik}){
  return(
    <button type='button' className='mybutton' onClick={onTileclik}>{value}</button>
      );
  // const[value,setvalue]=useState(null);
  // function handleClick(){
  //   setvalue('x')
  }


  export default function App(){
    const[squares,setsquares]=useState(Array(9).fill(null));
   
    const[xIn,setxIn]=useState(true);
    function handleClick(i){
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const newLoc=squares.slice();
      if(xIn){
        newLoc[i]='x';
      }
      else{
        newLoc[i]='o'
      }
      
   
    setsquares(newLoc);
    setxIn(!xIn);

    }
    function resetClick(){
      let set=squares.slice();
      setsquares(
        set=''
        
     )  
     window.location.reload(false); 
    }
    
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIn ? 'X' : 'O');
    }
    return (
    <div className="App">
        <h1>Just play Tictac</h1>
        <div className="status"><h1>{status}</h1></div>
      <div className='first'>
        <Singletile value={squares[0]} onTileclik={()=>handleClick(0)} />
        <Singletile value={squares[1]} onTileclik={()=>handleClick(1)}/>
        <Singletile value={squares[2]} onTileclik={()=>handleClick(2)}/>
      </div>
      <div className='first'>
        <Singletile value={squares[3]} onTileclik={()=>handleClick(3)} />
        <Singletile value={squares[4]} onTileclik={()=>handleClick(4)} />
        <Singletile value={squares[5]} onTileclik={()=>handleClick(5)} />
      </div>
      <div className='first'>
        <Singletile value={squares[6]} onTileclik={()=>handleClick(6)} />
        <Singletile value={squares[7]} onTileclik={()=>handleClick(7)} />
        <Singletile value={squares[8]} onTileclik={()=>handleClick(8)} />
      </div>
      <button type="button" onClick={resetClick}>reset</button>
    </div>
    );
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

