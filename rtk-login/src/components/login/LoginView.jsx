import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/reducer/reducer';
const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('Login');
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: value,
        password: pass,
        email: email,
        isLoggedIn: true,
      })
    );
    setUserName('');
    setValue('');
    setEmail('');
    setPass('');
  };
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="loginContainer">
          <form>
            <div className="mb-3 col-4">
              <input
                value={value}
                className="form-control"
                placeholder="Username"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="mb-3 col-4">
              <input
                type="email"
                value={email}
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 col-4">
              <input
                type="password"
                value={pass}
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <button className="btn btn-primary " onClick={submitHandler}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
