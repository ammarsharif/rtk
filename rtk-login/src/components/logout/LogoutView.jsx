import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/reducer/reducer';
const LogoutView = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="text-center">
            <h4>{user.name}</h4>
            <button className="btn btn-danger" onClick={logoutHandler}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutView;
