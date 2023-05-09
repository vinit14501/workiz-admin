import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const New = () => {
  const [file, setFile] = useState('');
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Vinit Chaudhary"
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="vinit@gmail.com"
                />
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="9863840578"
                  pattern="[0-9]{10}"
                />
              </div>
              <div className="formInput">
                <label>Address</label>
                <textarea
                  type="text"
                  placeholder="A-44,gurukul road,near mall"
                />
              </div>
              <div className="formInput">
                <label>Zip-Code</label>
                <input
                  type="text"
                  placeholder="380052"
                  pattern="[0-9]{6}"
                />
              </div>
              <div className="formInput">
                <label>User Type</label>
                <select
                  name="Users"
                  id="users"
                >
                  <option value="Customer">Customer</option>
                  <option value="Vendor">Vendor</option>
                  <option value="Customer + Vendor">Customer + Vendor</option>
                </select>
              </div>
              <button>
                <PersonAddAltOutlinedIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
