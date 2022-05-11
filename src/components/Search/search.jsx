import React from "react";
import search from "../../assests/icons/search.svg";
import "./search.scss";
const Search = (props) => {
  const { placeholder, onChange, submit } = props;

  return (
    <div className="searchComponent">
      <input placeholder={placeholder} type="text" onChange={onChange} />
      <img src={search} alt="icon" className="searchIcon" onClick={submit} />
    </div>
  );
};
Search.defaultProps = {
  placeholder: "Search here...",
};
export default Search;
