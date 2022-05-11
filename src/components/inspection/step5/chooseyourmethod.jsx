import React, { useState } from "react";
import "./chooseyourmethod.scss";
import { Row, Button, NavLink } from "react-bootstrap";
import Requestmethod from "./request";
import Droppmethod from "./dropoff";
import { selldevice } from "../../../core/apis/sellmydevice";

const Chooseyourmethod = () => {
  const [currentScreen, setCurrentScreen] = useState("Dropoff");
  const [currentComponent, setCurrentComponent] = useState(<Droppmethod />);

  const changeScreen = (type) => {
    setCurrentScreen(type);
    switch (type) {
      case "Droppmethod":
        setCurrentComponent(<Droppmethod />);
        break;
      case "Requestmethod":
        setCurrentComponent(<Requestmethod />);
        break;
    }
  };

  const sell = () => {
    const data = {
      modelId: 6,
      brandId: 1,
      productTypeId: 1,
      serieId: 3,
      currencyId: 1,
      variantValueCapacityId: 6,
      paymentOptionId: 4,
      deliveryMethodId: 1,
      answers: [1,6,9,11,16],
      pickUp: {
        addressId: null,
        addressDetails: {
          address: "NewLocation",
          city: "City",
          countryId: 6,
          postalCode: 10001,
          latitude: 32,
          longitude: 32,
        },
      },
    };
    selldevice(data).then((res) => console.log(res));
  };
  return (
    <div className="pickup">
      <div className="general">
        <div className="tabs">
          <div className="tabsHeader">
            <div
              style={
                currentScreen == "Droppmethod"
                  ? {
                      color: "#4BA4F0",
                      fontWeight: "500",
                    }
                  : {}
              }
              onClick={() => changeScreen("Droppmethod")}
            >
              Drop off at collection point
            </div>

            <div className="separator"></div>

            <div
              style={
                currentScreen == "Requestmethod"
                  ? {
                      color: "#4BA4F0",
                      fontWeight: "500",
                    }
                  : {}
              }
              href="/environments#"
              onClick={() => changeScreen("Requestmethod")}
            >
              Request for a Pick Up
            </div>
          </div>
          {currentComponent}
          <Row className="my-3 mx-5 d-flex justify-content-end">
            <Button className="placeorder" onClick={sell}>
              Continue
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Chooseyourmethod;
