import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import { Link } from 'react-router-dom';

import './widget.scss';

const Widget = ({ type }) => {
  let data;
  let amount = 100;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isCount: true,
        link: <Link to="/users">All Users</Link>,
        icon: (
          <SupervisedUserCircleOutlinedIcon
            className="icon"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255,0,0,0.2)',
            }}
          />
        ),
      };
      break;
    case 'customer':
      data = {
        title: 'CUSTOMERS',
        isCount: true,
        link: <Link to="/users">Customers</Link>,
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218,165,32,0.2)',
            }}
          />
        ),
      };
      break;
    case 'vendor':
      data = {
        title: 'VENDORS',
        isCount: true,
        link: <Link to="/users">Vendors</Link>,
        icon: (
          <StoreOutlinedIcon
            className="icon"
            style={{
              color: 'green',
              backgroundColor: 'rgba(0,128,0,0.2)',
            }}
          />
        ),
      };
      break;
    case 'cust&vend':
      data = {
        title: 'CUSTOMERS + VENDORS',
        isCount: true,
        link: <Link to="/users">Customers + Vendors</Link>,
        icon: (
          <GroupOutlinedIcon
            className="icon"
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128,0,128,0.2)',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isCount} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
