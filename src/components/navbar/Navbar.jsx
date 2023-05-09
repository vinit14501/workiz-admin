import './navbar.scss';
// import SearchIcon from '@mui/icons-material/Search';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useState } from 'react';
// import { useContext } from 'react';
// import { DarkModeContext } from '../../context/DarkModeContext';
import Admin from '../../assets/admin.png';

const Navbar = () => {
  //   const { dispatch } = useContext(DarkModeContext);
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div className={`navbar`}>
      <div className="wrapper">
        {/* <div className="search">
          <input
            type="text"
            placeholder="Search..."
          />
          <SearchIcon />
        </div> */}
        <div className="items">
          {/* <div className="item">
                        <DarkModeOutlinedIcon 
                        className='icon'
                        onClick={()=> dispatch({type: "TOGGLE"})} 
                        />
                    </div> */}
          {/* <div className="item">
            <NotificationsNoneIcon className="icon" />
          </div> */}
          <div className="item">
            <button type="button">
              <img
                src={Admin}
                alt=""
                className="avatar"
                onClick={() => setShowDrop(!showDrop)}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
