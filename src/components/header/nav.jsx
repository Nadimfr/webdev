import React, { useEffect, useState } from "react";
import "./logout.scss";
import { Navbar, Button, Modal } from "react-bootstrap";
import cart from "../../assests/icons/cart.svg";
import logo from "../../assests/Images/logo.png";
import "./style.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [modal, setModal] = useState("hidden");
  const [modal2, setModal2] = useState("hidden");
  const [modal3, setModal3] = useState("0");
  const [modal4, setModal4] = useState("0");

  const handleClick = (e) => {
    if (modal === "hidden" && modal4 === "0") {
      setModal("visible");
      setModal4("1");
    } else {
      setModal("hidden");
      setModal4("0");
    }
  };

  const handleClick2 = (e) => {
    if (modal2 === "hidden" && modal3 === "0") {
      setModal2("visible");
      setModal3("1");
    } else {
      setModal2("hidden");
      setModal3("0");
    }
  };

  const [show, setShow] = useState(false);
  const isLoggedIn = props.isLoggedIn;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {}, [isLoggedIn]);

  return (
    <Navbar className="main-container">
      <Navbar.Brand href="/" className="d-flex">
        <Link to="/">
          <img
            style={{
              height: "30px",
              position: "absolute",
              left: "5%",
              top: "25%",
            }}
            src={logo}
            alt="logo"
          />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="basic-navbar-nav"
        style={{ marginRight: "5%", gap: "10px" }}
      >
        {isLoggedIn ? (
          <>
            <Navbar.Text className="linkk">
              <div className="notification">
                <div onClick={handleClick} className="icon web">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3333 30.917C14.0292 30.917 15.4167 29.5295 15.4167 27.8337H9.25C9.25 29.5295 10.6375 30.917 12.3333 30.917ZM21.5833 21.667V13.9587C21.5833 9.22574 19.0704 5.26366 14.6458 4.21533V3.16699C14.6458 1.88741 13.6129 0.854492 12.3333 0.854492C11.0537 0.854492 10.0208 1.88741 10.0208 3.16699V4.21533C5.61167 5.26366 3.08333 9.21033 3.08333 13.9587V21.667L0 24.7503V26.292H24.6667V24.7503L21.5833 21.667ZM18.5 23.2087H6.16667V13.9587C6.16667 10.1353 8.49458 7.02116 12.3333 7.02116C16.1721 7.02116 18.5 10.1353 18.5 13.9587V23.2087Z"
                      fill="#041C3F"
                    />
                  </svg>
                </div>
                <a className=" icon mobile" href="/notification">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3333 30.917C14.0292 30.917 15.4167 29.5295 15.4167 27.8337H9.25C9.25 29.5295 10.6375 30.917 12.3333 30.917ZM21.5833 21.667V13.9587C21.5833 9.22574 19.0704 5.26366 14.6458 4.21533V3.16699C14.6458 1.88741 13.6129 0.854492 12.3333 0.854492C11.0537 0.854492 10.0208 1.88741 10.0208 3.16699V4.21533C5.61167 5.26366 3.08333 9.21033 3.08333 13.9587V21.667L0 24.7503V26.292H24.6667V24.7503L21.5833 21.667ZM18.5 23.2087H6.16667V13.9587C6.16667 10.1353 8.49458 7.02116 12.3333 7.02116C16.1721 7.02116 18.5 10.1353 18.5 13.9587V23.2087Z"
                      fill="#041C3F"
                    />
                  </svg>
                </a>
                <div
                  style={{ visibility: modal, opacity: modal4 }}
                  className="box2"
                >
                  <div className="head">
                    <p>Notifications</p>
                    <p> clear all</p>
                  </div>
                  <div className="col">
                    <div>
                      <p>Account Details</p>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 2.21214L15.2879 0.5L8.5 7.28786L1.71214 0.5L0 2.21214L6.78786 9L0 15.7879L1.71214 17.5L8.5 10.7121L15.2879 17.5L17 15.7879L10.2121 9L17 2.21214Z"
                          fill="#A8A8A8"
                        />
                      </svg>
                    </div>
                    <p className="time">2 min ago</p>
                  </div>

                  <div className="col">
                    <div>
                      <p>Account Details</p>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 2.21214L15.2879 0.5L8.5 7.28786L1.71214 0.5L0 2.21214L6.78786 9L0 15.7879L1.71214 17.5L8.5 10.7121L15.2879 17.5L17 15.7879L10.2121 9L17 2.21214Z"
                          fill="#A8A8A8"
                        />
                      </svg>
                    </div>
                    <p className="time">2 min ago</p>
                  </div>
                  <a className="view" href="/notification">
                    View all
                  </a>
                </div>
              </div>
            </Navbar.Text>
            <Navbar.Text className="linkk">
              {" "}
              <a href="/my-orders">
                <img src={cart} alt="icon cart" width="20" height="20" />{" "}
              </a>
            </Navbar.Text>
            <div className="log">
              <div onClick={handleClick2} className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8327 12.9997C16.3318 12.9997 19.166 10.1655 19.166 6.66634C19.166 3.16717 16.3318 0.333008 12.8327 0.333008C9.33352 0.333008 6.49935 3.16717 6.49935 6.66634C6.49935 10.1655 9.33352 12.9997 12.8327 12.9997ZM12.8327 16.1663C8.60518 16.1663 0.166016 18.288 0.166016 22.4997V25.6663H25.4993V22.4997C25.4993 18.288 17.0602 16.1663 12.8327 16.1663Z"
                    fill="#041C3F"
                  />
                </svg>
              </div>
              <div
                style={{ visibility: modal2, opacity: modal3 }}
                className="box"
              >
                <div>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.478 10.54C16.518 10.24 16.538 9.93 16.538 9.6C16.538 9.28 16.518 8.96 16.468 8.66L18.498 7.08C18.678 6.94 18.728 6.67 18.618 6.47L16.698 3.15C16.578 2.93 16.328 2.86 16.108 2.93L13.718 3.89C13.218 3.51 12.688 3.19 12.098 2.95L11.738 0.41C11.698 0.17 11.498 0 11.258 0H7.418C7.178 0 6.988 0.17 6.948 0.41L6.588 2.95C5.998 3.19 5.458 3.52 4.968 3.89L2.578 2.93C2.358 2.85 2.108 2.93 1.988 3.15L0.0780003 6.47C-0.0419997 6.68 -0.00199977 6.94 0.198 7.08L2.228 8.66C2.178 8.96 2.138 9.29 2.138 9.6C2.138 9.91 2.158 10.24 2.208 10.54L0.178 12.12C-0.00199975 12.26 -0.0519996 12.53 0.0580004 12.73L1.978 16.05C2.098 16.27 2.348 16.34 2.568 16.27L4.958 15.31C5.458 15.69 5.988 16.01 6.578 16.25L6.938 18.79C6.988 19.03 7.178 19.2 7.418 19.2H11.258C11.498 19.2 11.698 19.03 11.728 18.79L12.088 16.25C12.678 16.01 13.218 15.69 13.708 15.31L16.098 16.27C16.318 16.35 16.568 16.27 16.688 16.05L18.608 12.73C18.728 12.51 18.678 12.26 18.488 12.12L16.478 10.54ZM9.338 13.2C7.358 13.2 5.738 11.58 5.738 9.6C5.738 7.62 7.358 6 9.338 6C11.318 6 12.938 7.62 12.938 9.6C12.938 11.58 11.318 13.2 9.338 13.2Z"
                      fill="#4BA4F0"
                    />
                  </svg>

                  <a href="/account_details/personal_info">Account Details</a>
                </div>
                <div>
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
                      fill="#4BA4F0"
                    />
                  </svg>
                  <Button className="cart" onClick={handleShow}>
                    <p>Log out</p>
                  </Button>

                  <Modal show={show} onHide={handleClose} centered>
                    <Modal.Body>
                      <div className="Logout">
                        <div className="Box">
                          <div className="Title">
                            Are you sure you want to Logout?
                          </div>
                          <div className="Buttons">
                            <div className="Button_1" onClick={handleClose}>
                              Cancel
                            </div>
                            <div className="Button_2">
                              <a href="/"> Logout</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
            <Navbar.Text className="align-items-center mt-2 mx-2">
              <a href="/inspection" className="sellnow">
                Sell Now!
              </a>
            </Navbar.Text>
          </>
        ) : (
          <>
            <Navbar.Text>
              <a className="logInLink" href="/Login">
                Login
              </a>
            </Navbar.Text>
            <svg
              width="2"
              height="22"
              viewBox="0 0 2 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.96094 0.9375V21.1641H0.0742188V0.9375H1.96094Z"
                fill="#041C3F"
              />
            </svg>

            <Navbar.Text className="linkk">
              <a className="logInLink" href="/Signup">
                SignUp
              </a>
            </Navbar.Text>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
