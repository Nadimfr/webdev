import React, { Component, useState } from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./style.scss";

function OTPComponent() {
  const [validated, setValidated] = useState(false);
  const [code, setcode] = useState();

  let navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === "code") {
      setcode(e.target.value);
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
      navigate("/ResetForm", { replace: true });
    }
  };

  return (
    <div className="container" style={{ marginTop: "6%" }}>
      <div className="row ">
        <h2 className="head">OTP Code</h2>
        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4">
          <div className="card ">
            <div className="card-body">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="justify-content-center"
              >
                <Row>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom01"
                    className="my-3"
                  >
                    <Form.Label>Verification Code</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Code"
                      id="code"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Field can't be empty
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Row>
                    <a className="Code" href="/">
                      Resend Code
                    </a>
                  </Row>
                </Row>

                <Row className="my-3 mx-5">
                  <Button
                    variant="danger"
                    size={window.length < "600px" ? "sm" : "lg"}
                    type="submit"
                    className="ContinueBtn"
                  >
                    Reset Password
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
export default OTPComponent;
