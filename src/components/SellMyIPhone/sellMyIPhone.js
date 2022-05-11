import React, { Component } from "react";
import "./sellMyIPhone.scss";
import blue_iphone from "../../assests/Images/blue_iphone.png";
import * as ProductsApi from "../../core/apis/product";
import Select from "react-select";

class SellMyIphone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Model: [],
      isLoading: false,
      id: "",
      brandId: "",
      capacity: [],
      variantarray: [],
      variants: [],
      list: [],
    };
  }

  componentDidMount = () => {
    this.fetchModels();
  };

  fetchModels = async () => {
    let typeid = window.location.pathname.split("/");
    await this.setState({ id: typeid[2], brandId: typeid[3] });
    const data = {
      product_type_id: this.state.id,
      brand_id: this.state.brandId,
    };
    await ProductsApi.getAllModels(data).then((res) => {
      const array = res.variant_values?.map((item) =>
        this.state.list.push(item.variant.id === 1)
      );
      console.log(res);
      this.setState({ Model: res });
      this.setState({ variants: res.variant_values });
    });
  };

  save = (id) => {
    sessionStorage.setItem("capacity", id);
  };

  render() {
    return (
      <div className="sellmyiphone">
        <div className="row">
          <h1>Choose a Model</h1>
          {this.state.Model.map((data) => (
            <div className="box">
              <img src={blue_iphone} alt="description " />
              <p>{data.model}</p>
              <p>{data.base_price}</p>
              <div>
                {data.variant_values.slice(0, 3).map((item) => (
                  <>
                    {item.variant.id === 1 ? (
                      <div>
                        {" "}
                        <a
                          href={"/step4/" + this.state.id + "/" + data.id}
                          onClick={(e) => this.save(item.id + "/" + data.model)}
                        >
                          {" "}
                          {item.value}{" "}
                        </a>{" "}
                      </div>
                    ) : (
                      " "
                    )}
                  </>
                ))}
              </div>
              <div>
                {data.variant_values
                  .slice(4, data.variant_values.length)
                  .map((item) => (
                    <>
                      {item.variant.id === 1 ? (
                        <div>
                          {" "}
                          <a
                            href={"/step4/" + this.state.id + "/" + data.id}
                            onClick={(e) =>
                              this.save(item.id + "/" + data.model)
                            }
                          >
                            {" "}
                            {item.value}{" "}
                          </a>{" "}
                        </div>
                      ) : (
                        " "
                      )}
                    </>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SellMyIphone;
