import React from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';

const Categories = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default Categories;
