import React from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import './adduser.scss';

export default function AddUser() {
  return (
    <button
      type="button"
      className="adduser"
    >
      <PersonAddAltIcon className="icon" />
      AddUser
    </button>
  );
}
