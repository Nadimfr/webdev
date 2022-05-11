import React, { useContext, useEffect, useState } from "react";
import * as ProductsApi from "../../core/apis/product";
import "./YourCart.scss";
import phone from "../../assests/icons/phone.svg";
import greenStar from "../../assests/icons/Star.svg";
import blueStar from "../../assests/icons/starBlue.svg";
import orangeStar from "../../assests/icons/orangeStar.svg";
import Button from "../Button/button";
import { TailSpin } from "react-loader-spinner";
import { AppContext } from "../../AppContext";

function YourCart() {
  const { productId, setProductId } = useContext(AppContext);
  let sum = 0;
  for (let i = 0; i < productId.length; i++)
    sum += parseInt(productId[i].price);

  const [isLoading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  // useEffect(async () => {
  //   let id = sessionStorage.getItem("PRODUCT ID");
  //   console.log(id)
  //   await ProductsApi.getAllProductsListbyID(id).then((res) => {
  //     setProductList([res]);
  //     setLoading(!isLoading);
  //   });
  // }, []);
  const handleDelete = (index) => {
    setProductId((current) => current.filter((e, i) => i !== index));
  };

  console.log("yourCard:", productId);

  if (!isLoading) {
    return (
      <div className="Menu">
        <div className="elements">
          <TailSpin height="20" width="20" color="grey" ariaLabel="loading" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="yourCart">
        <h1>Your Cart</h1>
        <h6>{productId.length} item(s) in Cart </h6>
        <div className="carts">
          <div className="boxContainer">
            <div className="box">
              {productId.map((data, index) => (
                <div className="product_card">
                  <img
                    className="imagePhone"
                    src={
                      "https://blobconstellation.blob.core.windows.net/constellationcontainer" +
                      data.picture
                    }
                    alt="svg"
                  />
                  <img className="imageStar" src={orangeStar} alt="svg" />
                  <span className="card_content">
                    <span className="open_box">{data.condition}</span>
                    <span className="card_description">
                      <span className="product_name">{data.deviceName}</span>
                      <span className="product_properties">
                        {data.productDescription}
                      </span>
                      {/* {console.log(data.price)} */}
                      <span className="product_price">USD ${data.price}</span>
                    </span>
                    <p
                      name={index}
                      className="remove"
                      style={{ margin: "0" }}
                      onClick={() => handleDelete(index)}
                    >
                      Remove
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="your_order">
            <div className="order_title">Your Order</div>
            <div className="list">
              {productId.map((data) => (
                <div>
                  <div className="description">
                    <div className="product_name">{data.deviceName} </div>
                    <div className="product_price">USD ${data.price}</div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>

            <div className="total">
              <div className="title">Total</div>
              <div className="amount">USD ${sum}</div>
            </div>

            <Button
              type="link"
              href={"/Payment_Info"}
              width={"75%"}
              name={"Check Out"}
              margin={"5% auto 0"}
              isSelected={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default YourCart;
