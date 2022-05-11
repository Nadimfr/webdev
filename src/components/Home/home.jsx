import React, { useState } from "react";
import Menu from "../Menu/menu.jsx";
import Products from "../Products/products";
import Slideshow from "../SlideShow/slideshow.jsx";
import Footer from "../Footer/footer";
import Search from "../Search/search.jsx";
import Respomenu from "../RespoMenu/respomenu";
import Respofooter from "../RespoFooter/respofooter";
import { TailSpin } from "react-loader-spinner";

const Home = () => {
  return (
    <>
      <div
        className="search"
        style={{
          display: "flex",
          justifyContent: "right",
          width: "90%",
          margin: "2% auto",
        }}
      ></div>
      <Menu />
      <Slideshow />
      <Products />
      <Footer />
      <Respofooter></Respofooter>
    </>
  );
};

export default Home;
