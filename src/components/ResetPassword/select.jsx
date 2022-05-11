import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as AuthApi from "../../core/apis/auth";
import "./style.scss";

function ResetByComponent(props) {
  const [validated, setValidated] = useState(false);
  const [byotp, setbyotp] = useState(false);
  const [byemail, setbyemail] = useState(false);
  const [dissplay, setdisplay] = useState("");
  const [email, setEmail] = useState(sessionStorage.getItem("EMAIL"));
  const [phone, setPhone] = useState(sessionStorage.getItem("PHONE"));

  let navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === "otp") {
      setbyotp(!byotp);
    }
    if (e.target.id === "email") {
      setbyemail(!byemail);
    }
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    await setValidated(true);
    if (byotp === true) {
      const data = {
        user_type_id: 5,
        email: email,
        phone_number: phone,
      };
      console.log(data);

      AuthApi.resetPasswordByOTP(data)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            alert(res.data.message);
            navigate("/OTP", { replace: true });
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
            {dissplay === "none" ? (
              <div className="card-body">
                <Row className="text-center my-4">
                  <text> An email has been sent!</text>
                </Row>

                <Row className="my-3 mx-5">
                  <Button
                    variant="outline-danger"
                    size={window.length < "600px" ? "sm" : "lg"}
                    type="submit"
                    className="ContinueBtn-outline "
                  >
                    <a href="/"> Close</a>
                  </Button>
                </Row>
              </div>
            ) : (
              <div className="card-body">
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className="justify-content-center"
                >
                  <Form.Group as={Row} className="mb-3">
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        id="email"
                        label="Reset by Email"
                        className="m-3"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />

                      <Form.Check
                        type="radio"
                        label="Reset by OTP"
                        id="otp"
                        className="m-3"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </Col>
                  </Form.Group>

                  <Row className="my-3 mx-5">
                    <Button
                      variant="danger"
                      size={window.length < "600px" ? "sm" : "lg"}
                      //type="submit"
                      className="ContinueBtn"
                      onClick={handleSubmit}
                    >
                      Continue
                    </Button>
                  </Row>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResetByComponent;
