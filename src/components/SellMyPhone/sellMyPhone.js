import React, { Component } from "react";
import "./sellMyPhone.scss";
import * as ProductsApi from "../../core/apis/product";

class SellMyPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: [],
      isLoading: false,
      id: "",
      typeid: "",
    };
  }

  componentDidMount = () => {
    this.fetchBrandsBasedonProductType();
  };
  fetchBrandsBasedonProductType = async () => {
    let typeid = window.location.pathname.split("/");
    typeid = typeid[typeid.length - 1];
    await this.setState({ id: typeid });
    const data = {
      product_type_id: this.state.id,
    };
    await ProductsApi.getAllBrands(data).then((res) => {
      console.log(res);
      this.setState({ brand: res });
    });
  };

  save = (id) => {
    sessionStorage.setItem("brandId", id);
  };

  render() {
    return (
      <div className="sellmyphone">
        <div className="row">
          <h1>Choose a Brand</h1>
          {this.state.brand.map((data) => (
            <a
              className="box"
              href={`/step3/${this.state.id}/${data.id}`}
              onClick={(e) => this.save(data.id)}
            >
              <img
                src={process.env.REACT_APP_IMAGE_URL + data.image}
                alt="imag"
                class="productypeimages"
              />
              <p> {data.brand}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default SellMyPhone;
