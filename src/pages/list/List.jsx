import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import AddUser from '../../components/adduser/AddUser';
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Link
          to="/users/new"
          className="addUser"
        >
          <AddUser />
        </Link>
        <Datatable />
      </div>
    </div>
  );
};

export default List;
