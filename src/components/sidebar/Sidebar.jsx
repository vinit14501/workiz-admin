import './sidebar.scss';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
// import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <div className="top">
          <span className="logo">
            {/* <img
            src={Logo}
            alt="logo"
          /> */}
            ADMIN
          </span>
        </div>
      </Link>
      <hr />
      <div className="center">
        <ul>
          {/* <p className="title">MAIN</p> */}
          <Link to="/">
            <li>
              <DashboardOutlinedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          {/* <p className="title">USERS</p> */}
          <hr />
          <Link to="/users">
            <li>
              <SupervisedUserCircleOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/users">
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/users">
            <li>
              <StoreOutlinedIcon className="icon" />
              <span>Vendors</span>
            </li>
          </Link>
          <Link to="/users">
            <li>
              <GroupOutlinedIcon className="icon" />
              <span>Customers + Vendors</span>
            </li>
          </Link>
          <hr />
          {/* <p className="title">CATEGORIES</p> */}
          {/* <Link to="/categories"> */}
          <li>
            <CategoryOutlinedIcon className="icon" />
            <span>Categories</span>
          </li>
          {/* </Link> */}
          <hr />
          {/* <p className="title">HELP</p> */}
          {/* <li>
            <HelpOutlineOutlinedIcon className="icon" />
            <span>Help</span>
          </li> */}
          <li>
            <QuizOutlinedIcon className="icon" />
            <span>FAQ's</span>
          </li>
          <Link to="/contact">
            <li>
              <ContactsOutlinedIcon className="icon" />
              <span>Contact</span>
            </li>
          </Link>
          <Link to="/terms-condition">
            <li>
              <GavelOutlinedIcon className="icon" />
              <span>Terms & Condition</span>
            </li>
          </Link>
          <hr />
          <li>
            <LogoutIcon className="icon logout" />
            <span className="logout">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
