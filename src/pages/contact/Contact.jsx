import React from 'react';
// import Button from 'react-bootstrap/Button';

// import ContactPageIcon from '@mui/icons-material/ContactPage';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './contact.scss';

const Contact = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="title">
          <h1>Contacts</h1>
        </div>
        <div className="addBtn">
          <button
            type="button"
            className="btn"
          >
            Add
          </button>
        </div>
        <div className="inputWrapper">
          <div>
            <label
              //   className="num"
              htmlFor=""
            >
              Number
            </label>
            <input
              type="tel"
              placeholder="9470393020"
            />
          </div>
          <div>
            <label
              //   className="email"
              htmlFor=""
            >
              E-mail
            </label>
            <input
              type="email"
              placeholder="admin@gmail.com"
            />
          </div>
        </div>
        <div>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
