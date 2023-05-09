import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';

import './tc.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const TC = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      // [{ font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  };

  const formats = [
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'align',
    'color',
    'background',
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="title">
          <h1>Terms & Conditions</h1>
        </div>
        <div className="editContainer">
          <ReactQuill
            theme="snow"
            className="editor"
            modules={modules}
            formats={formats}
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="btnContainer">
          <button className="button">Add</button>
        </div>
      </div>
    </div>
  );
};

export default TC;
