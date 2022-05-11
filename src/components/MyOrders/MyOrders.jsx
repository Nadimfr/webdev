import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "./MyOrders.scss";
import Collapsible from "react-collapsible";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import OrderNav from "../OrderNav/OrderNav";
import search from "../../assests/icons/search.svg";
import * as UsersApi from "../../core/apis/users";
import { Link } from "react-router-dom";

function MyOrders() {
  const [inputValue, setInputValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = (status) => {
    setAnchorEl(null);
  };
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const status = [{ label: "Ready for Pickup" }];
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    UsersApi.getAllOrders().then((res) => {
      setOrders(res);
      console.log("All Orders", Orders);
    });
  }, []);

  return (
    <>
      <div className="my_orders">
        <OrderNav />
        <div className="search_filter">
          <div className="search">
            <input placeholder="Search by Order Number" />
            <span className="search-icon">
              <img src={search} alt="icon" />
            </span>
          </div>
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={status}
            defaultValue={value}
            value={value}
            onChange={(_, newValue) => {
              console.log(newValue);
              setValue(newValue?.label);
            }}
            inputValue={inputValue}
            onInputChange={(_, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filter by"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
        </div>
        <div className="accordion header">
          <div className="accordion_list">
            <span className="header-title" style={{ flex: "2" }}>
              Purchase Order Number
            </span>
            <span className="header-title">Date</span>
            <span className="header-title">Price</span>
            <span className="header-title">Status</span>
            <span className="header-title"></span>
          </div>
        </div>
        {Orders.map((order, index) => (
          <div className="accordion">
            <Collapsible
              openedClassName="accordion-opened"
              trigger={
                <>
                  <Link to={`/order/${order.id}`} key={index}>
                    <span className="accordion_list_wrapper">
                      <div
                        className="accordion_list list1"
                        style={{ flexDirection: "column" }}
                      >
                        <span style={{ flex: "2" }}>Purchase Order Number</span>
                        <span>Date</span>
                        <span>Price</span>
                        <span>Status</span>
                        <span></span>
                      </div>
                      <div className="accordion_list list2">
                        <span className="sale_number">
                          {order.transaction_id}
                        </span>
                        <span className="date">{order.order_date}</span>
                        <span className="price">USD {order.cart_amount}</span>
                        <span className="status">Ready for Pickup</span>
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        ></span>
                      </div>
                    </span>
                  </Link>
                </>
              }
            ></Collapsible>
          </div>
        ))}
      </div>
    </>
  );
}
export default MyOrders;
