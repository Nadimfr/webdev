import React from "react";
import "./MyTransactions.scss";
import Collapsible from "react-collapsible";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import OrderNav from "../OrderNav/OrderNav";
import search from "../../assests/icons/search.svg";

function MyTransactions() {
  const [inputValue, setInputValue] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = (status) => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const status = [{ label: "Sale" }];
  return (
    <>
      <div className="my_transactions">
        <OrderNav />
        <div className="search_filter">
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
          {/* <Row>
                        <div style={{ marginTop: "15px" }}>
                            <div onClick={(e) => setAnchorEl(e.currentTarget)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    enableBackground="new 0 0 24 24"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#4BA4F0"
                                >
                                    <g>
                                        <path d="M0,0h24 M24,24H0" fill="none" />
                                        <path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" />
                                        <path d="M0,0h24v24H0V0z" fill="none" />
                                    </g>
                                </svg>
                            </div>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                            >
                                <FormControl component="fieldset">
                                    <div
                                        component="legend"
                                        style={{ color: "#4BA4F0", marginLeft: "25px" }}
                                    >
                                        Status
                                    </div>
                                    <RadioGroup
                                        aria-label="status"
                                        name="status"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <MenuItem onClick={() => handleClose("Sale")}>
                                            <FormControlLabel
                                                value="Sale"
                                                control={<Radio />}
                                                label="Sale"
                                            />
                                        </MenuItem>
                                        <MenuItem onClick={() => handleClose("Buy")}>
                                            <FormControlLabel
                                                value="Buy"
                                                control={<Radio />}
                                                label="Buy"
                                            />
                                        </MenuItem>
                                    </RadioGroup>
                                </FormControl>
                            </Menu>
                        </div>
                    </Row> */}
        </div>
        <div className="accordion header">
          <div className="accordion_list">
            <span className="header-title" style={{ flex: "2" }}>
              Transaction Number
            </span>
            <span className="header-title">Date</span>
            <span className="header-title">Amount</span>
            <span className="header-title">Status</span>
            <span></span>
          </div>
        </div>
        <div className="accordion">
          <Collapsible
            openedClassName="accordion-opened"
            trigger={
              <>
                <span className="accordion_list_wrapper">
                  <div
                    className="accordion_list list1"
                    style={{ flexDirection: "column" }}
                  >
                    <span style={{ flex: "2" }}>Transaction Number</span>
                    <span>Date</span>
                    <span>Amount</span>
                    <span>Status</span>
                    <span></span>
                  </div>
                  <div className="accordion_list list2">
                    <span className="sale_number">82917</span>
                    <span className="date">12/3/2021</span>
                    <span className="price">USD $500.00</span>
                    <span className="status">Sale</span>
                    <span
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.055 0.425779L13 9.69703L22.945 0.425775L26 3.28003L13 15.4258L-1.83599e-06 3.28003L3.055 0.425779Z"
                          fill="#4BA4F0"
                        />
                      </svg>
                    </span>
                  </div>
                </span>
                <svg
                  className="mobile_svg"
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.055 0.425779L13 9.69703L22.945 0.425775L26 3.28003L13 15.4258L-1.83599e-06 3.28003L3.055 0.425779Z"
                    fill="#4BA4F0"
                  />
                </svg>
              </>
            }
          >
            <div className="accordion_list">
              <div className="transaction_description">
                <img src="./phone.svg" alt="phone" />
                <div className="product_description">
                  <span className="product_name">Galaxy Note 9</span>
                  <span className="product_properties">
                    128 GB - Black - Excellent
                  </span>
                  <span className="product_price">USD $250.00</span>
                  <span className="product_status">Shipping</span>
                </div>
              </div>
            </div>
          </Collapsible>
        </div>

        <div className="accordion">
          <Collapsible
            openedClassName="accordion-opened"
            trigger={
              <>
                <span className="accordion_list_wrapper">
                  <div
                    className="accordion_list list1"
                    style={{ flexDirection: "column" }}
                  >
                    <span style={{ flex: "2" }}>Transaction Number</span>
                    <span>Date</span>
                    <span>Amount</span>
                    <span>Status</span>
                    <span></span>
                  </div>
                  <div className="accordion_list list2">
                    <span className="sale_number">82917</span>
                    <span className="date">12/3/2021</span>
                    <span className="price">USD $500.00</span>
                    <span className="status">Sale</span>
                    <span
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.055 0.425779L13 9.69703L22.945 0.425775L26 3.28003L13 15.4258L-1.83599e-06 3.28003L3.055 0.425779Z"
                          fill="#4BA4F0"
                        />
                      </svg>
                    </span>
                  </div>
                </span>
                <svg
                  className="mobile_svg"
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.055 0.425779L13 9.69703L22.945 0.425775L26 3.28003L13 15.4258L-1.83599e-06 3.28003L3.055 0.425779Z"
                    fill="#4BA4F0"
                  />
                </svg>
              </>
            }
          >
            <div className="accordion_list"></div>
          </Collapsible>
        </div>

        <div className="accordion">
          <Collapsible
            openedClassName="accordion-opened"
            trigger={
              <>
                <span className="accordion_list_wrapper">
                  <div
                    className="accordion_list list1"
                    style={{ flexDirection: "column" }}
                  >
                    <span style={{ flex: "2" }}>Transaction Number</span>
                    <span>Date</span>
                    <span>Amount</span>
                    <span>Status</span>
                    <span></span>
                  </div>
                  <div className="accordion_list list2">
                    <span className="sale_number">82917</span>
                    <span className="date">12/3/2021</span>
                    <span className="price">USD $500.00</span>
                    <span className="status">Buy</span>
                    <span
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.055 0.425779L13 9.69703L22.945 0.425775L26 3.28003L13 15.4258L-1.83599e-06 3.28003L3.055 0.425779Z"
                          fill="#4BA4F0"
                        />
                      </svg>
                    </span>
                  </div>
                </span>
                <svg
                  className="mobile_svg"
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.055 0.425779L13 9.69703L22.945 0.425775L26 3.28003L13 15.4258L-1.83599e-06 3.28003L3.055 0.425779Z"
                    fill="#4BA4F0"
                  />
                </svg>
              </>
            }
          >
            <div className="accordion_list"></div>
          </Collapsible>
        </div>

        <div className="accordion">
          <Collapsible
            openedClassName="accordion-opened"
            trigger={
              <>
                <span className="accordion_list_wrapper">
                  <div
                    className="accordion_list list1"
                    style={{ flexDirection: "column" }}
                  >
                    <span style={{ flex: "2" }}>Transaction Number</span>
                    <span>Date</span>
                    <span>Amount</span>
                    <span>Status</span>
                    <span></span>
                  </div>
                  <div className="accordion_list list2">
                    <span className="sale_number">82917</span>
                    <span className="date">12/3/2021</span>
                    <span className="price">USD $500.00</span>
                    <span className="status">Buy</span>
                    <span
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.055 0.425779L13 9.69703L22.945 0.425775L26 3.28003L13 15.4258L-1.83599e-06 3.28003L3.055 0.425779Z"
                          fill="#4BA4F0"
                        />
                      </svg>
                    </span>
                  </div>
                </span>
                <svg
                  className="mobile_svg"
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.055 0.425779L13 9.69703L22.945 0.425775L26 3.28003L13 15.4258L-1.83599e-06 3.28003L3.055 0.425779Z"
                    fill="#4BA4F0"
                  />
                </svg>
              </>
            }
          >
            <div className="accordion_list"></div>
          </Collapsible>
        </div>
      </div>
    </>
  );
}
export default MyTransactions;
