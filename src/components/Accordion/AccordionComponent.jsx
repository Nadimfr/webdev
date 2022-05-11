import React from "react";
import "./AccordionComponent.scss";
import OrderNav from "../OrderNav/OrderNav";
import AccordionLayout from "../../Layout/AccordionLayout/AccordionLayout";
import AutoCompleteComponent from "../AutoCompleteComponent/AutoCompleteComponent";
import SearchFilter from "../SearchFilter/SearchFilter";

function AccordionComponent() {
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
    { label: "Ready for Pickup" },
    // { label: "Shipping" },
    // { label: "Delivered" },
    // { label: "Picked Up" },
  ];
  return (
    <>
      <div className="my_orders">
        <OrderNav />
        <div className="search_filter">
          {/* <div className="search">
                        <input placeholder="Search by Order Number" />
                        <span className="search-icon">
                            <img src={search} alt="icon" />
                        </span>
                    </div> */}
          <SearchFilter />
          {/* <Autocomplete
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
                    /> */}
          <AutoCompleteComponent />
        </div>

        <AccordionLayout
          headerTitle={true}
          titleContent={[
            {
              data: "Purchase Order Number",
              class: "header-title flex2",
            },
            {
              data: "Date",
              class: "header-title",
            },
            {
              data: "Price",
              class: "header-title",
            },
            {
              data: "Status",
              class: "header-title",
            },
          ]}
        />
        <AccordionLayout
          headerTitle={false}
          header={[
            {
              data: "Purchase Order Number1",
            },
            {
              data: "Date",
            },
            {
              data: "Price",
            },
            {
              data: "Status",
            },
          ]}
          data={[
            {
              data: "82917",
              class: "sale_number",
            },
            {
              data: "12/3/2021",
              class: "date",
            },
            {
              data: "USD $500.00",
              class: "price",
            },
            {
              data: "Ready for Pickup",
              class: "status",
            },
          ]}
          svg={
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
          }
          svgmobile={
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
          }
          content={
            <div className="accordion_list">
              <div className="order_description">
                <img src="./phone.svg" alt="image" />
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
          }
        />
        <AccordionLayout
          header={[
            {
              data: "Purchase Order Number1",
            },
            {
              data: "Date",
            },
            {
              data: "Price",
            },
            {
              data: "Status",
            },
          ]}
          data={[
            {
              data: "82917",
              class: "sale_number",
            },
            {
              data: "12/3/2021",
              class: "date",
            },
            {
              data: "USD $500.00",
              class: "price",
            },
            {
              data: "Delivered",
              class: "status",
            },
          ]}
          svg={
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
          }
          svgmobile={
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
          }
          content={<div className="accordion_list"></div>}
        />

        <AccordionLayout
          header={[
            {
              data: "Purchase Order Number1",
            },
            {
              data: "Date",
            },
            {
              data: "Price",
            },
            {
              data: "Status",
            },
          ]}
          data={[
            {
              data: "82917",
              class: "sale_number",
            },
            {
              data: "12/3/2021",
              class: "date",
            },
            {
              data: "USD $500.00",
              class: "price",
            },
            {
              data: "Delivered",
              class: "status",
            },
          ]}
          svg={
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
          }
          svgmobile={
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
          }
          content={<div className="accordion_list"></div>}
        />
      </div>
    </>
  );
}

export default AccordionComponent;
