import React, { useState, useEffect } from "react";
import iphone from "../../assests/Images/iphone.png";
import slide2 from "../../assests/Images/slide2.png";
import "./SlideShow.scss";
import { Carousel } from "react-bootstrap";
import * as ProductsApi from "../../core/apis/product";
import { TailSpin } from "react-loader-spinner";

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [advertising, setAdvertising] = useState([]);

  // const [isLoading, setLoading] = useState(true);
  // if (isLoading) {
  //   return (
  //     <div className="Menu">
  //       <div className="elements">
  //         <TailSpin height="20" width="20" color="grey" ariaLabel="loading" />
  //       </div>
  //     </div>
  //   );
  // } else {
  return (
    <div className="mainSlider">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="slidecontainer"
      >
        {/* {advertising[0].data.map((i) => {
            return (
              <Carousel.Item>
                <img
                  alt=""
                  className="d-block w-100"
                  // alt="Third slide"
                  src={
                    "https://blobconstellation.blob.core.windows.net/constellationcontainer" +
                    i.image
                  }
                />
              </Carousel.Item>
            );
          })} */}
        <Carousel.Item>
          <img className="d-block w-100" src={iphone} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={iphone} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
  // }
};

export default Slideshow;
