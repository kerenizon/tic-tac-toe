import React, { useState } from 'react';
import '../index.css';
import Square from './Square';

function Board(props) {


  return (
    <div className="board-rows">
      <div className="board-row">
        <Square value={props.squares[0]} index={0} onClick={props.onClick}/>
        <Square value={props.squares[1]} index={1} onClick={props.onClick}/>
        <Square value={props.squares[2]} index={2} onClick={props.onClick}/>
      </div>
      <div className="board-row">
        <Square value={props.squares[3]} index={3} onClick={props.onClick}/>
        <Square value={props.squares[4]} index={4} onClick={props.onClick}/>
        <Square value={props.squares[5]} index={5} onClick={props.onClick}/>
      </div>
      <div className="board-row">
        <Square value={props.squares[6]} index={6} onClick={props.onClick}/>
        <Square value={props.squares[7]} index={7} onClick={props.onClick}/>
        <Square value={props.squares[8]} index={8} onClick={props.onClick}/>
      </div>   
    </div>
  );
}

export default Board;
