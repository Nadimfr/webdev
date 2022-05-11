import React, { useEffect, useState } from "react";
import "./OrderNav.scss";
import { NavLink } from "react-router-dom";
import * as UsersApi from "../../core/apis/users";

function OrderNav() {
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    UsersApi.getUserDetails().then((res) => {
      setDetails(res);
      console.log("Details", Details);
    });
  }, []);

  return (
    <div className="main">
      <div className="full_name">{Details.full_name}</div>
      <div className="links">
        <NavLink to="/my-orders" className="span">
          My Orders
        </NavLink>
        <NavLink to="/my-sales" className="span">
          My Sales
        </NavLink>
      </div>
    </div>
  );
}
export default OrderNav;
