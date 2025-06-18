import { useState } from "react";

function Square({ value, onSquareClick }) {
    // const [value, setValue] = useState(null);

    // function handleClick() {
    //     // setValue('X');
    //     alert(value);
    // };

  return (
    <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg" onClick={onSquareClick}>
        {value}
    </button>
  );
}

// The Board component renders a 3x3 grid of squares
export default function Board() {
    //lifting the state up => aikhane board component holo square component er parent component to amra proti ta square component k single bhabe state change na kore tader parent component e state use kore sob gulo square er value niye kaj kora jabe

    const [squares, setSquares] = useState(Array(9).fill(null)); 

    const[xIsNext, setXIsNext] = useState(true); // xIsNext state to check whose turn is it
  

    function handleClick(i) {
      const newSquares = squares.slice(); // বা [...squares] // কপি করা হলো
      // newSquares[i] = "X"; // নতুন অ্যারেতে মান বসানো হলো?

      if (newSquares[i]) {
        return;
      }
      // যদি square এ আগে থেকেই কিছু লেখা থাকে, তাহলে আর কিছু করা হবে না

      if (xIsNext) {
        newSquares[i] = "X"; // X এর পালা
      } else {
        newSquares[i] = "O"; // O এর পালা
      }
      setXIsNext(!xIsNext); // পালা পরিবর্তন করা হলো
      // newSquares[i] = xIsNext ? "X" : "O"; // X এর পালা হলে X বসবে, নাহলে O বসবে

      setSquares(newSquares); // নতুন অ্যারে সেট করা হলো
    };
    return (
      <>
        <div className="flex justify-center">   
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="flex justify-center">   
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="flex justify-center">   
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
      </>
    );
}