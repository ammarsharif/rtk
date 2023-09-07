import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/reducer/reducer';
const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('Login');
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const validateForm = () => {
    const validationErrors = {};

    if (!value.trim()) {
      validationErrors.value = alert('Please Enter A Valid UserName');
    }

    if (!email.trim()) {
      validationErrors.email = alert('Email Is Not Perfectly Defined');
    }

    if (pass.length < 8) {
      validationErrors.password = alert(
        'Password Contains At Least 8 Characters'
      );
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
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
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="loginContainer">
          <h4>Login Page</h4>
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
            <button className="btn btn-primary " onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
