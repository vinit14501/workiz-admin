import React from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../Datatablesource';

const Datatable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: () => {
        return (
          <div className="cellAction">
            <button
              type="button"
              className="viewButton"
            >
              View
            </button>
            <button
              type="button"
              className="deleteButton"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        autoPageSize
        rowsPerPageOptions={[10]}
        pageSizeOptions={[10]}
        // checkboxSelection
      />
    </div>
  );
};

export default Datatable;
