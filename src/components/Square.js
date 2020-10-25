import React from 'react';
import '../index.css';

function Square(props) {
 
  const handleOnClick = (e) => {
    props.onClick(props.index);
  }

  return (
    <div>
      <button className="square" onClick={handleOnClick}>
        {props.value}
        </button>
    </div>
  );
}

export default Square;
