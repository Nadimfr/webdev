import React, { useEffect, useState } from "react";
import "./menu.scss";
import "../RespoMenu/respomenu.scss";
import { Link, NavLink, Outlet } from "react-router-dom";

const Menu = (ismenuLoading) => {
  const [showData, setShowData] = useState({ Brands: false, Menu: false });
  const toggleMenu = () => {
    setShowData({ ...showData, Menu: !showData.Menu });
  };
  const data = [
    {
      title: "Mobile Devices",
      brand: ["Apple", "Huawei", "LG", "Nokia", "Samsung"],
      serie: ["Accessories"],
    },
    {
      title: "Laptops",
      brand: [
        "Acer",
        "Asus",
        "Dell",
        "HP",
        "Lenovo",
        "Mac",
        "Microsoft Surface",
      ],
      serie: ["Accessories"],
    },
    {
      title: "Tablets",
      brand: [
        "Acer",
        "Apple",
        "Asus",
        "Huawei",
        "Lenovo",
        "LG",
        "Microsoft",
        "Samsung",
      ],
      serie: ["Accessories"],
    },
    {
      title: "Game Consoles",
      brand: [
        "Nintendo",
        "Playstation 4",
        "Playstation 5",
        "PSP",
        "Xbox",
        "Xbox one",
        "Xbox 360",
      ],
      serie: ["Accessories"],
    },
    {
      title: "Audio",
      brand: [
        "Anker",
        "Apple",
        "Bang & Olufen",
        "Beats",
        "Beno",
        "Bose",
        "JBL",
        "Logitech",
        "Samsung",
        "Sony",
      ],
      serie: ["Accessories", "Earphones", "Headphones", "Radio", "Speaker"],
    },
    {
      title: "Wearable",
      brand: ["Apple", "Huawei", "Samsung"],
      serie: ["VR Headsets", "Watch", "Whristleband"],
    },
  ];
  const [isLoading, setLoading] = useState(true);
  const [productTypes, setProductTypes] = useState([]);

  return (
    <>
      <div className="Menu">
        <div className="elements">
          <Link className="Link" to="/ProductList">
            All Products
          </Link>
          {/* <div className="UL">
            {productTypes[0]?.map((i) => (
              <div className="row">
                <Link className="Link" to="/">
                  {i.product_type}
                </Link>
                <div>
                  {i.product_brand.map((i) => (
                    <Link className="Link" to="/">
                      {i.brand.brand}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <Link className=" row Link" to="/">
                Others
              </Link>
            </div>
          </div> */}
        </div>
        {/* {productTypes[0]?.map((e) => {
          return (
            <div className="elements">
              <Link className="Link" to={`/ProductList/${e.id}`} key={e.id}>
                {e.product_type}
              </Link>
              <div className="UL">
                <div className="row">
                  <h6 style={{ paddingTop: "15px" }}>Brands</h6>
                  <div>
                    {e.product_brand.map((i) => (
                      <Link className="Link" to="/">
                        {i.brand.brand}
                      </Link>
                    ))}
                  </div>

                  <Link className="Link" to="/" style={{ fontSize: "15px" }}>
                    see more
                  </Link>
                </div>
                <div className="row">
                  <h6 style={{ paddingTop: "15px" }}>Serie</h6>
                  {e.product_brand.map((i) =>
                    i.serie.length === 0 ? null : (
                      <div>
                        {i.serie.length > 5
                          ? i.serie.slice(0, 5).map((v) => (
                              <Link className="Link" to="/">
                                {v.serie}
                              </Link>
                            ))
                          : i.serie.map((v, index) => (
                              <Link className="Link" key={index} to="/">
                                {v.serie}
                              </Link>
                            ))}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })} */}
        {/* <Outlet /> */}

        <div className="elements">
          <Link className="Link" to="/">
            Others
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
