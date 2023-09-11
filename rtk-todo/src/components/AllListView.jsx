import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, updateTask } from '../features/reducer';
import { AiOutlineReload } from 'react-icons/ai';
import '../App.css';
const AllListView = (props) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTask(props.userId));
  };
  const updateHandler = () => {
    props.setInput();
  };
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="container-fluid" style={{ maxWidth: '500px' }}>
          <span className="text-bg-danger list">{props.text}</span>
        </div>
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
