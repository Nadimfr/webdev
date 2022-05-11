import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./sellMyDevice.scss";
import * as ProductsApi from "../../core/apis/product";

class SellMyDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [],
      isLoading: false,
      id: "",
    };
  }
  componentDidMount = () => {
    this.fetchProducttype();
  };
  fetchProducttype = async () => {
    await ProductsApi.getAllProductsTypes().then((res) => {
      console.log(res);
      this.setState({ type: res });
    });
  };
  save = (id) => {
    sessionStorage.setItem("productTypeId", id);
  };

  render() {
    return (
      <div className="sellmydevice">
        <div className="row">
          <h1>Sell My Device!</h1>
          {this.state.type.map((data) => (
            <a
              className="box"
              href={`/step2/${data.id}`}
              onClick={(e) => this.save(data.id)}
            >
              <img
                src={process.env.REACT_APP_IMAGE_URL + data.image}
                alt="imag"
                class="productypeimages"
              />
              <p> {data.product_type}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default SellMyDevice;
