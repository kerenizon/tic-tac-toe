import React, { useEffect, useState } from 'react';
import '../index.css';
import Board from './Board';

function TicTacToe() {

  const [history, setHistory] = useState( [{squares: Array(9).fill(null)}] );
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const [squares, setSquares] = useState(null);
  const [current,setCurrent] = useState(history[stepNumber]);
  const [status, setStatus] = useState(null);
  const [moves, setMoves] = useState(null);
  

  const calculateWinner = (squares) => {
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
      console.log(a, b, c);
      if (current[a] && current[a] === current[b] && current[a] === current[c]) {
        return current[a];
      }
    }
    return null;
  }

  const handleClick = (index) => {
    setHistory(history.slice(0, stepNumber + 1));
    setCurrent(history[history.length - 1]);
    let newSquares;
    if (stepNumber === 0){
      newSquares = current.squares.slice();
    } else {
      newSquares = current.slice();
    }
      
    

    if (calculateWinner(newSquares) || newSquares[index]) {
      return;
    }

    newSquares[index] = xIsNext ? 'X' : 'O';
    setHistory(history.concat([newSquares]));
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    setStepNumber(history.length);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step %2) === 0);
  }

  
  useEffect( () => {
    console.log(history);
    setCurrent(history[stepNumber]);
    const winner = calculateWinner(current.squares);

    setMoves( history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    }));

    if (winner) {
      setStatus('Winner: ' + winner);
    } else {
      setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
    }
  }, [history, stepNumber, xIsNext, current]);

  console.log(current);
  if(current === null){
    return 'loading';
  } else{
    return (
      <div className="gameBoard">
        <h1>Tic Tac Toe</h1>
        <Board 
        squares={current}
        onClick={(i) => handleClick(i)}
        />
      <div>{status}</div>
      <ol>{moves}</ol>
      </div>
    );
  }

  
}

export default TicTacToe;
