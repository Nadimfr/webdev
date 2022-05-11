import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
//import "./style.scss";

class Requestmethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      password: "",
      confirmpassword: "",
      city: "",
      code: "",
      phonenumber: "",
      Pass: true,
      validated: false,
    };
  }

  handleChange = (e) => {
    if (e.target.id === "address") {
      this.setState({ address: e.target.value });
    }
    if (e.target.id === "password") {
      this.setState({ password: e.target.value });
    }
    if (e.target.id === "city") {
      this.setState({ city: e.target.value });
    }
    if (e.target.id === "code") {
      this.setState({ code: e.target.value });
    }
    if (e.target.id === "phonenumber") {
      this.setState({ phonenumber: e.target.value });
    }
    if (e.target.id === "confirmpassword") {
      this.setState({ confirmpassword: e.target.value });
    }
  };

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
      <div className="order_method mt-4 ">
        <div className="container">
          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={this.handleSubmit}
            className="justify-content-center"
          >
            <div className="card-body">
              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <Form.Label>Saved Addresses</Form.Label>
                  <Form.Select
                    id="Saved Addresses"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  >
                    <option>Select Address</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Field can't be empty
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    type="Address"
                    placeholder="Enter Address"
                    id="Address"
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
                  md="6"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <Form.Label>Country</Form.Label>
                  <Form.Select
                    id="Country"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  >
                    <option>Select Country</option>
                  </Form.Select>

                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <Form.Label>City</Form.Label>
                  <Form.Select
                    id="City"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  >
                    <option>Select City</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    required
                    type="Code"
                    placeholder="Enter Postal Code"
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
                  md="2"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <Form.Label>Code</Form.Label>
                  <Form.Select
                    id="Country"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  >
                    <option>+961</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Field can't be empty
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="123 456 890"
                    id="number"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />
                </Form.Group>

                {/* <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <Form.Label style={{ color: "#4BA4F0" }}>
                    Shipping Cost
                  </Form.Label>
                </Form.Group>{" "} */}
                {/* <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                  className="my-2 "
                >
                  <Form.Label style={{ color: "#4BA4F0", float: "right" }}>
                    USD $20.00
                  </Form.Label>
                </Form.Group> */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className="my-2"
                >
                  <Form.Label
                    style={{
                      color: "#A8A8A8",
                      float: "right",
                      fontSize: "16px",
                    }}
                  >
                    We will send someone to collect the phone from you. The
                    phone will be subject to diagnostic and we will confirm the
                    condition.
                  </Form.Label>
                </Form.Group>
              </Row>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default Requestmethod;
