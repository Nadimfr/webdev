import React, { useState } from "react";
import "./SideFilter.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
<<<<<<< HEAD
function valuetext(value) {
  return `${value}°C`;
}
// const label = { inputProps: { "aria-label": "Checkbox demo" } };
//hello
=======

>>>>>>> 19b6eb6fa3750828e892d08428f726c94f286667
const SideFilter = (props) => {
  const marks = [
    { value: 0, label: "min" },
    { value: 2500, label: "max" },
  ];
  const [value, setValue] = useState([0, 2500]);
  const handleChange = (event, newValue) => {
    console.log(newValue[0]);
    console.log(newValue[1]);
    setValue(newValue);
  };
  const handleChangeInput = (e) => {
    if (e.target.name === "min") {
      let oldValue = [...value];
      oldValue[0] = +e.target.value;
      setValue(oldValue);
    }
    if (e.target.name === "max") {
      let oldValue = [...value];
      oldValue[1] = +e.target.value;
      setValue(oldValue);
    }
  };

  return (
    <div className="product-filter-container">
      <div className="filter-category">
        <div className="filter-category-title">Price</div>
        <Box>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            onMouseUp={() => {
              console.log("mouse left");
            }}
            min={0}
            max={2500}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <div className="min-max-filter">
            <div className="filter-value">
              <div>Min($)</div>
              <input
                name="min"
                onChange={handleChangeInput}
                value={value[0]}
                type="number"
              />
            </div>
            <div className="filter-value">
              <div>Max</div>
              <input
                name="max"
                onChange={handleChangeInput}
                value={value[1]}
                type="number"
              />
            </div>
          </div>
        </Box>
      </div>
      {props.data.map((e) => (
        <CategoryFilter title={e.title} data={e.data} />
      ))}
    </div>
  );
};
export default SideFilter;
