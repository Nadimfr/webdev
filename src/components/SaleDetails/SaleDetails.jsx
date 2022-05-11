import React, { useEffect, useState } from "react";
import "./details.scss";
import * as UsersApi from "../../core/apis/users";
import { TailSpin } from "react-loader-spinner";
import Collapsible from "react-collapsible";

const SaleDetails = () => {
  const [isLoading, setLoading] = useState(true);

  const [answers, setAnswers] = useState([]);
  const [inspection, setInspection] = useState();

  useEffect(() => {
    let id = window.location.href.split("/");
    id = id[id.length - 1];

    UsersApi.getSaleByID(id).then((res) => {
      console.log(res);
      setInspection(res);
      setAnswers(res.answers);
      setLoading(!isLoading);
    });
  }, []);

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
            <div></div>
          </div>

          <div className="accordion">
            <Collapsible
              openedClassName="accordion-opened"
              trigger={
                <>
                  <span className="accordion_list_wrapper">
                    <div
                      className="accordion_list list1"
                      style={{ flexDirection: "column" }}
                    >
                      <span>Sale Number</span>
                      <span>Barcode</span>
                      <span>Date</span>
                      <span>Price</span>
                      <span>Delivery Status</span>
                      <span>Order Status</span>
                      <span></span>
                    </div>
                    <div className="accordion_list list2">
                      <span className="sale_number">
                        {inspection.brand + " " + inspection.model}
                      </span>
                      <span></span>
                      <span className="price">
                        {inspection.estimatedValue} USD $
                      </span>

                      <span
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <svg
                          width="26"
                          height="16"
                          viewBox="0 0 26 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.055 0.425779L13 9.69703L22.945 0.425775L26 3.28003L13 15.4258L-1.83599e-06 3.28003L3.055 0.425779Z"
                            fill="#4BA4F0"
                          />
                        </svg>
                      </span>
                    </div>
                  </span>
                  <svg
                    className="mobile_svg"
                    width="26"
                    height="16"
                    viewBox="0 0 26 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.055 0.425779L13 9.69703L22.945 0.425775L26 3.28003L13 15.4258L-1.83599e-06 3.28003L3.055 0.425779Z"
                      fill="#4BA4F0"
                    />
                  </svg>
                </>
              }
            >
              <div className="accordion_list">
                <span className="approved_sn">
                  <span className="offered_value">Inspection ID</span>
                  <span className="offered_value">Estimated Value</span>
                  <span className="offered_value">Product Type</span>
                  <span className="offered_value">Brand</span>
                  <span className="offered_value">Serie</span>
                  <span className="offered_value">Model</span>

                  {answers.map((question) => (
                    <span className="offered_value">{question.question}</span>
                  ))}
                </span>
                <span className="barcode"></span>
                <span className="date"></span>

                <span className="mobile_delivery_status"></span>
                <span className="mobile_order_status"></span>
                <span
                  className="mobile_order_status"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                ></span>
                <span className="approved_sn">
                  <span className="offered_value">
                    {inspection.inspectionId}
                  </span>
                  <span className="offered_value">
                    {inspection.estimatedValue}
                  </span>
                  <span className="offered_value">
                    {inspection.productType}
                  </span>
                  <span className="offered_value">{inspection.brand}</span>
                  <span className="offered_value">{inspection.serie}</span>
                  <span className="offered_value">{inspection.model}</span>
                  {answers.map((question) => (
                    <span className="offered_value">{question.answer}</span>
                  ))}
                </span>
                <span className="desktop_delivery_status"></span>
                <span className="desktop_order_status"></span>
                <span
                  className="desktop_order_status"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                ></span>
              </div>
            </Collapsible>
          </div>
        </div>

        <div className="Details_row">
          <div className="Details">
            <div className="Title">Customer and Order Details</div>
            <div className="Info">
              <div className="Sub_row">
                <div className="Left">Customer Name</div>
                <div>{inspection.customerDetails[0].user_name}</div>
              </div>
              <div className="Sub_row">
                <div className="Left">Phone Number</div>
                <div>{inspection.customerDetails[0].phoneNumber}</div>
              </div>
              <div className="Sub_row">
                <div className="Left">Address</div>
                <div>{inspection.deliveryAddress[0].address}</div>
              </div>
              <div className="Sub_row">
                <div className="Left">Contract</div>
                <div>N/A</div>
              </div>
            </div>
          </div>

          <div className="Summary">
            <div className="Title">Order Summary</div>
            <div className="Info">
              <div className="Sub_row">
                <div className="Left">Order Created</div>
                <div>{inspection.salesSummary[0].orderDate}</div>
              </div>
              <div className="Sub_row">
                <div className="Left">Order Time</div>
                <div>{inspection.salesSummary[0].orderTime}</div>
              </div>
              <div className="Sub_row">
                <div className="Left">Payment Method</div>
                <div>{inspection.salesSummary[0].paymentMethod}</div>
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
                  <div>{inspection.deliveryAddress[0].address}</div>
                </div>
                <div className="Sub_row">
                  <div className="Left">City</div>
                  <div>{inspection.deliveryAddress[0].city}</div>
                </div>
                <div className="Sub_row">
                  <div className="Left">Country</div>
                  <div>{inspection.deliveryAddress[0].country_name}</div>
                </div>
                <div className="Sub_row">
                  <div className="Left">Postcode</div>
                  <div>{inspection.deliveryAddress[0].postal_code}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Total">
            <div className="Total_title">Total</div>
            <div className="Total_price">{inspection.costValue} USD $</div>
          </div>
        </div>
      </div>
    );
  }
};

export default SaleDetails;
