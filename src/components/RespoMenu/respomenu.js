import React, { useState, useContext } from "react";
import "./respomenu.scss";
import { AppContext } from "../Home/home.jsx";

const Respomenu = () => {
  // const [showData, setShowData] = useState({ Brands: false, Menu: false });
  // // let { openMenu, setOpenMenu } = useContext(AppContext);

  // const toggleMenu = () => {
  //   setOpenMenu(!showData.Menu);
  //   console.log(openMenu);
  //   setShowData({ ...showData, Menu: !showData.Menu });
  // };

  return (
    <div className="respomenu">
      {/* {!showData.Brands ? (
        <div>
          <svg
            onClick={() => toggleMenu()}
            className="menubar"
            width="23"
            height="15"
            viewBox="0 0 23 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.625 14.7959H22.375V12.3792H0.625V14.7959ZM0.625 8.75423H22.375V6.33757H0.625V8.75423ZM0.625 0.295898V2.71257H22.375V0.295898H0.625Z"
              fill="#4BA4F0"
            />
          </svg>
          {showData.Menu ? (
            <ul className="menu">
              <a
                href="/ProductList"
                className="category"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <li>All Products</li>
              </a>

              <a
                href="/ProductList"
                className="category"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
                onClick={() =>
                  setShowData({ ...showData, Brands: !showData.Brands })
                }
              >
                <li>Mobile Devices</li>

                <svg
                  className="next"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 1.68141e-08L8.00009 6L2.00009 12L0.590088 10.59Z"
                    fill="#4BA4F0"
                  />
                </svg>
              </a>

              <a
                className="category"
                href="/ProductList"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
                onClick={() =>
                  setShowData({ ...showData, Brands: !showData.Brands })
                }
              >
                <li>Laptops</li>

                <svg
                  className="next"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 1.68141e-08L8.00009 6L2.00009 12L0.590088 10.59Z"
                    fill="#4BA4F0"
                  />
                </svg>
              </a>

              <a
                href="/ProductList"
                className="category"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
                onClick={() =>
                  setShowData({ ...showData, Brands: !showData.Brands })
                }
              >
                <li>Tablets</li>

                <svg
                  className="next"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 1.68141e-08L8.00009 6L2.00009 12L0.590088 10.59Z"
                    fill="#4BA4F0"
                  />
                </svg>
              </a>

              <a
                href="/ProductList"
                className="category"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
                onClick={() =>
                  setShowData({ ...showData, Brands: !showData.Brands })
                }
              >
                <li>Game Consoles</li>

                <svg
                  className="next"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 1.68141e-08L8.00009 6L2.00009 12L0.590088 10.59Z"
                    fill="#4BA4F0"
                  />
                </svg>
              </a>

              <a
                href="/ProductList"
                className="category"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
                onClick={() =>
                  setShowData({ ...showData, Brands: !showData.Brands })
                }
              >
                <li>Audio</li>

                <svg
                  className="next"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 1.68141e-08L8.00009 6L2.00009 12L0.590088 10.59Z"
                    fill="#4BA4F0"
                  />
                </svg>
              </a>

              <a
                href="/ProductList"
                className="category"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
                onClick={() =>
                  setShowData({ ...showData, Brands: !showData.Brands })
                }
              >
                <li>Wearables</li>

                <svg
                  className="next"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 1.68141e-08L8.00009 6L2.00009 12L0.590088 10.59Z"
                    fill="#4BA4F0"
                  />
                </svg>
              </a>

              <a
                href="/ProductList"
                className="category"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <li>Others</li>
                <svg
                  className="next"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 1.68141e-08L8.00009 6L2.00009 12L0.590088 10.59Z"
                    fill="#4BA4F0"
                  />
                </svg>
              </a>
            </ul>
          ) : null}
        </div>
      ) : (
        <div className="brands">
          <div
            className="back"
            onClick={() =>
              setShowData({ ...showData, Brands: !showData.Brands })
            }
          >
            <svg
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.03491 1.41L3.45491 6L8.03491 10.59L6.62491 12L0.624912 6L6.62491 1.68141e-08L8.03491 1.41Z"
                fill="#E5E5E5"
              />
            </svg>
            <p>Back</p>
          </div>

          <div className="brandnext">
            <p>Apple</p>
            <svg
              className="next"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.590088 11.09L5.17009 6.5L0.590088 1.91L2.00009 0.5L8.00009 6.5L2.00009 12.5L0.590088 11.09Z"
                fill="#E5E5E5"
              />
            </svg>
          </div>

          <div className="brandnext">
            <p>Huawei</p>
            <svg
              className="next"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.590088 11.09L5.17009 6.5L0.590088 1.91L2.00009 0.5L8.00009 6.5L2.00009 12.5L0.590088 11.09Z"
                fill="#E5E5E5"
              />
            </svg>
          </div>

          <div className="brandnext">
            <p>LG</p>
            <svg
              className="next"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.590088 11.09L5.17009 6.5L0.590088 1.91L2.00009 0.5L8.00009 6.5L2.00009 12.5L0.590088 11.09Z"
                fill="#E5E5E5"
              />
            </svg>
          </div>

          <div className="brandnext">
            <p>Nokia</p>
            <svg
              className="next"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.590088 11.09L5.17009 6.5L0.590088 1.91L2.00009 0.5L8.00009 6.5L2.00009 12.5L0.590088 11.09Z"
                fill="#E5E5E5"
              />
            </svg>
          </div>

          <div className="brandnext">
            <p>Samsung</p>
            <svg
              className="next"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.590088 11.09L5.17009 6.5L0.590088 1.91L2.00009 0.5L8.00009 6.5L2.00009 12.5L0.590088 11.09Z"
                fill="#E5E5E5"
              />
            </svg>
          </div>

          <div className="brandnext">
            <p>Google Pixel</p>
            <svg
              className="next"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.590088 11.09L5.17009 6.5L0.590088 1.91L2.00009 0.5L8.00009 6.5L2.00009 12.5L0.590088 11.09Z"
                fill="#E5E5E5"
              />
            </svg>
          </div>

          <div className="brandnext">
            <p>HTC</p>
            <svg
              className="next"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.590088 11.09L5.17009 6.5L0.590088 1.91L2.00009 0.5L8.00009 6.5L2.00009 12.5L0.590088 11.09Z"
                fill="#E5E5E5"
              />
            </svg>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Respomenu;
