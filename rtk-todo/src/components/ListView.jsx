import React, { useState } from 'react';
import { addTask, deleteTask, updateTask } from '../features/reducer';
import { useDispatch, useSelector } from 'react-redux';
import AllListView from './AllListView';
import { v4 as uuidv4 } from 'uuid';

const ListView = () => {
  const [task, setTask] = useState({
    text: '',
    id: '',
  });
  const data = useSelector((state) => state.reducer.list);
  const uuid = uuidv4();
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    const inputAsString = task.text.toString();
    if (inputAsString.length > 0 && inputAsString.trim().length > 0) {
      if (task.id) {
        dispatch(updateTask({ text: inputAsString, id: task.id }));
      } else {
        dispatch(addTask({ text: inputAsString, id: uuid }));
      }
      setTask({
        text: '',
        id: '',
      });
    } else {
      alert('Please enter a valid input');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo List</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <form onSubmit={clickHandler} className=" d-flex col-12">
              <input
                type="text"
                value={task.text}
                className="form-control"
                placeholder="Add a new task..."
                onChange={(e) => setTask({ ...task, text: e.target.value })}
              />
              <button className="btn btn-outline-secondary mx-1" type="submit">
                {task.userId ? 'Update' : 'Add'}
              </button>
            </form>
          </div>
          <div>
            <ul className="list-group">
              {Array.isArray(data) && data.length > 0 ? (
                data.map((todo, key) => (
                  <li className="list-group-item" key={key}>
                    <AllListView
                      text={todo?.text}
                      userId={todo?.userId}
                      input={task.text}
                      setInput={() => setTask(todo)}
                    />
                  </li>
                ))
              ) : (
                <li className="list-group-item">No data available</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
