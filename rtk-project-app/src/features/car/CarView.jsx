import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, stocked } from './car';
const CarView = () => {
  const numberOfCars = useSelector((state) => state.gari.numberOfCars);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  return (
    <div>
      <h2>Number Of Car {numberOfCars}</h2>
      <input
        type="number"
        value={value}
        placeholder="Enter Stocked"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(ordered())}>Order Car</button>
      <button onClick={() => dispatch(stocked(value))}>Stock Car</button>
    </div>
  );
};

export default CarView;
