import React from "react";
import "./Congratulations.scss";

const Congratulations = (props) => {
  const { data } = props;
  //count repetitive products
  let counter = {};
  data.forEach((obj) => {
    let key = JSON.stringify(obj.href);
    counter[`product${key}`] = (counter[`product${key}`] || 0) + 1;
  });
  //   console.log("counter", counter);
  //delete id key
  let del = data.map(({ id, ...item }) => item);
  //   console.log("res", del);
  //delete repetitive products
  const filtered = [
    ...new Map(del.map((item) => [JSON.stringify(item), item])).values(),
  ];
  //   console.log(filtered);

  return (
    <div className="congratulations mt-4">
      <div className="title mt-2">Congratulations!</div>
      <div className="order_details">
        <div className="order_details_title">
          Your order has been successfully placed.
        </div>
        <div className="summary_title">Order Summary</div>
        <div className="bodyElement">
          <div className="element header">
            <div className="column">Product</div>
            <div className="column">Qty</div>
            <div className="column">Price</div>
          </div>
          {filtered?.map((data, index) => (
            <div className="element">
              <div className="column">{data.deviceName}</div>
              <div className="column">{counter[`product${index + 1}`]}</div>
              <div className="column">{data.price}</div>
            </div>
          ))}
        </div>
        <div className="total">Total $500.00</div>
      </div>
    </div>
  );
};
export default Congratulations;
