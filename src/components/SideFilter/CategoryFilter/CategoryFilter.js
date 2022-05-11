import React, { useState } from "react";
import "./CategoryFilter.scss";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const CategoryFilter = (props) => {
  const { title, data, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen ? true : false);
  };
  return (
    <div className="filter-category">
      <div className="filter-category-title">{title}</div>
      <div className="search">
        <span className="search-icon">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.97917 7.91667H8.41958L8.22125 7.72542C8.91542 6.91792 9.33333 5.86958 9.33333 4.72917C9.33333 2.18625 7.27208 0.125 4.72917 0.125C2.18625 0.125 0.125 2.18625 0.125 4.72917C0.125 7.27208 2.18625 9.33333 4.72917 9.33333C5.86958 9.33333 6.91792 8.91542 7.72542 8.22125L7.91667 8.41958V8.97917L11.4583 12.5138L12.5138 11.4583L8.97917 7.91667ZM4.72917 7.91667C2.96542 7.91667 1.54167 6.49292 1.54167 4.72917C1.54167 2.96542 2.96542 1.54167 4.72917 1.54167C6.49292 1.54167 7.91667 2.96542 7.91667 4.72917C7.91667 6.49292 6.49292 7.91667 4.72917 7.91667Z"
              fill="black"
              fillOpacity="0.3"
            />
          </svg>
        </span>
        <input placeholder="Search" />
      </div>
      <div className="checkbox-container">
        {data.length > 2 ? (
          <>
            {data.map((e, index) => (
              <div className={index + 1 > 2 && !isOpen && "none"}>
                <FormControlLabel
                  index={index}
                  defaultChecked={true}
                  value={title}
                  onChange={onChange}
                  control={
                    <Checkbox
                      sx={{
                        color: "#B5B5B5",
                        "&.Mui-checked": {
                          color: "#4BA4F0",
                        },
                      }}
                    />
                  }
                  label={e.brand || e.serie || e.category || e.variant}
                  name={e.id}
                />
              </div>
            ))}
            <p className="showMore" onClick={handleOpen}>
              {!isOpen ? "Show More" : "Show Less"}
            </p>
          </>
        ) : (
          data.map((e, index) => (
            <FormControlLabel
              index={index}
              defaultChecked={true}
              value={title}
              onChange={onChange}
              control={
                <Checkbox
                  sx={{
                    color: "#B5B5B5",
                    "&.Mui-checked": {
                      color: "#4BA4F0",
                    },
                  }}
                />
              }
              label={e.brand || e.serie || e.category || e.variant}
              name={e.id}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default CategoryFilter;
