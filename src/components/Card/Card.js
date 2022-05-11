import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import greenStar from "../../assests/icons/Star.svg";
import blueStar from "../../assests/icons/starBlue.svg";
import phone from "../../assests/icons/phoneicon.svg";
import orangeStar from "../../assests/icons/orangeStar.svg";
import "./Cards.scss";
import Button from "../Button/button";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const {
    id,
    condition,
    price,
    picture,
    href,
    deviceName,
    productDescription,
    className,
    onClick,
  } = props;
  const { productId, setProductId } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const handlePopUp = () => setShow(!show);

  let Data = {
    id: id,
    condition: condition,
    price: price,
    picture: picture,
    href: href,
    deviceName: deviceName,
    productDescription: productDescription,
  };

  // useEffect(() => {
  //   sessionStorage.setItem("testcontext", JSON.stringify([...productId]));
  // }, [productId]);

  const handleView = () => {
    setProductId((prev) => [...prev, Data]);
    sessionStorage.setItem("Products", JSON.stringify([...productId]));
    // sessionStorage.setItem("ProductsId", JSON.stringify([...productId.href]));

    // sessionStorage.setItem(
    //   "testcontext",
    //   JSON.stringify((prev) => [...prev, Data])
    // );

    // sessionStorage.setItem("PRODUCT ID", href);
  };

  // sessionStorage.setItem(`PRODUCT ID ${id}`, id);

  return (
    <div key={id} className={"cards " + className}>
      <div className="top">
        <p className="condition">perfect</p>
        <img src={blueStar} />
      </div>
      <a href={"/ProductDetails/" + href}>
        <img
          className="picture"
          src={
            "https://blobconstellation.blob.core.windows.net/constellationcontainer" +
            picture
          }
          alt="tab"
        />
      </a>
      <h4 className="device">{deviceName}</h4>
      <p className="description">{productDescription}</p>
      <h3 className="price">${price}</h3>
      <Button
        className="cart"
        name="Add to Cart"
        onClick={() => {
          handlePopUp();
          handleView();
        }}
        width="80%"
        margin="0 auto 5%"
      />

      <Modal show={show} onHide={handlePopUp} centered>
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
          <div className="cardsPopup">
            <p className="condition">{condition}</p>
            <img
              className="picture"
              src={
                "https://blobconstellation.blob.core.windows.net/constellationcontainer" +
                picture
              }
              alt="tab"
            />
            <img src={blueStar} alt="" />

            <div className="deviceFeatures">
              <h3 className="deviceName">{deviceName}</h3>
              <p className="description">{productDescription}</p>
              <h3 className="price">${price}</h3>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ marginBottom: "10px" }}>
          <Button
            className="continue_shopping"
            name="Continue Shopping"
            onClick={handlePopUp}
          />
          <Button
            type="link"
            className="view-cart"
            name="View Cart"
            href="/view_cart"
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Card.defaultProps = {
  condition: "Open Box",
};
