import React, { Component } from "react";
import { Form, Row, Col, Modal } from "react-bootstrap";
import Button from "../Button/button";
import * as UsersApi from "../../core/apis/users";
import "./style.scss";
import * as CountriesApi from "../../core/apis/countries";
import Select from "react-select";
import Congratulations from "../Congratulations/Congratulations";
class OrderMethod extends Component {
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
      Addresses: [],
      countries: [],
      cities: [],
      createnewadress: false,
      user_address_id: "",
      show: false,
      redirect: false,
    };
  }
  handlePopUp = () => {
    this.setState({ show: !this.state.show });
  };

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
    const data = {
      email: this.state.email,
      name: this.state.fullname,
      code: this.state.code,
      phonenumber: this.state.phonenumber,
      password: this.state.password,
    };
    console.log(data);
  };

  componentDidMount() {
    UsersApi.getUserAdressesDetails().then((res) => {
      this.setState({ Addresses: res });
    });

    CountriesApi.getAllCountries().then((res) => {
      const countriesClone = [];
      res.map((value) => {
        countriesClone.push({
          value: value.id,
          label: value.country_name,
        });
      });
      this.setState({ countries: countriesClone });
    });
  }

  countryChange = async (value, action) => {
    console.log("value: ", value, "action: ", action);
    this.setState({
      [action.name]: value,
    });
    if ([action.name][0] === "country") {
      await this.setState({
        selectedCountryID: value.value,
        selectedCityID: "",
      });

      CountriesApi.getCitiesByID(this.state?.selectedCountryID).then((res) => {
        const cityClone = [];
        res.data.map((value) => {
          return cityClone.push({
            value: value.id,
            label: value.city_name,
          });
        });
        this.setState({ cities: cityClone });
      });

      console.log("selected country: ", this.state?.selectedCountryID);
    }
    if ([action.name][0] === "city") {
      await this.setState({
        selectedCityID: value.label,
      });
    }
  };

  placeOrder = (e) => {
    e.preventDefault();

    let order = {
      email: sessionStorage.getItem("EMAIL"),
      payment_method_id: sessionStorage.getItem("PAYMENT INFO"),
      products_ids: JSON.parse(sessionStorage.getItem("Products")).map(
        (e) => e.href
      ),
    };

    if (this.state.createnewadress) {
      order.address = this.state.address;
      order.country_id = this.state?.selectedCountryID;
      // order.city = this.state?.selectedCityID;
      order.city = "Mina";
      order.latitude = "33";
      order.longitude = "35";
      order.postal_code = this.state.code;
    } else {
      order.user_address_id = this.state.user_address_id;
    }

    UsersApi.placeOrder(order).then((res) => {
      if (res?.data?.message === "Your order has been successfully placed.") {
        this.setState({ show: !this.state.show });
      } else alert(res?.data?.message);
    });

    console.log(order);
  };

  // Add Address
  handleAddress = (e) => {
    console.log(e.target);

    if (e.target.id === "Address") {
      this.setState({ address: e.target.value });
      console.log("Address", this.state.address);
    }
    if (e.target.id === "zipcode") {
      console.log(e.target);
      this.setState({ address: e.target.value });
      console.log("Address", this.state.address);
    }
  };

  //Add Postal Code
  handlePostal = (e) => {
    this.setState({ code: e.target.value });
    console.log("Postal", this.state.code);
  };

  render() {
    // console.log(
    //   "parse test:",
    //   JSON.parse(sessionStorage.getItem("Products")).map((e) => e.href)
    // );

    // console.log(this.state?.Addresses);
    // console.log(this.state?.user_address_id);

    return (
      <div className="order_method mt-4 ">
        <div className="container">
          <div className="row ">
            <div className="col-xl-12 col-lg-12 col-md-8 col-sm-10 mx-auto form p-4">
              <h2 className="head pb-3">Order Method</h2>
              <div className="card">
                <div
                  className="card-header head py-2l"
                  style={{
                    backgroundColor: "#fff",
                    fontSize: "20px",
                    padding: "1rem 2rem",
                  }}
                >
                  Delivery
                </div>
                <div className="col-6">
                  <Form className="justify-content-center">
                    <div className="card-body" style={{ padding: "1rem 2rem" }}>
                      <Row>
                        <Form.Group
                          as={Col}
                          md="12"
                          controlId="validationCustom01"
                          className="my-2"
                        >
                          <Form.Label>Saved Addresses</Form.Label>
                          <Form.Select
                            placeholder="Choose an address"
                            id={this.state.Addresses}
                            onChange={(e) => {
                              this.handleChange(e);
                              sessionStorage.setItem(
                                "ADDRESS",
                                e.target.value.split(" ")[0]
                              );
                              sessionStorage.setItem(
                                "LOCATION",
                                e.target.value.split(" ")[2]
                              );
                              sessionStorage.setItem(
                                "CITY",
                                e.target.value.split(" ")[3]
                              );
                              if (e.target.value === "address") {
                                this.setState((prevState) => ({
                                  createnewadress: !prevState.createnewadress,
                                }));
                              } else {
                                this.setState(() => ({
                                  createnewadress: false,
                                  user_address_id: e.target.value,
                                }));
                              }
                            }}
                          >
                            <option hidden>Choose an address</option>
                            <option value="address">
                              Create a new address
                            </option>
                            {this.state?.Addresses.map((item, index) => (
                              <option value={item.id}>
                                {item.id} - {item.address} {item.city}
                              </option>
                            ))}
                          </Form.Select>
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
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            disabled={!this.state.createnewadress}
                            required
                            type="text"
                            placeholder="Enter Address"
                            id="Address"
                            onChange={(e) => {
                              this.handleAddress(e);
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
                          <label>Country</label>
                          <Select
                            placeholder="Select Country..."
                            // disabled={!this.state.createnewadress}
                            value={this.state.country}
                            name="country"
                            onChange={this.countryChange}
                            options={this.state.countries}
                          />
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="12"
                          controlId="validationCustom01"
                          className="my-2"
                          disabled={!this.state.createnewadress}
                        >
                          <label>City</label>
                          <Select
                            placeholder="Select City..."
                            value={this.state.selectedcity}
                            name="city"
                            onChange={this.countryChange}
                            options={this.state.cities}
                          />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md="12"
                          controlId="validationCustom01"
                          className="my-2"
                        >
                          <Form.Label>Postal Code</Form.Label>
                          <Form.Control
                            disabled={!this.state.createnewadress}
                            required
                            type="text"
                            placeholder="Enter Postal Code"
                            id="postal-code"
                            onChange={(e) => {
                              this.handlePostal(e);
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
                          style={{
                            // width: "80%",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Form.Label style={{ color: "#4BA4F0" }}>
                            Shipping Cost
                          </Form.Label>
                          <Form.Label style={{ color: "#4BA4F0" }}>
                            US$1.24
                          </Form.Label>
                        </Form.Group>
                      </Row>
                    </div>
                  </Form>
                </div>
                <Row className="my-3 mx-5 d-flex justify-content-end">
                  <Button
                    // type="Link"
                    // href="/Payment_Info"
                    width="30%"
                    name="Place Order"
                    onClick={(e) => {
                      this.placeOrder(e);
                      // this.handlePopUp();
                    }}
                    isSelected={true}
                  />
                </Row>
                <Modal
                  show={this.state.show}
                  // onHide={
                  //   this.state.redirect && (
                  //     <Navigate to="/home" replace={true} />
                  //   )
                  // }
                  // onHide={this.handlePopUp}
                  centered
                >
                  <Congratulations
                    data={JSON.parse(sessionStorage.getItem("Products"))}
                  />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OrderMethod;
