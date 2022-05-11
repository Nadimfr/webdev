import React, { useEffect, useState } from "react";
import Voucher from "../../../assests/Images/Voucher.png";
import "./paymentmethod.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
import { getsellpaymentoptions } from "../../../core/apis/sellmydevice";
import { NavLink } from "react-router-dom";
import Select from 'react-select'
import { option } from "commander";

const Paymentmethod = () => {
  const [paymentMethod, setPaymentMethod] = useState();
  const [payment, setPayment] = useState([]);
  const [options, setoptions] = useState([]);


  const getpaymentMethod = () => {
    getsellpaymentoptions().then((res) =>
      res.map((item) => options.push({
        value: item.id,
        label: item.option
      }))
    )
  };
  useEffect(() => {
    getpaymentMethod();
  }, []);
  return (
    <div className="Payment_method">
      <div className="Method_box">
        <div className="Title">Payment Method</div>
        <div style={{ width: "90%" }}>
          <Form>
            <Row className="mb-5">
              <Form.Group
                as={Col}
                controlId="validationCustom01"
                className="my-2"
              >
                <Select options={options} />

                <Form.Control.Feedback type="invalid">
                  Field can't be empty
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Form>
          {/* 
          {paymentMethod == 1 && (
            <div className="Voucher">
              <img className="Voucher" src={Voucher} alt="voucher" />
            </div>
          )} */}
          <Row className="my-5 mx-5 d-flex justify-content-end">
            <Button className="placeorder">
              <NavLink to="/OrderMethod">Continue</NavLink>
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Paymentmethod;
