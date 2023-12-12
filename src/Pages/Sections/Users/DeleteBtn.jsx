import React from "react";
import "./users-style.css"
import UserContext from "../../../Context/usersContext";

const DeleteBtn = () => {

  const {usersData , setUsersData} = React.useContext(UserContext)
  const deleteHandler = () => {
    setUsersData({
      alertStatus : !usersData.alertStatus
    });
  };

  return (
    <div className="card">
      <div className="card-content">
        <p className="card-heading">Delete User?</p>
        <p className="card-description">
          Lorem ipsum dolor sit amet, consectetur adi
        </p>
      </div>
      <div className="card-button-wrapper">
        <button className="card-button secondary" onClick={deleteHandler}>Cancel</button>
        <button className="card-button primary" onClick={deleteHandler}>Delete</button>
      </div>
      <button className="exit-button" onClick={deleteHandler}>
        <svg height="20px" viewBox="0 0 384 512">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
        </svg>
      </button>
    </div>
  );
};

export default DeleteBtn;
