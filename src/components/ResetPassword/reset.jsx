import React, { Component, useState } from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import * as AuthApi from "../../core/apis/auth";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function ResetComponent(props) {
  const [validated, setValidated] = useState(false);
  const [email, setemail] = useState("");
  const [byotp, setbyotp] = useState(false);
  const [byemail, setbyemail] = useState(false);
  const [step, setStep] = useState(1);

  let navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setemail({ email: e.target.value });
    }
    console.log(email);
    if (e.target.id === "otp") {
      setbyotp("true");
    }
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    await setValidated(true);

    if (form.checkValidity() === true) {
      event.preventDefault();
      const data = {
        user_type_id: 5,
        email: email.email,
      };

      console.log(data);

      AuthApi.checkEmail(data)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            sessionStorage.setItem("EMAIL", data.email);
            sessionStorage.setItem(
              "Phone",
              res.data.data[0].country.dial_code +
                res.data.data[0].phone_number,
            );
            navigate("/ResetPassword", { replace: true });
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="container" style={{ marginTop: "6%" }}>
      <div className="row ">
        <h2 className="head">Reset Password</h2>
        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4">
          <div className="card ">
            <div className="card-body">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="justify-content-center"
              >
                <Row style={{}}>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom01"
                    className="my-3"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      id="email"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Field can't be empty
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="my-3 mx-5">
                  <Button
                    variant="danger"
                    size={window.length < "600px" ? "sm" : "lg"}
                    type="submit"
                    className="ContinueBtn"
                  >
                    Continue
                  </Button>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResetComponent;
