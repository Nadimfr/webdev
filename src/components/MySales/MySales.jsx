import React, { useEffect } from "react";
import "./MySales.scss";
import Collapsible from "react-collapsible";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import OrderNav from "../OrderNav/OrderNav";
import * as UsersApi from "../../core/apis/users";
import search from "../../assests/icons/search.svg";
import { Link } from "react-router-dom";

function MySales() {
  const [sales, setSales] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = (status) => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const status = [
    { label: "Approved" },
    // { label: "Pending my Approval" },
    // { label: "Rejected" },
  ];

  useEffect(() => {
    UsersApi.getSalesList().then((res) => {
      setSales(res);
    });
  }, []);

  console.log("Sales", sales);

  return (
    <>
      <div className="my_sales">
        <OrderNav />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div className="search">
            <input placeholder="Search by Sale Number" />
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
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
        </div>
        <div className="accordion header">
          <div className="accordion_list">
            <span className="header-title">Sale Number</span>
            <span className="header-title">Barcode</span>
            <span className="header-title">Date</span>
            <span className="header-title">Price</span>
            <span className="header-title">Delivery Status</span>
            <span className="header-title">Order Status</span>
            <span></span>
          </div>
        </div>
        {/* */}
        {sales.map((e, index) => (
          <div className="accordion">
            <Collapsible
              openedClassName="accordion-opened"
              trigger={
                <>
                  <Link to={`/sale/${e.id}`} key={index}>
                    <span className="accordion_list_wrapper">
                      <div
                        className="accordion_list list1"
                        style={{ flexDirection: "column" }}
                      >
                        <span>Sale Number</span>
                        <span>Barcode</span>
                        <span>Date</span>
                        <span>Price</span>
                        <span>Delivery Status</span>
                        <span>Order Status</span>
                        <span></span>
                      </div>
                      <div className="accordion_list list2">
                        <span className="sale_number">{e.id}</span>
                        <span className="barcode">
                          {e.inspection[0]?.product.product_code}
                        </span>
                        <span className="date">
                          {e.created_at.split("T")[0]}
                        </span>
                        <span className="price">
                          USD ${e.inspection[0]?.inspection_value}
                        </span>
                        <span className="delivery_status">Shipped</span>
                        <span className="order_status">
                          {e.inspection[0]?.is_approved === true
                            ? "Approved"
                            : "Pending"}
                        </span>
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
export default MySales;
