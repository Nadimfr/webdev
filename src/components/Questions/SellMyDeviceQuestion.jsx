import React, { useEffect, useState } from "react";
import Device from "../../assests/Images/Device.png";
import "./SellMyDeviceQuestion.scss";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as ProductsApi from "../../core/apis/product";
import * as estimate from "../../core/apis/sellmydevice";
import { NavLink, useParams } from "react-router-dom";

const SellMyDeviceQuestion = () => {
  const [screenValue, setScreenValue] = useState({
    screen1: 0,
    screen2: 0,
    screen3: 0,
    screen4: 0,
    screen5: 0,
  });
  const [step, setStep] = useState(1);

  const incrementStep = () => {
    setStep(step + 1);
  };
  const decrementStep = () => {
    setStep(step - 1);
  };
  const [page, setPage] = useState(true);

  const [data, setdata] = useState([]);
  const [length, setlength] = useState();
  const [values, setvalues] = useState();
  const [array, setarray] = useState([]);
  const [question, setquestionanswer] = useState([]);
  const [price, setPrice] = useState();
  const [estimationvalues, setestimationvalues] = useState();
  const [Name, setName] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [ModelId, setModelId] = useState("");

  const getquestions = async () => {
    await ProductsApi.getQuestionsByID(id).then((res) => {
      setdata(res);
      setlength(res.length);
    });
  };

  const getEstimationvalues = async () => {
    const data = {
      modelId: model,
      variantValueCapacityId: Capacity,
    };
    await estimate.getestimationevalues(data).then((res) => {
      setestimationvalues(res);
      console.log(res);
    });
  };

  const handlechange = async (itemid) => {
    await array.push(itemid);
  };

  const setscreen = async (item) => {
    console.log(item);
    setScreenValue({
      ...screenValue,
      ["screen" + step]: item.id,
    });
    question.push(item);
    await handlechange(item.id);
  };
  const { model } = useParams();
  const { id } = useParams();

  const Evalaute = () => {
    const data = {
      modelId: model,
      variantValueCapacityId: Capacity,
      answers: array,
    };
    estimate.evaluate(data).then((res) => setPrice(res.data.data));
  };
  //main useEffect
  useEffect(() => {
    getquestions();
    getEstimationvalues();
    const item = sessionStorage.getItem("capacity").split("/");
    setName(item[1]);
    setCapacity(item[0]);
  }, []);

  return (
    <div className="step4">
      <h1>Sell MyPhone!</h1>
      <div className="Body_container">
        <div className="Device_box">
          <div className="Box_title">{Name}</div>
          <img src={Device} alt="Device" />
          <div className="bottom">
            <div className="Row">
              <div className="Condition">Condition</div>
              <div className="Estimated">Estimated Price</div>
            </div>
            <div className="Row-1">
              <div className="Condition">
                <span style={{ paddingRight: "10%" }}>
                  <div
                    className="circle"
                    style={{ backgroundColor: "#11aee0" }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </span>
                Mint
              </div>
              <div className="Estimated">
                Up to <span style={{ color: "#4BA4F0" }}>$1,200</span>
              </div>
            </div>
            <div className="Row-1">
              <div className="Condition">
                <span style={{ paddingRight: "10%" }}>
                  <div
                    className="circle"
                    style={{ backgroundColor: "#74D301" }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </span>
                Excellent
              </div>
              <div className="Estimated">
                Up to <span style={{ color: "#4BA4F0" }}>$800</span>
              </div>
            </div>
            <div className="Row-1">
              <div className="Condition">
                <span style={{ paddingRight: "10%" }}>
                  <div
                    className="circle"
                    style={{ backgroundColor: "#FFDD55" }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </span>
                Good
              </div>
              <div className="Estimated">
                Up to <span style={{ color: "#4BA4F0" }}>$700</span>
              </div>
            </div>
            <div className="Row-1">
              <div className="Condition">
                <span style={{ paddingRight: "10%" }}>
                  <div
                    className="circle"
                    style={{ backgroundColor: "#EF8800" }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.031 0.548828L12.3776 7.77089H19.9713L13.8278 12.2344L16.1744 19.4564L10.031 14.993L3.88752 19.4564L6.23411 12.2344L0.0906525 7.77089H7.68438L10.031 0.548828Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </span>
                Fair
              </div>
              <div className="Estimated">
                Up to <span style={{ color: "#4BA4F0" }}>$600</span>
              </div>
            </div>
          </div>
        </div>
        <div className="Questions_box">
          {page === true ? (
            <div className="steps">
              <div className="Step">
                <svg
                  width="1113"
                  height="60"
                  viewBox=" -11 0 1135 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="20"
                    y1="22"
                    x2="250"
                    y2="22.0001"
                    stroke={step >= 2 ? "#4ba4f0" : "#9A9A9A"}
                    stroke-width="4"
                    className={step === 2 ? "animation" : "stroke"}
                  />
                  <line
                    x1="250"
                    y1="22"
                    x2="450"
                    y2="22.0001"
                    stroke={step >= 3 ? "#4ba4f0" : "#9A9A9A"}
                    stroke-width="4"
                    className={step === 3 ? "animation" : "stroke"}
                  />
                  <line
                    x1="450"
                    y1="22"
                    x2="650"
                    y2="22.0001"
                    stroke={step >= 4 ? "#4ba4f0" : "#9A9A9A"}
                    stroke-width="4"
                    className={step === 4 ? "animation" : "stroke"}
                  />
                  <line
                    x2="850"
                    y1="22"
                    x1="650"
                    y2="22.0001"
                    stroke={step >= 5 ? "#4ba4f0" : "#9A9A9A"}
                    stroke-width="4"
                    className={step === 5 ? "animation" : "stroke"}
                  />
                  <line
                    x1="850"
                    y1="22"
                    x2="1100"
                    y2="22.0001"
                    stroke={step >= 6 ? "#4ba4f0" : "#9A9A9A"}
                    stroke-width="4"
                    className={step === 6 ? "animation" : "stroke"}
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r={step === 1 ? "35" : "24"}
                    fill={step >= 1 ? "#4ba4f0" : "#9A9A9A"}
                    className={`circle-svg first ${step === 1 ? "CB" : "CS"}`}
                  />
                  <path
                    d="M26.3984 14.9023V32H23.0234V18.793L18.9688 20.082V17.4219L26.0352 14.9023H26.3984Z"
                    fill="white"
                    className={`circle-svg first ${step === 1 ? "CB" : "CS"}`}
                  />

                  <circle
                    cx="237"
                    cy="24"
                    fill={step >= 2 ? "#4ba4f0" : "#9A9A9A"}
                    className={`circle-svg ${step === 2 ? "CB" : "CS"}`}
                  />
                  <path
                    d="M242.844 29.3633V32H231.172V29.75L236.691 23.832C237.246 23.2148 237.684 22.6719 238.004 22.2031C238.324 21.7266 238.555 21.3008 238.695 20.9258C238.844 20.543 238.918 20.1797 238.918 19.8359C238.918 19.3203 238.832 18.8789 238.66 18.5117C238.488 18.1367 238.234 17.8477 237.898 17.6445C237.57 17.4414 237.164 17.3398 236.68 17.3398C236.164 17.3398 235.719 17.4648 235.344 17.7148C234.977 17.9648 234.695 18.3125 234.5 18.7578C234.312 19.2031 234.219 19.707 234.219 20.2695H230.832C230.832 19.2539 231.074 18.3242 231.559 17.4805C232.043 16.6289 232.727 15.9531 233.609 15.4531C234.492 14.9453 235.539 14.6914 236.75 14.6914C237.945 14.6914 238.953 14.8867 239.773 15.2773C240.602 15.6602 241.227 16.2148 241.648 16.9414C242.078 17.6602 242.293 18.5195 242.293 19.5195C242.293 20.082 242.203 20.6328 242.023 21.1719C241.844 21.7031 241.586 22.2344 241.25 22.7656C240.922 23.2891 240.523 23.8203 240.055 24.3594C239.586 24.8984 239.066 25.457 238.496 26.0352L235.531 29.3633H242.844Z"
                    fill="white"
                    className={`circle-svg d ${step === 2 ? "CB" : "CS"}`}
                  />

                  <circle
                    cx="450"
                    cy="24"
                    fill={step >= 3 ? "#4ba4f0" : "#9A9A9A"}
                    className={`circle-svg ${step === 3 ? "CB" : "CS"}`}
                  />

                  <path
                    d="M447.629 22.0039H449.434C450.012 22.0039 450.488 21.9062 450.863 21.7109C451.238 21.5078 451.516 21.2266 451.695 20.8672C451.883 20.5 451.977 20.0742 451.977 19.5898C451.977 19.1523 451.891 18.7656 451.719 18.4297C451.555 18.0859 451.301 17.8203 450.957 17.6328C450.613 17.4375 450.18 17.3398 449.656 17.3398C449.242 17.3398 448.859 17.4219 448.508 17.5859C448.156 17.75 447.875 17.9805 447.664 18.2773C447.453 18.5742 447.348 18.9336 447.348 19.3555H443.961C443.961 18.418 444.211 17.6016 444.711 16.9062C445.219 16.2109 445.898 15.668 446.75 15.2773C447.602 14.8867 448.539 14.6914 449.562 14.6914C450.719 14.6914 451.73 14.8789 452.598 15.2539C453.465 15.6211 454.141 16.1641 454.625 16.8828C455.109 17.6016 455.352 18.4922 455.352 19.5547C455.352 20.0938 455.227 20.6172 454.977 21.125C454.727 21.625 454.367 22.0781 453.898 22.4844C453.438 22.8828 452.875 23.2031 452.211 23.4453C451.547 23.6797 450.801 23.7969 449.973 23.7969H447.629V22.0039ZM447.629 24.5703V22.8242H449.973C450.902 22.8242 451.719 22.9297 452.422 23.1406C453.125 23.3516 453.715 23.6562 454.191 24.0547C454.668 24.4453 455.027 24.9102 455.27 25.4492C455.512 25.9805 455.633 26.5703 455.633 27.2188C455.633 28.0156 455.48 28.7266 455.176 29.3516C454.871 29.9688 454.441 30.4922 453.887 30.9219C453.34 31.3516 452.699 31.6797 451.965 31.9062C451.23 32.125 450.43 32.2344 449.562 32.2344C448.844 32.2344 448.137 32.1367 447.441 31.9414C446.754 31.7383 446.129 31.4375 445.566 31.0391C445.012 30.6328 444.566 30.125 444.23 29.5156C443.902 28.8984 443.738 28.168 443.738 27.3242H447.125C447.125 27.7617 447.234 28.1523 447.453 28.4961C447.672 28.8398 447.973 29.1094 448.355 29.3047C448.746 29.5 449.18 29.5977 449.656 29.5977C450.195 29.5977 450.656 29.5 451.039 29.3047C451.43 29.1016 451.727 28.8203 451.93 28.4609C452.141 28.0938 452.246 27.668 452.246 27.1836C452.246 26.5586 452.133 26.0586 451.906 25.6836C451.68 25.3008 451.355 25.0195 450.934 24.8398C450.512 24.6602 450.012 24.5703 449.434 24.5703H447.629Z"
                    fill="white"
                    className={`circle-svg d ${step === 2 ? "CB" : "CS"}`}
                  />

                  <circle
                    cx="663"
                    cy="24"
                    fill={step >= 4 ? "#4ba4f0" : "#9A9A9A"}
                    className={`circle-svg ${step === 4 ? "CB" : "CS"}`}
                  />
                  <path
                    d="M669.125 25.625V28.2734H656.832L656.668 26.2227L663.781 14.9375H666.465L663.559 19.8008L660.02 25.625H669.125ZM667.191 14.9375V32H663.816V14.9375H667.191Z"
                    fill="white"
                    className={`circle-svg d ${step === 2 ? "CB" : "CS"}`}
                  />
                  <circle
                    cx="876"
                    cy="24"
                    fill={step >= 5 ? "#4ba4f0" : "#9A9A9A"}
                    className={`circle-svg ${step === 5 ? "CB" : "CS"}`}
                  />
                  <path
                    d="M873.348 24.2305L870.652 23.5859L871.625 14.9375H881.211V17.668H874.402L873.98 21.4531C874.207 21.3203 874.551 21.1797 875.012 21.0312C875.473 20.875 875.988 20.7969 876.559 20.7969C877.387 20.7969 878.121 20.9258 878.762 21.1836C879.402 21.4414 879.945 21.8164 880.391 22.3086C880.844 22.8008 881.188 23.4023 881.422 24.1133C881.656 24.8242 881.773 25.6289 881.773 26.5273C881.773 27.2852 881.656 28.0078 881.422 28.6953C881.188 29.375 880.832 29.9844 880.355 30.5234C879.879 31.0547 879.281 31.4727 878.562 31.7773C877.844 32.082 876.992 32.2344 876.008 32.2344C875.273 32.2344 874.562 32.125 873.875 31.9062C873.195 31.6875 872.582 31.3633 872.035 30.9336C871.496 30.5039 871.062 29.9844 870.734 29.375C870.414 28.7578 870.246 28.0547 870.23 27.2656H873.582C873.629 27.75 873.754 28.168 873.957 28.5195C874.168 28.8633 874.445 29.1289 874.789 29.3164C875.133 29.5039 875.535 29.5977 875.996 29.5977C876.426 29.5977 876.793 29.5156 877.098 29.3516C877.402 29.1875 877.648 28.9609 877.836 28.6719C878.023 28.375 878.16 28.0312 878.246 27.6406C878.34 27.2422 878.387 26.8125 878.387 26.3516C878.387 25.8906 878.332 25.4727 878.223 25.0977C878.113 24.7227 877.945 24.3984 877.719 24.125C877.492 23.8516 877.203 23.6406 876.852 23.4922C876.508 23.3438 876.105 23.2695 875.645 23.2695C875.02 23.2695 874.535 23.3672 874.191 23.5625C873.855 23.7578 873.574 23.9805 873.348 24.2305Z"
                    fill="white"
                    className={`circle-svg d ${step === 2 ? "CB" : "CS"}`}
                  />

                  <circle
                    cx="1089"
                    cy="24"
                    fill={step >= 6 ? "#4ba4f0" : "#9A9A9A"}
                    className={`circle-svg last  ${step === 6 ? "CB" : "CS"}`}
                  />
                  <path
                    d="M1091.88 14.7617H1092.37V17.457H1092.17C1091.28 17.457 1090.49 17.5898 1089.79 17.8555C1089.1 18.1211 1088.51 18.5 1088.02 18.9922C1087.55 19.4766 1087.18 20.0625 1086.92 20.75C1086.67 21.4375 1086.55 22.207 1086.55 23.0586V25.8945C1086.55 26.5039 1086.61 27.043 1086.72 27.5117C1086.85 27.9727 1087.02 28.3594 1087.25 28.6719C1087.48 28.9766 1087.76 29.207 1088.07 29.3633C1088.38 29.5117 1088.73 29.5859 1089.12 29.5859C1089.49 29.5859 1089.82 29.5078 1090.12 29.3516C1090.43 29.1953 1090.68 28.9766 1090.89 28.6953C1091.11 28.4062 1091.28 28.0703 1091.39 27.6875C1091.5 27.2969 1091.56 26.8711 1091.56 26.4102C1091.56 25.9492 1091.5 25.5234 1091.39 25.1328C1091.28 24.7422 1091.11 24.4062 1090.89 24.125C1090.68 23.8359 1090.41 23.6133 1090.1 23.457C1089.79 23.3008 1089.43 23.2227 1089.04 23.2227C1088.51 23.2227 1088.04 23.3477 1087.64 23.5977C1087.24 23.8398 1086.93 24.1523 1086.7 24.5352C1086.47 24.918 1086.35 25.3203 1086.34 25.7422L1085.32 25.0859C1085.34 24.4844 1085.46 23.9141 1085.69 23.375C1085.93 22.8359 1086.25 22.3594 1086.65 21.9453C1087.07 21.5234 1087.56 21.1953 1088.14 20.9609C1088.72 20.7188 1089.37 20.5977 1090.1 20.5977C1090.89 20.5977 1091.59 20.75 1092.2 21.0547C1092.8 21.3594 1093.31 21.7773 1093.72 22.3086C1094.12 22.8398 1094.43 23.4531 1094.63 24.1484C1094.84 24.8438 1094.94 25.5859 1094.94 26.375C1094.94 27.2031 1094.8 27.9727 1094.53 28.6836C1094.26 29.3945 1093.88 30.0156 1093.37 30.5469C1092.87 31.0781 1092.27 31.4922 1091.56 31.7891C1090.86 32.0859 1090.07 32.2344 1089.2 32.2344C1088.29 32.2344 1087.46 32.0703 1086.72 31.7422C1085.99 31.4062 1085.36 30.9375 1084.82 30.3359C1084.29 29.7344 1083.88 29.0195 1083.59 28.1914C1083.31 27.3633 1083.17 26.457 1083.17 25.4727V24.1602C1083.17 22.7852 1083.37 21.5273 1083.77 20.3867C1084.18 19.2383 1084.76 18.2461 1085.52 17.4102C1086.27 16.5664 1087.19 15.9141 1088.26 15.4531C1089.33 14.9922 1090.54 14.7617 1091.88 14.7617Z"
                    fill="white"
                    className={`circle-svg last  ${step === 6 ? "CB" : "CS"}`}
                  />
                </svg>
              </div>
              <div className="QnA">
                <div className="Question">{data[step - 1]?.question}</div>
                <div className="Answers">
                  {data[step - 1]?.question_answer?.map((item, index) => {
                    return (
                      <span
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <FormControlLabel
                            control={<Radio />}
                            onChange={() => setscreen(item)}
                            checked={
                              screenValue["screen" + step] === item.id
                                ? true
                                : false
                            }
                          />

                          {item.answer}
                        </span>
                        <text
                          style={{
                            fontSize: "16px",
                            color: "#545454",
                            marginLeft: "6%",
                          }}
                        >
                          {" "}
                          {item.description}
                        </text>
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="Buttons">
                {step === length ? (
                  <div
                    className="Continue_btn"
                    onClick={() => {
                      if (screenValue["screen" + step] === 0)
                        alert("Please choose an option");
                      else {
                        setPage(false);
                        Evalaute();
                      }
                    }}
                  >
                    Evaluate
                  </div>
                ) : (
                  <div
                    className="Continue_btn"
                    onClick={() => {
                      if (screenValue["screen" + step] === 0)
                        alert("Please choose an option");
                      else incrementStep();
                    }}
                  >
                    Continue
                  </div>
                )}
                {step > 1 && (
                  <div className="Back_btn" onClick={() => decrementStep()}>
                    Back
                  </div>
                )}
              </div>
            </div>
          ) : (
            // <SellMyDevice2 />
            <div className="Device_Estimated_Value_Box">
              <div className="header">
                <h4>Device Estimated Value</h4>
                <p>{price}</p>
              </div>
              <div className="QA">
                <p>Questions </p>

                <div className="Answers">
                  {question?.length > 0 &&
                    question?.map((item, index) => {
                      return (
                        <div className="Row">
                          {data
                            .filter((x) => x.id === item.question_id)
                            .map((item) => (
                              <div className="Questions">{item.question}</div>
                            ))}
                          <div className="Answer">{item.answer}</div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="Buttons">
                <div className="Cancel_btn">
                  <a href="/products">Rejected</a>
                </div>
                <div className="Sell_btn">
                  <NavLink to="/step5">Sell Device</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellMyDeviceQuestion;
