import React, { Component } from "react";
import "./PersonalInfo.scss";
import * as UsersApi from "../../../../core/apis/users";
import * as CountriesApi from "../../../../core/apis/countries";
import * as AuthApi from "../../../../core/apis/auth";
import { AppContext } from "../../../../AppContext";
import { formValidator } from "../../../../core/helpers/formValidator";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#4BA4F0",
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#4BA4F0",
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

class PersonalInfo extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      account: {
        full_name: "",
        phone_number: "",
        dial_code: "",
      },
      selectCountry: 0,
      codes: [],
      has_enabled_notification: false,
    };
  }

  handleChange = (e) => {
    //console.log(e.target.checked);
    this.setState({ has_enabled_notification: e.target.checked });
    console.log("latest", !this.state.has_enabled_notification);
  };
  handleChangeCountry = (event) => {
    this.setState.selectCountry(event.target.value);
  };

  handleChangeAccount = (e) => {
    console.log(e.target.name, e.target.value);

    this.setState({
      account: {
        ...this.state.account,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const accountUpdated = {
      email: this.state.account?.email,
      full_name: this.state.account?.full_name,
      phone_number: this.state.account?.phone_number,
      dial_code: this.state.account?.dial_code,
      //id: this.state.account.id,
      country_id: "118",
      has_enabled_notification: this.state.has_enabled_notification,
    };

    formValidator(accountUpdated, "updatePersonal", () => {
      AuthApi.updateAccount(accountUpdated).then((res) => {
        console.log(res);
      });
    });
  }

  componentDidMount() {
    UsersApi.getUserDetails().then((res) => {
      this.setState({
        account: {
          email: res.email,
          full_name: res.full_name,
          phone_number: res.phone_number,
          dial_code: res.country.dial_code,
          has_enabled_notification: res.has_enabled_notification,
        },
      });
      console.log("initial", this.state.account.has_enabled_notification);
    });

    CountriesApi.getAllDialCodes().then((response) => {
      this.setState({ codes: response });
    });
  }

  render() {
    return (
      <div className="personal_info py-4">
        <Form
          noValidate
          //   validated={this.state.validated}
          //   onSubmit={this.handleSubmit}
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
                type="email"
                value={this.state.account.email}
                name="email"
                disabled
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
                type="text"
                name="full_name"
                value={this.state.account.full_name}
                onChange={this.handleChangeAccount}
              />
              <Form.Control.Feedback type="invalid">
                Field can't be empty
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="my-2"
            >
              <Form.Label>Code</Form.Label>
              <Form.Select
                name="dial_code"
                onChange={(e) => {
                  this.handleChange(e);
                }}
              >
                <option selected>{this.state.account.dial_code}</option>
                {this.state.codes.map((code, index) => (
                  <option>{code.name}</option>
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
                type="text"
                value={this.state.account.phone_number}
                name="phone_number"
                onChange={this.handleChangeAccount}
              />
              <Form.Control.Feedback type="invalid">
                Field can't be empty
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              as={Col}
              md="9"
              controlId="validationCustom01"
              className="my-2"
            >
              <Form.Label>Enable Notification</Form.Label>
              <GreenSwitch
                {...label}
                checked={this.state.account.has_enabled_notification}
                // defaultChecked
                onChange={this.handleChange}
              />
            </Form.Group>
          </Row>
        </Form>

        <div className="submit" onClick={(e) => this.handleSubmit(e)}>
          <span>Submit</span>
        </div>
      </div>
    );
  }
}
export default PersonalInfo;
