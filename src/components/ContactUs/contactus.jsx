import React from "react";
import phone from "../../assests/icons/phone.svg";
import message from "../../assests/icons/message.svg";
import location from "../../assests/icons/location.svg";
import "../ContactUs/contactus.scss";
import { Form, Row, Col } from "react-bootstrap";

const Contactus = () => {
  return (
    <>
      <div className="Contact_us">
        <div className="Title_wrapper">
          <div className="Title">Contact Us</div>
          <div className="Text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <div className="Container_contact">
          <div className="First_column">
            <div className="Row">
              <img alt="" className="Phone" src={phone} />
              <div className="Text">+0123 4567 8910</div>
            </div>
            <div className="Row">
              <img alt="" className="Message" src={message} />
              <div className="Text">User@hotmail.com</div>
            </div>
            <div className="Row">
              <img alt="" className="Location" src={location} />
              <div className="Text">102 Street 2714 Don</div>
            </div>
          </div>

          <div className="Quick">Quick Contact</div>

          <div className="Second_column">
            <Form
              noValidate
              // validated={this.state.validated}
              // onSubmit={this.handleSubmit}
              className="justify-content-center"
            >
              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom01"
                  className="my-2"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Full Name"
                    id="name"
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom01"
                  className="my-2"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter Email"
                    id="Email"
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom01"
                  className="my-2"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Phone Number"
                    id="number"
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom01"
                  className="my-2"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="Message"
                    className="Message"
                  />
                </Form.Group>
              </Row>
            </Form>
            <div className="Send_message">Send Message</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
