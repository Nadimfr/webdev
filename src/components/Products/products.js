import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import "./products.scss";
import note9 from "../../assests/Images/note9.png";
import Tab from "../../assests/Images/Tab.png";
import acer from "../../assests/Images/acer.png";
import xbox from "../../assests/Images/xbox.jpg";
import { Modal, Button } from "react-bootstrap";
import phone from "../../assests/icons/phoneicon.svg";
import { useNavigate } from "react-router";

const Products = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleView = () => {
    navigate("/view_cart", { replace: true });
  };
  let navigate = useNavigate();
  const [params, setParams] = useState({
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      centeredSlides: true,
    },
  });

  return (
    <div className="product-page">
      <></>

      <h2 className="title my-4">Featured Products</h2>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          600: {
            //width: 600,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          1200: {
            //width: 1000,
            slidesPerView: 3,
          },
          1500: {
            //width: 1000,
            slidesPerView: 4,
          },
          1000: {
            //width: 1000,
            slidesPerView: 2,
          },
        }}
        {...params}
        wrapperClass="wrapper"
      >
        <div className="each">
          <div className="top">
            <div className="condition">Open Box</div>
            <div className="circle" style={{ backgroundColor: "#11aee0" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={Tab} alt="tab" />

          <h3 className="device">Galaxy Tab A7</h3>
          <p className="description">128GB - Silver - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart" onClick={handleShow}>
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>
        <div className="each">
          <div className="top">
            <div className="condition">Open Box</div>
            <div className="circle" style={{ backgroundColor: "#FFDD55" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={acer} alt="acer" />

          <h3 className="device">Acer Laptop</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>
        <div className="each">
          <div className="top">
            <div className="condition">Open Box</div>
            <div className="circle" style={{ backgroundColor: "#11AEE0" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={note9} alt="note9" />

          <h3 className="device">Galaxy Note 9</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>
        <div className="each">
          <div className="top">
            <div className="condition">Second Hand</div>
            <div className="circle" style={{ backgroundColor: "#EF8800" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <img className="picture" src={xbox} alt="xbox" />{" "}
          <h3 className="device">Xbox One Console</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>
          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>
        <div className="each">
          <div className="top">
            <div className="condition">Open Box</div>
            <div className="circle" style={{ backgroundColor: "#11AEE0" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={acer} alt="acer" />

          <h3 className="device">Galaxy Note 9</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>
        <div className="each">
          <div className="top">
            <div className="condition">Refurbished</div>
            <div className="circle" style={{ backgroundColor: "#74D301" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={xbox} alt="xbox" />

          <h3 className="device">Galaxy Tab A7</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>
        <div className="each">
          <div className="top">
            <div className="condition">Open Box</div>
            <div className="circle" style={{ backgroundColor: "#FFDD55" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={acer} alt="acer" />

          <h3 className="device">Acer Laptop</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>
        <div className="each">
          <div className="top">
            <div className="condition">Second Hand</div>
            <div className="circle" style={{ backgroundColor: "#EF8800" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={xbox} alt="xbox" />

          <h3 className="device">Xbox One Console</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>
      </Swiper>

      <h2 className="title my-4">Latest Products</h2>
      <Swiper
        breakpoints={{
          600: {
            //width: 600,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          1200: {
            //width: 1000,
            slidesPerView: 3,
          },
          1500: {
            //width: 1000,
            slidesPerView: 4,
          },
          1000: {
            //width: 1000,
            slidesPerView: 2,
          },
        }}
        {...params}
        wrapperClass="wrapper"
      >
        <div className="each">
          <div className="top">
            <div className="condition">Open Box</div>
            <div className="circle" style={{ backgroundColor: "#11AEE0" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={acer} alt="acer" />

          <h3 className="device">Galaxy Note 9</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.9577 14.6326C20.9366 14.6326 21.7981 14.0975 22.2419 13.2882L26.9147 4.81717C27.3976 3.9557 26.7711 2.8854 25.7791 2.8854H6.46141L5.23447 0.274902H0.966309V2.8854H3.57681L8.2757 12.7922L6.51362 15.977C5.56078 17.7261 6.81382 19.8536 8.7978 19.8536H24.4608V17.2431H8.7978L10.2336 14.6326H19.9577ZM7.70139 5.4959H23.5602L19.9577 12.0221H10.7948L7.70139 5.4959ZM8.7978 21.1589C7.36203 21.1589 6.20036 22.3336 6.20036 23.7694C6.20036 25.2052 7.36203 26.3799 8.7978 26.3799C10.2336 26.3799 11.4083 25.2052 11.4083 23.7694C11.4083 22.3336 10.2336 21.1589 8.7978 21.1589ZM21.8503 21.1589C20.4145 21.1589 19.2528 22.3336 19.2528 23.7694C19.2528 25.2052 20.4145 26.3799 21.8503 26.3799C23.2861 26.3799 24.4608 25.2052 24.4608 23.7694C24.4608 22.3336 23.2861 21.1589 21.8503 21.1589Z" />
              </svg>
            </div>
            Add to cart
          </button>
        </div>

        <div className="each">
          <div className="top">
            <div className="condition">Refurbished</div>
            <div className="circle" style={{ backgroundColor: "#74D301" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={xbox} alt="xbox" />

          <h3 className="device">Galaxy Tab A7</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>

        <div className="each">
          <div className="top">
            <div className="condition">Open Box</div>
            <div className="circle" style={{ backgroundColor: "#FFDD55" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={acer} alt="acer" />

          <h3 className="device">Acer Laptop</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>

        <div className="each">
          <div className="top">
            <div className="condition">Second Hand</div>
            <div className="circle" style={{ backgroundColor: "#EF8800" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={xbox} alt="xbox" />

          <h3 className="device">Xbox One Console</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>
        <div className="each">
          <div className="top">
            <div className="condition">Refurbished</div>
            <div className="circle" style={{ backgroundColor: "#74D301" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={Tab} alt="tab" />

          <h3 className="device">Galaxy Tab A7</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>

        <div className="each">
          <div className="top">
            <div className="condition">Open Box</div>
            <div className="circle" style={{ backgroundColor: "#FFDD55" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={acer} alt="acer" />

          <h3 className="device">Acer Laptop</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>
        <div className="each">
          <div className="top">
            <div className="condition">Open Box</div>
            <div className="circle" style={{ backgroundColor: "#11AEE0" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={note9} alt="note9" />

          <h3 className="device">Galaxy Note 9</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>

        <div className="each">
          <div className="top">
            <div className="condition">Second Hand</div>
            <div className="circle" style={{ backgroundColor: "#EF8800" }}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <img className="picture" src={xbox} alt="xbox" />

          <h3 className="device">Xbox One Console</h3>
          <p className="description">128GB - Black - Excellent</p>
          <h3 className="price">$250.00</h3>

          <button className="cart">
            <div className="shop">
              <svg
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
            </div>
            Add to cart
          </button>
        </div>
      </Swiper>

      <h2 className="title my-4">Flash Sale</h2>
      <div className="flashSales">
        <Swiper
          breakpoints={{
            1200: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },

            600: {
              slidesPerView: 2,
            },

            1000: {
              slidesPerView: 2,
            },
          }}
          {...params}
          wrapperClass="wrapper"
        >
          <div className="each">
            <div className="sale">Sale ends in 12:30</div>
            <div className="top">
              <div className="condition">Open Box</div>
              <div className="circle" style={{ backgroundColor: "#11AEE0" }}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <img className="picture" src={acer} alt="acer" />

            <h3 className="device">Galaxy Note 9</h3>
            <p className="description">128GB - Black - Excellent</p>
            <h3 className="price">$250.00</h3>

            <button className="cart">
              <div className="shop">
                <svg
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
              </div>
              Add to cart
            </button>
          </div>

          <div className="each">
            <div className="sale">Sale ends in 12:30</div>
            <div className="top">
              <div className="condition">Refurbished</div>
              <div className="circle" style={{ backgroundColor: "#74D301" }}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <img className="picture" src={xbox} alt="xbox" />

            <h3 className="device">Galaxy Tab A7</h3>
            <p className="description">128GB - Black - Excellent</p>
            <h3 className="price">$250.00</h3>

            <button className="cart">
              <div className="shop">
                <svg
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
              </div>
              Add to cart
            </button>
          </div>

          <div className="each">
            <div className="sale">Sale ends in 12:30</div>
            <div className="top">
              <div className="condition">Open Box</div>
              <div className="circle" style={{ backgroundColor: "#FFDD55" }}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <img className="picture" src={acer} alt="acer" />

            <h3 className="device">Acer Laptop</h3>
            <p className="description">128GB - Black - Excellent</p>
            <h3 className="price">$250.00</h3>

            <button className="cart">
              <div className="shop">
                <svg
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
              </div>
              Add to cart
            </button>
          </div>

          <div className="each">
            <div className="sale">Sale ends in 12:30</div>
            <div className="top">
              <div className="condition">Second Hand</div>
              <div className="circle" style={{ backgroundColor: "#EF8800" }}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <img className="picture" src={xbox} alt="xbox" />

            <h3 className="device">Xbox One Console</h3>
            <p className="description">128GB - Black - Excellent</p>
            <h3 className="price">$250.00</h3>

            <button className="cart">
              <div className="shop">
                <svg
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
              </div>
              Add to cart
            </button>
          </div>

          <div className="each">
            <div className="sale">Sale ends in 12:30</div>
            <div className="top">
              <div className="condition">Open Box</div>
              <div className="circle" style={{ backgroundColor: "#11AEE0" }}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <img className="picture" src={acer} alt="acer" />

            <h3 className="device">Galaxy Note 9</h3>
            <p className="description">128GB - Black - Excellent</p>
            <h3 className="price">$250.00</h3>

            <button className="cart">
              <div className="shop">
                <svg
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
              </div>
              Add to cart
            </button>
          </div>

          <div className="each">
            <div className="sale">Sale ends in 12:30</div>
            <div className="top">
              <div className="condition">Refurbished</div>
              <div className="circle" style={{ backgroundColor: "#74D301" }}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <img className="picture" src={xbox} alt="xbox" />

            <h3 className="device">Galaxy Tab A7</h3>
            <p className="description">128GB - Black - Excellent</p>
            <h3 className="price">$250.00</h3>

            <button className="cart">
              <div className="shop">
                <svg
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
              </div>
              Add to cart
            </button>
          </div>

          <div className="each">
            <div className="sale">Sale ends in 12:30</div>
            <div className="top">
              <div className="condition">Open Box</div>
              <div className="circle" style={{ backgroundColor: "#FFDD55" }}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <img className="picture" src={acer} alt="product" />

            <h3 className="device">Acer Laptop</h3>
            <p className="description">128GB - Black - Excellent</p>
            <h3 className="price">$250.00</h3>

            <button className="cart">
              <div className="shop">
                <svg
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
              </div>
              Add to cart
            </button>
          </div>

          <div className="each">
            <div className="sale">Sale ends in 12:30</div>
            <div className="top">
              <div className="condition">Second Hand</div>
              <div className="circle" style={{ backgroundColor: "#EF8800" }}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <img className="picture" src={xbox} alt="product" />

            <h3 className="device">Xbox One Console</h3>
            <p className="description">128GB - Black - Excellent</p>
            <h3 className="price">$250.00</h3>

            <button className="cart">
              <div className="shop">
                <svg
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
              </div>
              Add to cart
            </button>
          </div>
        </Swiper>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title
            style={{
              textAlign: "center",
              color: "#4BA4F0",
              width: "100%",
              fontWeight: "bold",
            }}
          >
            Product Added to your cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product_card">
            <img className="product" src={phone} alt="product" />
            <span className="card_content">
              <div className="card_header">
                <img src="./blue_star.svg" alt="svg" />
                <span className="open_box">Open Box</span>
              </div>
              <span className="card_description">
                <span className="product_name">Galaxy Tab A7</span>
                <span className="product_properties">
                  128 GB - Silver - Excellent
                </span>
                <span className="product_price">USD $250.00</span>
              </span>
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ marginBottom: "10px" }}>
          <Button
            variant="secondary"
            className="continue_shopping"
            onClick={handleClose}
          >
            Continue Shopping
          </Button>
          <Button variant="primary" className="view-cart" onClick={handleView}>
            View Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Products;
