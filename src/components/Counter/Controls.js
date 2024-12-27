import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => (
  <div>
    <button type="button" onClick={onIncrement}>
      Збільшити
    </button>

    <button type="button" onClick={onDecrement}>
      Зменьшити
    </button>
  </div>
);

export default Controls;
