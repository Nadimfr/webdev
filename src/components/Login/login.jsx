import React, { useState } from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { fb, google, eye, eyehide } from "../../assests/icons/constants";
import { Login } from "../../core/apis/auth";
import { useNavigate } from "react-router-dom";
import "./login.scss";

function LoginComponent() {
  const [validated, setValidated] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Pass, setPass] = useState(true);
  console.log("eye:", Pass);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setemail({ email: e.target.value });
    }
    if (e.target.name === "password") {
      setpassword({ password: e.target.value });
    }
  };
  let navigate = useNavigate();

  const handlepass = () => {
    setPass(!Pass);
  };

  const handleSubmit = (event) => {
    const data = {
      user_type_id: 5,
      email: email.email,
      password: password.password,
    };

    Login(data)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          navigate("/home");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="login">
      <h1>Log In</h1>
      <Form
         className="form"
      >
        <Row>
          <Form.Group
            as={Col}
            md="12"
            controlId="validationCustom01"
            className="my-3"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Email"
              name="email"
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
            className="mt-3 mb-2"
          >
            <Form.Label>Password</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                required
                type={Pass ? "password" : "text"}
                placeholder="password"
                className="form-control"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <InputGroup.Text id="basic-addon2" onClick={handlepass}>
                {Pass ? eye : eyehide}
              </InputGroup.Text>
              <Form.Control.Feedback type="invalid">
                Field can't be empty
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row>
          <a className="Password" href="/ForgotPassword">
            Forgot password
          </a>
        </Row>
        <Button
          size={window.length < "600px" ? "sm" : "lg"}
          className="loginBtn"
          id="loginBtn"
          onClick={handleSubmit}
        >
          Log In
        </Button>
        <Row className="my-3">
          <text className="OrLogin">or Log in using</text>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <span className="icon">{fb}</span>
            <span className="icon">{google}</span>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default LoginComponent;
