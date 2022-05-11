import React, { useEffect, useState } from "react";
import "./Address.scss";
import { Form, Row, Col } from "react-bootstrap";
import SimpleMap from "../../../Maps/maps";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as UsersApi from "../../../../core/apis/users";
import * as CountriesApi from "../../../../core/apis/countries";

function Address() {
  const [chosenAdd, setChosenAdd] = useState(0);
  const [countAdd, setCountAdd] = useState(1);
  const [AddInfo, setAddInfo] = useState([
    {
      id: countAdd,
      AddNumType: "",
      AddholderName: "",
      country: "",
      postal: "",
    },
  ]);

  const addAdd = () => {
    setCountAdd(countAdd + 1);
    console.log("Add INFO: ", AddInfo);
    let Add = AddInfo;
    Add.push({
      id: AddInfo.length + 1,
      AddNumType: "",
      AddholderName: "",
      country: "",
      postal: "",
    });
    setAddInfo(Add);
  };

  const deleteAdd = (id) => {
    let Add = AddInfo.filter((item) => item.id !== id);
    setAddInfo(Add);
  };

  const [addresses, setAddresses] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    UsersApi.getUserAdressesDetails().then((res) => {
      setAddresses(res);
    });

    CountriesApi.getAllCountryNames().then((res) => {
      setCountries(res);
    });
  }, []);

  const deleteAddress = (address_id) => {
    UsersApi.deleteUserAddress(address_id)
      .then((res) => {
        if (!res.data.success) {
          this.setState({
            error: {
              visible: true,
              type: "error",
              text: res.data.message,
            },
          });
        } else {
          this.setState({
            error: {
              visible: true,
              type: "success",
              text: res.data.message,
            },
          });
        }
      })
      .then(() => {
        UsersApi.getUserAdressesDetails().then((res) => {
          setAddresses(res);
        });
      })
      .catch((err) => {
        alert("something went wrong please try again later");
      });
  };

  return (
    <div className="add">
      <div className="address_info py-4">
        {addresses.map((item, index) => (
          <div key={item.id} className="add">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="radio">
                <FormControlLabel
                  control={<Radio />}
                  checked={item.id === chosenAdd}
                  onChange={(e) => {
                    setChosenAdd(item.id);
                    console.log(item.id);
                  }}
                />
              </div>
              <Form noValidate className="justify-content-center">
                <Row>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom01"
                    className="my-2"
                  >
                    <div className="trash">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Form.Label>Address {index + 1} </Form.Label>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteAddress(item.id)}
                        >
                          X
                        </span>
                      </div>
                      {item.id === AddInfo.length && AddInfo.length > 1 && (
                        <a onClick={() => deleteAdd(item.id)}>
                          <svg
                            width="18"
                            height="23"
                            viewBox="0 0 18 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.28571 20.4444C1.28571 21.85 2.44286 23 3.85714 23H14.1429C15.5571 23 16.7143 21.85 16.7143 20.4444V5.11111H1.28571V20.4444ZM18 1.27778H13.5L12.2143 0H5.78571L4.5 1.27778H0V3.83333H18V1.27778Z"
                              fill="#9A9A9A"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                    <Form.Control
                      required
                      type="Address"
                      placeholder="Enter Address"
                      id="Address"
                      value={item.address}
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
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter City"
                      value={item.city}
                      id="City"
                    />
                    <Form.Control.Feedback type="invalid">
                      Field can't be empty
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="my-2"
                  >
                    <Form.Label>Country</Form.Label>
                    <Form.Select
                      id="Country"
                      onChange={(e) => {
                        //this.handleChange(e);
                      }}
                    >
                      <option selected>{item.country_id}</option>
                      {countries.map((country, index) => (
                        <option>{country.name}</option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Field can't be empty
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="my-2"
                  >
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Code"
                      id="Code"
                      value={item.postal_code}
                    />
                    <Form.Control.Feedback type="invalid">
                      Field can't be empty
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </Form>
            </div>
            <SimpleMap />
          </div>
        ))}
        <div
          className="add_new_cart_container"
          onClick={() => {
            addAdd();
          }}
        >
          <svg
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1 10.5H18.9V18.9H10.5V23.1H18.9V31.5H23.1V23.1H31.5V18.9H23.1V10.5ZM21 0C9.408 0 0 9.408 0 21C0 32.592 9.408 42 21 42C32.592 42 42 32.592 42 21C42 9.408 32.592 0 21 0ZM21 37.8C11.739 37.8 4.2 30.261 4.2 21C4.2 11.739 11.739 4.2 21 4.2C30.261 4.2 37.8 11.739 37.8 21C37.8 30.261 30.261 37.8 21 37.8Z"
              fill="#4BA4F0"
            />
          </svg>
          <div className="add_new_cart">Add new Card</div>
        </div>
      </div>
    </div>
  );
}
export default Address;
