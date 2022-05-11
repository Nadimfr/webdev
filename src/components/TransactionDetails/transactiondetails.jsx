import React, { useEffect, useState } from "react";
import "./details.scss";
import * as UsersApi from "../../core/apis/users";
import { TailSpin } from "react-loader-spinner";

const Transactionsdetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [Products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    let order_id = window.location.href.split("/");
    order_id = order_id[order_id.length - 1];

    UsersApi.getSingleOrder(order_id).then((res) => {
      console.log("Res", res);
      setDetails(res);
      setProducts(res.product);
      setLoading(!isLoading);
    });
  }, []);
  console.log("Prdcts", Products);
  console.log("Details", details);

  if (isLoading) {
    return (
      <div>
        <div className="elements">
          <TailSpin height="20" width="20" color="grey" ariaLabel="loading" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Order_details">
        <div className="Title">Transaction Details</div>

        <div className="Items_summary">
          <div className="First_row">
            <div className="Title">Items Summary</div>
          </div>

          <div className="Table_titles">
            <div>Product Name</div>
            <div>Price</div>
            <div>Total Price</div>
          </div>

          <div className="Results">
            {Products.map((e) => (
              <div className="Table_results">
                <div>{e.model.model}</div>
                <div>{e.cost_price}USD $</div>
                <div>{e.cost_price}USD $</div>
              </div>
            ))}
          </div>
        </div>

        <div className="Details_row">
          <div className="Details">
            <div className="Title">Customer and Order Details</div>
            <div className="Info">
              <div className="Sub_row">
                <div className="Left">Customer Name</div>
                <div>{details.user.full_name}</div>
              </div>
              <div className="Sub_row">
                <div className="Left">Phone Number</div>
                <div>{details.user.phone_number}</div>
              </div>
              <div className="Sub_row">
                <div className="Left">{details.delivery_method.name}</div>
                <div>Delivery</div>
              </div>
              <div className="Sub_row">
                <div className="Left">Note</div>
                <div>N/A</div>
              </div>
            </div>
          </div>

          <div className="Summary">
            <div className="Title">Order Summary</div>
            <div className="Info">
              <div className="Sub_row">
                <div className="Left">Order Created</div>
                <div>{details.created_at.split("T")[0]}</div>
              </div>
              <div className="Sub_row">
                <div className="Left">Order Time</div>
                <div>{details.created_at.split("T")[1].split("Z")}</div>
              </div>
              <div className="Sub_row">
                <div className="Left">Subtotal</div>
                <div>{details.cart_amount}USD $</div>
              </div>
              <div className="Sub_row">
                <div className="Left">Delivery Fee</div>
                <div>{details.transaction.shipping.cost}USD $</div>
              </div>
            </div>
          </div>
        </div>

        <div className="Delivery_row">
          <div className="Left_column">
            <div className="Title">Delivery Address</div>
            <div className="Delivery_address">
              <div className="Info">
                <div className="Sub_row">
                  <div className="Left">Address</div>
                  <div>{details.user_address.address}</div>
                </div>
                <div className="Sub_row">
                  <div className="Left">City</div>
                  <div>{details.user_address.city}</div>
                </div>
                <div className="Sub_row">
                  <div className="Left">Country</div>
                  <div>{details.user_address.country.country_name}</div>
                </div>
                <div className="Sub_row">
                  <div className="Left">Postcode</div>
                  <div>{details.user_address.postal_code}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Total">
            <div className="Total_title">Total</div>
            <div className="Total_price">{details.cart_amount}USD $</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Transactionsdetails;
