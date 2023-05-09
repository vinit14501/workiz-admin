import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './single.scss';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&usqp=CAU"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Rock</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValues">rock@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValues">1092810238</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValues">hasdlhasdalsjdasdlasdajda</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Postal Zip:</span>
                  <span className="itemValues">23929</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
          <Chart
            aspect={3 / 1}
            title="Per Person"
          />
        </div>
        <div className="bottom">
          <h1 className="title">Latest Users</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
