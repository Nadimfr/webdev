import React from "react";
import { Link } from "react-router-dom";
import "../Button/button.scss";

const Button = (props) => {
  const {
    isSelected,
    href,
    style,
    width,
    margin,
    fontSize,
    name,
    fontWeight,
    onClick,
    type,
  } = props;
  return (
    <>
      {type === "Link" || type === "link" ? (
        <Link
          className={isSelected === true ? "button selected" : "button default"}
          to={href}
          style={{
            ...style,
            width: width,
            margin: margin,
            fontSize: fontSize,
            fontWeight: fontWeight,
          }}
          onClick={onClick}
        >
          {name === "Add to Cart" || name === "add to cart" ? (
            <svg
              className={name === "Add to Cart" ? "svg" : "none"}
              width="20"
              height="20"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9577 14.6326C20.9366 14.6326 21.7981 14.0975 22.2419 13.2882L26.9147 4.81717C27.3976 3.9557 26.7711 2.8854 25.7791 2.8854H6.46141L5.23447 0.274902H0.966309V2.8854H3.57681L8.2757 12.7922L6.51362 15.977C5.56078 17.7261 6.81382 19.8536 8.7978 19.8536H24.4608V17.2431H8.7978L10.2336 14.6326H19.9577ZM7.70139 5.4959H23.5602L19.9577 12.0221H10.7948L7.70139 5.4959ZM8.7978 21.1589C7.36203 21.1589 6.20036 22.3336 6.20036 23.7694C6.20036 25.2052 7.36203 26.3799 8.7978 26.3799C10.2336 26.3799 11.4083 25.2052 11.4083 23.7694C11.4083 22.3336 10.2336 21.1589 8.7978 21.1589ZM21.8503 21.1589C20.4145 21.1589 19.2528 22.3336 19.2528 23.7694C19.2528 25.2052 20.4145 26.3799 21.8503 26.3799C23.2861 26.3799 24.4608 25.2052 24.4608 23.7694C24.4608 22.3336 23.2861 21.1589 21.8503 21.1589Z"
                fill="white"
              />
            </svg>
          ) : null}
          <p>{name}</p>
        </Link>
      ) : (
        <a
          className={isSelected === true ? "button selected" : "button default"}
          href={href}
          style={{
            ...style,
            width: width,
            margin: margin,
            fontSize: fontSize,
            fontWeight: fontWeight,
          }}
          onClick={onClick}
        >
          {name === "Add to Cart" || name === "add to cart" ? (
            <svg
              className={name === "Add to Cart" ? "svg" : "none"}
              width="20"
              height="20"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9577 14.6326C20.9366 14.6326 21.7981 14.0975 22.2419 13.2882L26.9147 4.81717C27.3976 3.9557 26.7711 2.8854 25.7791 2.8854H6.46141L5.23447 0.274902H0.966309V2.8854H3.57681L8.2757 12.7922L6.51362 15.977C5.56078 17.7261 6.81382 19.8536 8.7978 19.8536H24.4608V17.2431H8.7978L10.2336 14.6326H19.9577ZM7.70139 5.4959H23.5602L19.9577 12.0221H10.7948L7.70139 5.4959ZM8.7978 21.1589C7.36203 21.1589 6.20036 22.3336 6.20036 23.7694C6.20036 25.2052 7.36203 26.3799 8.7978 26.3799C10.2336 26.3799 11.4083 25.2052 11.4083 23.7694C11.4083 22.3336 10.2336 21.1589 8.7978 21.1589ZM21.8503 21.1589C20.4145 21.1589 19.2528 22.3336 19.2528 23.7694C19.2528 25.2052 20.4145 26.3799 21.8503 26.3799C23.2861 26.3799 24.4608 25.2052 24.4608 23.7694C24.4608 22.3336 23.2861 21.1589 21.8503 21.1589Z"
                fill="white"
              />
            </svg>
          ) : null}
          <p>{name}</p>
        </a>
      )}
    </>
  );
};
Button.defaultProps = {
  isSelected: false,
  type: "a",
};
export default Button;
