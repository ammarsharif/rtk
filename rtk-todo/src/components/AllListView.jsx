import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/reducer';
import { AiOutlineReload } from 'react-icons/ai';
const AllListView = (props) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTask(props.userId));
  };
  const updateHandler = () => {
    props.setInput();
  };
  return (
    <div className="d-flex align-items-center justify-content-between">
      <span>{props.text}</span>
      <div className="d-flex">
        <button
          className="btn btn-sm btn-outline-danger mt-1"
          onClick={deleteHandler}
        >
          Delete
        </button>
        <button
          className="btn btn-outline-secondary btn-sm mt-1 mx-1"
          onClick={updateHandler}
        >
          <AiOutlineReload />
        </button>
      </div>
    </div>
  );
};

export default AllListView;
