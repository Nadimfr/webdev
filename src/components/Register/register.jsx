import React, { Component } from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { getAllDialCodes } from "../../core/apis/countries";
import * as UsersApi from "../../core/apis/users";
import "./style.scss";
import { fb, google, eye, eyehide } from "../../assests/icons/constants";

class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dial_codes: [],
      email: "",
      password: "",
      confirmpassword: "",
      fullname: "",
      code: "",
      phonenumber: "",
      Pass: true,
      validated: false,
    };
  }

  componentDidMount() {
    getAllDialCodes().then((res) => {
      console.log(res);
      this.setState({ dial_codes: res });
    });
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  registration(e) {
    e.preventDefault();
    let user = {
      email: this.state.user?.email,
      full_name: this.state.user?.full_name,
      phone_number: this.state.user?.phone_number,
      country_id: this.state.user?.country_id,
      password: this.state.user?.password,
      password_confirmation: this.state.user?.password_confirmation,
    };

    // console.log(user);

    UsersApi.addUser(user).then((res) => {
      alert(res?.data?.message);
    });
  }

  handlepass = () => {
    this.setState({ Pass: !this.state.Pass });
    console.log(this.state.Pass);
  };

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
    if (form.checkValidity() === true) {
      const data = {
        email: this.state.email,
        name: this.state.fullname,
        code: this.state.code,
        phonenumber: this.state.phonenumber,
        password: this.state.password,
      };
      console.log(data);
      event.preventDefault();
    }
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "2%" }}>
        <div className="row ">
          <h2 className="head">Sign Up</h2>
          <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4">
            <div className="card ">
              <div className="card-body">
                <Form
                  noValidate
                  validated={this.state.validated}
                  onSubmit={this.handleSubmit}
                  className="justify-content-center"
                >
                  <Row>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationCustom01"
                      className="my-2"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        id="email"
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Field can't be empty
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationCustom01"
                      className="my-2"
                    >
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        required
                        name="full_name"
                        type="text"
                        placeholder="Enter Full Name"
                        id="fullname"
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Field can't be empty
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="3"
                      controlId="validationCustom01"
                      className="my-2"
                    >
                      <Form.Label>Code</Form.Label>
                      <Form.Select
                        name="country_id"
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                      >
                        {this.state?.dial_codes?.map((country, index) => (
                          <option value={country.id} key={index}>
                            {country.name}
                          </option>
                        ))}
                      </Form.Select>

                      <Form.Control.Feedback type="invalid">
                        Field can't be empty
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="9"
                      controlId="validationCustom01"
                      className="my-2"
                    >
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        required
                        name="phone_number"
                        type="text"
                        placeholder="Enter Contact Number"
                        id="phonenumber"
                        onChange={(e) => {
                          this.handleChange(e);
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
                      className="my-2"
                    >
                      <Form.Label>Password</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          required
                          name="password"
                          type={this.state.Pass ? "password" : "text"}
                          placeholder="password"
                          className="form-control"
                          id="password"
                          onChange={(e) => {
                            this.handleChange(e);
                          }}
                        />
                        <InputGroup.Text
                          id="basic-addon2"
                          onClick={this.handlepass}
                        >
                          {this.state.Pass ? eye : eyehide}
                        </InputGroup.Text>
                        <Form.Control.Feedback type="invalid">
                          Field can't be empty
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationCustom02"
                      className="my-2"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          required
                          type={this.state.Pass ? "password" : "text"}
                          placeholder="Confirm password"
                          className="form-control"
                          id="confirmpassword"
                          name="password_confirmation"
                          onChange={(e) => {
                            this.handleChange(e);
                          }}
                        />
                        <InputGroup.Text
                          id="basic-addon2"
                          onClick={this.handlepass}
                        >
                          {this.state.Pass ? eye : eyehide}
                        </InputGroup.Text>
                        <Form.Control.Feedback type="invalid">
                          Field can't be empty
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>

                  <Row className="my-2 mx-5">
                    <Button
                      variant="danger"
                      size={window.length < "600px" ? "sm" : "lg"}
                      type="submit"
                      className="loginBtn"
                      onClick={(e) => this.registration(e)}
                    >
                      Sign Up
                    </Button>
                  </Row>
                  <Row className="my-2">
                    <text className="Orsignup">or Sign Up using</text>
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                      <span className="icon">{fb}</span>
                      <span className="icon">{google}</span>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUpComponent;
