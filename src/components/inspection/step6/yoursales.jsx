import React from "react";
import xs from "../../../assests/Images/iphonexs.jpg";
import "./yoursales.scss";
import { Button } from "react-bootstrap";

const Yoursales = () => {
  return (
    <div className="your_sales">
      <div className="title_wrapper">
        <div className="title">Your Sale</div>
        <div>
          <svg
            width="29"
            height="26"
            viewBox="0 0 29 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5147 15.1951V22.2364H3.54813V6.26981H8.87033V2.72168H1.77407C0.794782 2.72168 0 3.51646 0 4.49575V24.0105C0 24.9915 0.794782 25.7845 1.77407 25.7845H21.2888C22.2699 25.7845 23.0629 24.9915 23.0629 24.0105V15.1951H19.5147Z"
              fill="#4BA4F0"
            />
            <path
              d="M28.0355 6.44707L20.9393 1.12487C20.6732 0.922627 20.3113 0.890694 20.0114 1.04149C19.7099 1.19228 19.52 1.4992 19.52 1.8345V4.4956H16.8589C11.4782 4.4956 7.10156 8.87222 7.10156 14.253C7.10156 14.6645 7.38541 15.0229 7.78458 15.1169C7.85199 15.1329 7.92118 15.14 7.9886 15.14C8.31857 15.14 8.62903 14.9555 8.7816 14.6504L8.99094 14.2334C10.3517 11.5103 13.0873 9.81779 16.1316 9.81779H19.52V12.4789C19.52 12.8142 19.7099 13.1211 20.0097 13.2719C20.3095 13.4227 20.6714 13.3908 20.9393 13.1885L28.0355 7.86632C28.2591 7.69956 28.3904 7.43522 28.3904 7.1567C28.3904 6.87817 28.2591 6.61383 28.0355 6.44707Z"
              fill="#4BA4F0"
            />
          </svg>
        </div>
      </div>

      <div className="container1">
        <div className="sub_container">
          <div className="product_container">
            <div className="device_details">
              <div className="detail_title">Brand</div>
              <div className="detail_specs">Apple</div>
            </div>

            <div className="device_details">
              <div className="detail_title">Model</div>
              <div className="detail_specs">Iphone XS</div>
            </div>

            <div className="device_details">
              <div className="detail_title">Capacity</div>
              <div className="detail_specs">64 GB</div>
            </div>

            <div className="device_details">
              <div className="detail_title">Restrictions</div>
              <div className="detail_specs">Yes</div>
            </div>

            <div className="device_details">
              <div className="detail_title">Battery Condition</div>
              <div className="detail_specs">Very Good</div>
            </div>

            <div className="device_details">
              <div className="detail_title">Original Charging Cable</div>
              <div className="detail_specs">Yes</div>
            </div>

            <div className="device_details">
              <div className="detail_title">Display Condition</div>
              <div className="detail_specs">Like New</div>
            </div>

            <div className="device_details">
              <div className="detail_title">Frame Condition</div>
              <div className="detail_specs">Like New</div>
            </div>

            <div className="device_details">
              <div className="detail_title">Barcode</div>
              <div className="detail_specs">24235332</div>
            </div>
          </div>

          <div className="payment_container">
            <div className="payment_details">
              <div className="detail_title">Payment Method</div>
              <div className="detail_specs">Cash</div>
            </div>

            <div className="payment_details">
              <div className="detail_title">Order Method</div>
              <div className="detail_specs">Pick up</div>
            </div>

            <div className="payment_details">
              <div className="detail_title">Estimated Value</div>
              <div className="detail_specs">USD $150</div>
            </div>
          </div>
        </div>

        <div className="sub_container1">
          <img src={xs} className="device_image" />
          <Button variant="danger" type="submit" className="placeorder">
            <a href="/my-orders">Back to My Orders</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Yoursales;
