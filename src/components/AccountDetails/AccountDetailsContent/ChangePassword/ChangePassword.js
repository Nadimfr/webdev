import React, { Component } from "react";
import "./ChangePassword.scss";
import { Form, Row, Col } from "react-bootstrap";
import { formValidator } from "../../../../core/helpers/formValidator";
import { AppContext } from "../../../../AppContext";
import * as UsersApi from "../../../../core/apis/users";

// const GreenSwitch = styled(Switch)(({ theme }) => ({
//   "& .MuiSwitch-switchBase.Mui-checked": {
//     color: "#4BA4F0",
//     "&:hover": {
//       backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
//     },
//   },
//   "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
//     backgroundColor: "#4BA4F0",
//   },
// }));

// const label = { inputProps: { "aria-label": "Switch demo" } };

class ChangePassword extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      showHidePassword: false,
      showHidePasswordID: "",
      password: {
        current_password: "",
        password: "",
        password_confirmation: "",
      },
    };
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    this.setState({
      password: {
        ...this.state.password,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const passwordChange = {
      current_password: this.state.password?.current_password,
      password: this.state?.password?.password,
      password_confirmation: this.state?.password?.password_confirmation,
    };

    formValidator(passwordChange, "changePassword", () => {
      UsersApi.changePassword(passwordChange).then((res) => {});
    });
  }

  //show hide password input
  //@param boolean
  handleSHowHidePassword = (bool, id) => {
    this.setState({ showHidePassword: !bool });
    this.setState({ showHidePasswordID: id });
  };

  render() {
    const { showHidePassword, showHidePasswordID } = this.state;
    const { handleOpenCloseModel, openClose } = this.props;

    return (
      <div className="change_password py-4">
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
              <Form.Label>Current Password </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter Current Password "
                name="current_password"
                value={this.current_password}
                onChange={this.handleChange}
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
              <Form.Label>New Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Enter New Password "
                value={this.password}
                onChange={this.handleChange}
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
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password_confirmation"
                placeholder="Enter Confirm Password "
                value={this.password_confirmation}
                onChange={this.handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Field can't be empty
              </Form.Control.Feedback>
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
export default ChangePassword;
