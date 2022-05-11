import React, { useState, useEffect } from "react";
import check from "../../assests/icons/check.svg";
import "./ProductDetails.scss";
import ImageGallery from "react-image-gallery";
import * as ProductsApi from "../../core/apis/product";
import { TailSpin } from "react-loader-spinner";
import Footer from "../Footer/footer";
import Button from "../Button/button";

const ProductDetails = () => {
  const line = [
    {
      subtitle: "Model",
      value: "Galaxy Note 9",
    },
    {
      subtitle: "Brand",
      value: "Samsung",
    },
    {
      subtitle: "Operating System",
      value: "Android",
    },
    {
      subtitle: "Color",
      value: "Black",
    },
    {
      subtitle: "Storage",
      value: "128GB",
    },
    {
      subtitle: "Memory",
      value: "6 GB RAM",
    },

    {
      subtitle: "Display Size",
      value: "6.4\u2033",
    },
    {
      subtitle: "Display Resolution",
      value: "2960 x 1440 pixels",
    },
    {
      subtitle: "Camera Resolution",
      value: "12 MP",
    },
    {
      subtitle: "Network",
      value: "GSM/CDMA",
    },
    {
      subtitle: "Processor",
      value: "Octa Core 2.8GHz+1.7GHz",
    },
    {
      subtitle: "Weight",
      value: "7.09 oz",
    },
  ];
  const [isLoading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  // console.log("first", isLoading);

  // useEffect(async () => {
  //   let id = window.location.href.split("/");
  //   id = id[id.length - 1];

  //   await ProductsApi.getAllProductsListbyID(id).then((res) => {
  //     setProductList([res]);
  //     setLoading(!isLoading);
  //   });
  // }, []);
  const info = [
    {
      title: "Color",
      // content: ["Black", "Blue", "Red", "Green"],
      content: ["Green"],
    },
    {
      title: "Storage",
      // content: ["64 GB", "128 GB"],
      content: ["128 GB"],
    },
    {
      title: "Condition",
      // content: ["Fair", "Good", "Excellent", "Mint"],
      content: ["Excellent"],
    },
  ];
  // console.log("productList:", productList[0]);
  // if (isLoading) {
  //   return (
  //     <div className="Menu">
  //       <div className="elements">
  //         <TailSpin height="20" width="20" color="grey" ariaLabel="loading" />
  //       </div>
  //     </div>
  //   );
  // } else {
  // let gallery = [];
  // productList[0].product_image.map((e) => {
  //   let gal = {
  //     original:
  //       "https://blobconstellation.blob.core.windows.net/constellationcontainer" +
  //       e.image,
  //     thumbnail:
  //       "https://blobconstellation.blob.core.windows.net/constellationcontainer" +
  //       e.image,
  //   };
  //   console.log("gal", gal);
  //   gallery.push(gal);
  // });
  // const data = [
  //   productList[0].warranty + " Warranty",
  //   "All products are tested",
  //   "All the products are wiped clear",
  // ];
  return (
    <>
      <div className="Viewdetails">
        <div className="title firstTitle">
          <h1>Apple</h1>
          <p className="price">US$ 400.00</p>
        </div>
        <div className="mobilebox">
          {/* <ImageGallery
            items={gallery}
            showNav={false}
            showPlayButton={false}
          /> */}
          <div className="options">
            <div className="title secondTitle">
              <h1>Iphone 13</h1>
              <p className="price">US$ 400.00</p>
            </div>
            {/* {info.map((e) => (
              <>
                <p className="features">{e.title}</p>
                <div className="available">
                  {e.content.map((i) => (
                    <div className="description">
                      {e.title === "Color" ? (
                        <div
                          className="circle"
                          style={{ backgroundColor: i }}
                        />
                      ) : null}
                      <p>{i}</p>
                    </div>
                  ))}
                </div>
              </>
            ))} */}
            <div className="Button">
              <Button name="Add to Cart" width="50%" />
              <Button name="Buy Now" href="/" width="50%" isSelected={true} />
            </div>
          </div>
        </div>
        {/* <div className="details">
          {data.map((data) => {
            return (
              <div className="part">
                <img className="checksvg" src={check} />
                <p>{data}</p>
              </div>
            );
          })}
        </div> */}
        <div className="specifications">
          <h2>Specifications</h2>
          <div className="tableContent">
            <div className="side">
              {line.slice(0, 6).map((data) => (
                <div className="Line">
                  <div className="Subtitle">{data.subtitle}</div>
                  <div className="Value">{data.value}</div>
                </div>
              ))}
            </div>
            <div className="Separator" />
            <div className="side">
              {line.slice(6, 12).map((data) => (
                <div className="Line">
                  <div className="Subtitle">{data.subtitle}</div>
                  <div className="Value">{data.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
  // }
};

export default ProductDetails;
