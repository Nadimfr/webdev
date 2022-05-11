import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
//import "./style.scss";
import Select from "react-select";
import { getAllCountries, getCitiesByID } from "../../../core/apis/countries";
import { getsellcollectionPointById } from "../../../core/apis/sellmydevice";

class Droppmethod extends Component {
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
      countries: [],
      selectedcity: "",
      country: "",
      cities: [],
    };
  }
  componentDidMount() {
    this.getcountries();
    this.citychange();
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
  getcountries = () => {
    getAllCountries().then((res) => {
      const countriesClone = [];
      res.map((value) => {
        countriesClone.push({
          value: value.id,
          label: value.country_name,
        });
      });
      this.setState({ countries: countriesClone });
    });
  };

  countryChange = async (value, action) => {
    this.setState({
      [action.name]: value,
    });
    if ([action.name][0] === "country") {
      await this.setState({
        selectedCountryID: value.value,
        selectedCityID: "",
      });

      getCitiesByID(this.state?.selectedCountryID).then((res) => {
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
  };

  citychange = (value) => {
    this.setState({
      selectedCityID: value,
    });
    getsellcollectionPointById(this.state.selectedCityID).then((res) =>
      console.log(res)
    );
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
                  md="6"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <Form.Label>Country</Form.Label>
                  <Select
                    placeholder="Select Country..."
                    value={this.state.country}
                    name="country"
                    onChange={this.countryChange}
                    options={this.state.countries}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                  className="my-2"
                  disabled={!this.state.createnewadress}
                >
                  <Form.Label>City</Form.Label>
                  <Select
                    placeholder="Select City..."
                    value={this.state.selectedcity}
                    name="city"
                    onChange={this.citychange}
                    options={this.state.cities}
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <Form.Label>Pick Up Location</Form.Label>
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
                  md="6"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <Form.Label>Timeslot</Form.Label>
                  <Select
                    placeholder="Check availability ..."
                    options={this.state.cities}
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                  className="my-2 text-align-start"
                >
                  <p
                    style={{
                      color: "#A8A8A8",
                      float: "right",
                      fontWeight: "16px",
                    }}
                  >
                    Drop the phone at the nearest collection point The phone
                    will be subject to diagnostic and we will confirm the
                    condition.
                  </p>
                </Form.Group>
              </Row>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default Droppmethod;
