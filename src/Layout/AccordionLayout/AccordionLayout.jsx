import React from "react";
import "./AccordionLayout.scss";
import Collapsible from "react-collapsible";
import DoubleSort from "../../assests/icons/doublesort.svg";

function AccordionLayout(props) {
  const {
    headerTitle,
    header,
    data,
    titleContent,
    svgMobile,
    svgStar,
    isCollapsible,
    children,
  } = props;
  if (headerTitle) {
    return (
      <div className="accordion header">
        <div className="accordion_list">
          {svgMobile}
          {titleContent.map((item, i) => {
            return (
              <span className={item.class} key={i}>
                {item.data}
                {item.doubleSort ? <img src={DoubleSort} alt="" /> : ""}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
  if (!headerTitle)
    return (
      <div className="accordion">
        {isCollapsible === true ? (
          <Collapsible
            openedClassName="accordion-opened"
            trigger={
              <span className="accordion_list_wrapper">
                <div className="accordion_list list1">
                  {header.map((item, i) => {
                    return <span key={i}>{item.data}</span>;
                  })}
                </div>
                <div className="accordion_list list2">
                  {data.map((item, i) => {
                    if (item.class) {
                      return (
                        <span className={item.class} key={i}>
                          {item.data}
                        </span>
                      );
                    } else {
                      return <span key={i}>{item.data}</span>;
                    }
                  })}
                  <span className="arrow">
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
            }
          >
            {children}
          </Collapsible>
        ) : (
          <div className="Collapsible" openedClassName="accordion-opened">
            <div className="accordion_list list1">
              {header.map((item, i) => {
                return <span key={i}>{item.data}</span>;
              })}
            </div>
            <div className="accordion_list list2">
              {data.map((item, i) => {
                if (item.class !== "first_cell") {
                  return (
                    <span className={item.class} key={i}>
                      {item.data}
                    </span>
                  );
                }
                if (item.class === "first_cell") {
                  return (
                    <span className={"first_cell"} key={i}>
                      <div
                        className="svgMobile"
                        style={
                          svgMobile === undefined
                            ? { display: "none" }
                            : { display: "block" }
                        }
                      >
                        {svgMobile}
                      </div>
                      <div
                        className="svgStar"
                        style={
                          svgStar === undefined
                            ? { display: "none" }
                            : { display: "block" }
                        }
                      >
                        {svgStar}
                      </div>
                      <a href="/productdetails"> {item.data}</a>
                    </span>
                  );
                } else {
                  return <span key={i}>{item.data}</span>;
                }
              })}
            </div>
          </div>
        )}
      </div>
    );
}
export default AccordionLayout;
