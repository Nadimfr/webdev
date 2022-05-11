import React, { useEffect, useState } from "react";
import "./PaymentInformation.scss";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as PaymentApi from "../../core/apis/payment";
import FormControl from "@material-ui/core/FormControl";
// import { Form, Row, Col, Button, InputGroup, NavLink } from "react-bootstrap";
import Button from "../Button/button";

function PaymentInformation() {
  const [chosenAdd, setChosenAdd] = useState(0);

  const [checkBox, setCheckBox] = useState(false);
  const [activePaymentType, setActivePaymentType] = useState("");
  const handleCheckboxClick = () => {
    setCheckBox(!checkBox);
  };
  const [paymentOptions, setPaymentOptions] = useState([]);

  const [value, setValue] = useState("");

  const handleChange = async (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    PaymentApi.getAllPaymentOptions().then((response) => {
      setPaymentOptions(response);
    });
    sessionStorage.setItem("PAYMENT INFO", value);
  }, [value]);

  // console.log("value", value);

  return (
    <div className="payment_information mt-4">
      <div className="container">
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-md-8 col-sm-10 mx-auto form p-4">
            <h2 className="head pb-3" style={{ textAlign: "start" }}>
              Payment Information
            </h2>
            <div className="payment_body">
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="status"
                  name="status"
                  value={value}
                  onChange={handleChange}
                >
                  {paymentOptions.map((item, index) => (
                    <div className="payment-type">
                      <MenuItem className={"menue-item"}>
                        <FormControlLabel
                          value={item.id}
                          control={<Radio />}
                          label={item.title}
                          checked={item.id === chosenAdd}
                          onChange={(e) => {
                            setChosenAdd(item.id);
                            // console.log(item.id);
                          }}
                        />
                      </MenuItem>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Button
              type="link"
              name="Continue"
              href="/order_method"
              width="30%"
              margin="2% 0"
              isSelected={true}
            />

            {/*             
            <Row className="my-3 mx-5 d-flex justify-content-end">
              <Button type="submit" className="placeorder">
                <NavLink href="/order_method"> Continue </NavLink>
              </Button>
            </Row> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PaymentInformation;
