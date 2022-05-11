import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function ResetFormComponent() {
  const [validated, setValidated] = useState(false);
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    let token = window.location.href.split("/");
    token = token[token.length - 1];
  });

  const handleChange = (e) => {
    if (e.target.id === "password") {
      setpassword(e.target.value);
    }
    if (e.target.id === "confirmpassword") {
      setconfirmpassword(e.target.value);
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
      navigate("/Login", { replace: true });
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
                <Row>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom02"
                    className="my-3"
                  >
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                      required
                      type="password"
                      placeholder="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />

                    <Form.Control.Feedback type="invalid">
                      Field can't be empty
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom02"
                    className="my-3"
                  >
                    <Form.Label>Confirm Password</Form.Label>

                    <Form.Control
                      required
                      type="password"
                      placeholder="Confirm password"
                      className="form-control"
                      id="confirmpassword"
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
export default ResetFormComponent;
