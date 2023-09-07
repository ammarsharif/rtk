import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, stocked } from './bike';
const BikeView = () => {
  const NumberOfBikes = useSelector((state) => state.bike.numberOfBikes);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  return (
    <div>
      <h2>Number Of Bikes {NumberOfBikes}</h2>
      <input
        type="number"
        value={value}
        placeholder="Enter Stocked"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(ordered())}>Order Bike</button>
      <button onClick={() => dispatch(stocked(value))}>Stock Bike</button>
    </div>
  );
};

export default BikeView;
