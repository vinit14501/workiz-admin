import React, { useEffect, useState } from 'react';
import './login.scss';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import Logo from '../../assets/logo.svg';
import { loginRoute } from '../../utils/APIRoutes';

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: '', password: '' });

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate('/');
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { name, password } = values;

    if (name === '') {
      toast.error('Username and Password is required.', toastOptions);
      return false;
    } else if (password === '') {
      toast.error('Username and Password is required.', toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const { name, password } = values;
      const { data } = await axios.post(loginRoute, {
        name,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate('/');
      }
    }
  };

  return (
    <>
      <div className="formContainer">
        <form
          action=""
          onSubmit={(event) => handleSubmit(event)}
          className="form"
        >
          <div className="brand">
            <img
              src={Logo}
              alt="logo"
              className="img"
            />
          </div>
          <input
            type="text"
            placeholder="admin"
            name="name"
            onChange={(e) => handleChange(e)}
            min="3"
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
            className="input"
          />
          <button
            type="submit"
            className="btn"
          >
            Log In
          </button>
          {/* <SocialLoginButtons /> */}
          {/* <span>
            <Link to="/forgot">Forgot password ?</Link>
          </span> */}
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
