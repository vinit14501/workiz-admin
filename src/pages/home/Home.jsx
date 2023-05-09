// import Featured from '../../components/featured/Featured';
// import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widgets/Widget';
import './home.scss';
import List from '../../components/table/Table';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="customer" />
          <Widget type="vendor" />
          <Widget type="cust&vend" />
        </div>
        <div className="charts">
          {/* <Featured /> */}
          {/* <Chart
            aspect={2 / 1}
            title="Last 6 Months"
          /> */}
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Users</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
