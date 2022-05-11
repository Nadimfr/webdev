import React, { useState, useEffect, useContext } from "react";
import "./ProductListing.scss";
import Menu from "../Menu/menu.jsx";
import Search from "../Search/search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Filter from "../../assests/icons/Yfilter.svg";
import * as ProductsApi from "../../core/apis/product";
import { TailSpin } from "react-loader-spinner";
import { Card } from "../Card/Card";
import Footer from "../Footer/footer";
import CategoryFilter from "../SideFilter/CategoryFilter/CategoryFilter";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slider";
import "../Slider/Slider.scss";
import { AppContext } from "../../AppContext";
import { useParams } from "react-router-dom";

const ProductList = (props) => {
  const [value, setValue] = useState([0.1, 2000]);
  const [isLoading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [message, seterrormessage] = useState();
  const [success, setsuccess] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const [check, setCheck] = useState([]);
  const [checkSerie, setCheckSerie] = useState([]);
  const [checkCategory, setCheckCategory] = useState([]);
  const [checkVariant, setCheckVariant] = useState([]);
  const [checkSearch, setCheckSearch] = useState("");
  const [checkSortBy, setCheckSortBy] = useState("");

  const handleChange = () =>
    setIsOpen(isOpen === true && !matches ? false : true);
  const [filterId, setFilterId] = useState([]);
  let params = useParams();
  let id = params.id;

  const getData = async () => {
    await ProductsApi.getProductTypeFiltersById(id).then((res) => {
      setFilterId(res);
    });
  };

  const SearchFetch = async (data) => {
    await ProductsApi.getAllProductsList(data).then((res) => {
      if (res.success) {
        setsuccess(res.success);
        setProductList([res.data]);
      } else {
        setsuccess(res.success);
        seterrormessage(res.message);
      }
      setLoading(false);
    });
  };
  const [data, setData] = useState({});
  let testData = {
    productTypeId: id,
    brandId: check,
    serieId: checkSerie,
    categoryId: checkCategory,
    variantId: checkVariant,
    modelName: checkSearch,
    minPrice: value[0],
    maxPrice: value[1],
    sortBy: checkSortBy,
  };

  useEffect(() => {
    getData();

    if (testData.modelName === "") {
      delete testData.modelName;
    }
    if (testData.sortBy === "") {
      delete testData.sortBy;
    }
    SearchFetch(testData);
  }, [id, data]);

  //Checkbox Selection
  const handleChangeCheckBox = (e) => {
    const targetName = e.target.name;
    if (e.target.checked) {
      if (e.target.value === "brands") {
        setCheck((prev) => [...prev, ...targetName]);
      }
      if (e.target.value === "series") {
        setCheckSerie((prev) => [...prev, ...targetName]);
      }
      if (e.target.value === "categories") {
        setCheckCategory((prev) => [...prev, ...targetName]);
      }
      if (e.target.value === "variant") {
        setCheckVariant((prev) => [...prev, ...targetName]);
      }
    } else {
      if (e.target.value === "brands") {
        setCheck(check.filter((num) => num !== targetName));
      }
      if (e.target.value === "series") {
        setCheckSerie(check.filter((num) => num !== targetName));
      }
      if (e.target.value === "categories") {
        setCheckCategory(check.filter((num) => num !== targetName));
      }
      if (e.target.value === "variant") {
        setCheckVariant(check.filter((num) => num !== targetName));
      }
    }
    setData({
      ...data,
      brandId: check,
      serieId: checkSerie,
      categoryId: checkCategory,
      variantId: checkVariant,
    });
  };

  //Search Engine
  const handleSearch = (e) => {
    setCheckSearch(e.target.value);
    console.log("search", checkSearch);
    setData({
      ...data,
      modelName: checkSearch,
    });
  };

  //Slider Price
  const handleChange2 = (event, newValue) => {
    setValue(newValue);
    setData({ ...data, minPrice: newValue[0], maxPrice: newValue[1] });
  };
  const handleChangeInput = (e) => {
    if (e.target.name === "min") {
      let oldValue = [...value];
      oldValue[0] = +e.target.value;
      setValue(oldValue);
    }
    if (e.target.name === "max") {
      let oldValue = [...value];
      oldValue[1] = +e.target.value;
      setValue(oldValue);
    }
  };
  //sortby
  const handleChange6 = (event) => {
    setCheckSortBy(event.target.value);
    console.log(checkSortBy);
    setData({ ...data, sortBy: checkSortBy });
  };

  //filterId format
  let filterIdFormat = [{ title: "", data: [] }];
  Object.entries(filterId).map((e) =>
    filterIdFormat.push({ title: e[0], data: e[1] })
  );
  const marks = [
    { value: 0.1, label: "min" },
    { value: 2000, label: "max" },
  ];

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 800px)").matches
  );
  const listener = (e) => {
    setMatches(!matches);
    if (!matches) setIsOpen(true);
    else setIsOpen(false);
  };
  const media = window.matchMedia("(min-width: 800px)");
  media.addListener(listener);

  if (isLoading) {
    return (
      <div className="tailSpin">
        <TailSpin height="60" width="60" color="#4ba4f0" ariaLabel="loading" />
      </div>
    );
  } else {
    return (
      <div>
        <div className="list">
          <Menu />
          <div className="search">
            <Search
              placeholder="Search Here"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div className="sort">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                SortBy
              </InputLabel>

              <Select
                value={checkSortBy}
                onChange={handleChange6}
                displayEmpty
                inputProps={{ MenuProps: { disableScrollLock: true } }}
              >
                <MenuItem value={1}>Newest Products</MenuItem>
                <MenuItem value={2}>Oldest Products</MenuItem>
                <MenuItem value={3}>Ascendent Price</MenuItem>
                <MenuItem value={4}>Descendent Price</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="listBody">
            <img
              src={Filter}
              alt="filter"
              width="50"
              height="50"
              onClick={handleChange}
              className="image"
            />
            <div
              className={
                isOpen === false ? "sideFilter translateX " : "sideFilter"
              }
            >
              <div className="filter-category">
                <div className="filter-category-title">Price</div>
                <Box>
                  <Slide
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange2}
                    onMouseUp={() => {
                      // console.log("mouse left");
                    }}
                    min={10}
                    max={2000}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
                  <div className="min-max-filter">
                    <div className="filter-value">
                      <div>Min($)</div>
                      <input
                        name="min"
                        onChange={handleChangeInput}
                        value={value[0]}
                        type="number"
                      />
                    </div>
                    <div className="filter-value">
                      <div>Max($)</div>
                      <input
                        name="max"
                        onChange={handleChangeInput}
                        value={value[1]}
                        type="number"
                      />
                    </div>
                  </div>
                </Box>
              </div>

              {filterIdFormat.slice(1)?.map((e) => {
                return (
                  <>
                    {e.data.length !== 0 ? (
                      <CategoryFilter
                        title={e?.title}
                        data={e.data}
                        onChange={(i) => {
                          handleChangeCheckBox(i);
                        }}
                      />
                    ) : null}
                  </>
                );
              })}
            </div>
            <div
              className={isOpen === false ? "products marginLeft" : "products"}
            >
              {success ? (
                <>
                  {productList[0].map((data) => (
                    <Card
                      picture={data.product_image[0]?.image}
                      price={data.offered_price}
                      href={data.id}
                      deviceName={data.model.model}
                      productDescription={data.product_description}
                    />
                  ))}
                </>
              ) : (
                <div className="message"> {message}</div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default ProductList;

// export default function ProductList() {
//   return (
//     <>
//       <h2>ProductList: 0{params.id}</h2>
//       <Menu />
//     </>
//   );
// }
