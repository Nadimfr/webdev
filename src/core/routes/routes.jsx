import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../components/header/nav";
import LoginComponent from "../../components/Login/login.jsx";
import SignUpComponent from "../../components/Register/register.jsx";
import ResetComponent from "../../components/ResetPassword/reset.jsx";
import ResetFormComponent from "../../components/ResetPassword/resetform.jsx";
import OTPComponent from "../../components/ResetPassword/otp.jsx";
import ResetByComponent from "../../components/ResetPassword/select.jsx";
import MySales from "../../components/MySales/MySales.jsx";
import MyOrders from "../../components/MyOrders/MyOrders.jsx";
import MyTransactions from "../../components/MyTransactions/MyTransactions.jsx";
import YourCart from "../../components/YourCart/YourCart.jsx";
import PaymentInformation from "../../components/PaymentInformation/PaymentInformation.jsx";
import OrderMethod from "../../components/OrderMethod/OrderMethod.jsx";
import { isUserLoggedIn } from "../apis/auth";
import Congratulations from "../../components/Congratulations/Congratulations.jsx";
import Home from "../../components/Home/home.jsx";
import AccountDetails from "../../components/AccountDetails/AccountDetails";
import Notifications from "../../components/Notifications/notifications";
import ProductDetails from "../../components/ProductDetails/ProductDetails.jsx";
import Transactionsdetails from "../../components/TransactionDetails/transactiondetails.jsx";
import Paymentmethod from "../../components/inspection/step4/paymentmethod";
import SaleDetails from "../../components/SaleDetails/SaleDetails.jsx";
import Aboutus from "../../components/AboutUs/aboutus";
import ProductList from "../../components/ProductListing/ProductListing.jsx";
import ProductList2 from "../../components/ProductListing/ProductListingCopy.jsx";
import Contactus from "../../components/ContactUs/contactus";
import Creditnotes from "../../components/CreditNotes/creditnotes";
import Creditnotesacc from "../../components/CreditNotesAccordion/creditnotesacc";
import ProtectedRoutes from "./protectedRoutes.jsx";
import SellMyDevice from "../../components/SellMyDevice/sellMyDevice";
import SellMyPhone from "../../components/SellMyPhone/sellMyPhone";
import SellMyIphone from "../../components/SellMyIPhone/sellMyIPhone";
import SellMyDeviceQuestion from "../../components/Questions/SellMyDeviceQuestion";
import Chooseyourmethod from "../../components/inspection/step5/chooseyourmethod";
import Menu from "../../components/Menu/menu";
import Respomenu from "../../components/RespoMenu/respomenu";

class MainRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header isLoggedIn={isUserLoggedIn()} />
          <Menu />
          <Respomenu />
          <div style={{ marginTop: "calc(8vh + 10px)" }}>
            <Routes>
              <Route path="/home" exact element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  <LoginComponent handleLoggedIn={this.handleLoggedIn} />
                }
              />
              <Route path="/Signup" exact element={<SignUpComponent />} />
              <Route
                path="/ForgotPassword"
                exact
                element={<ResetComponent />}
              />
              <Route
                path="/ResetPassword"
                exact
                element={<ResetByComponent />}
              />
              <Route path="/OTP" exact element={<OTPComponent />} />
              <Route
                path="/Resetform/:token"
                exact
                element={<ResetFormComponent />}
              />
              <Route path="/Aboutus" element={<Aboutus />} />
              <Route path="/Contactus" element={<Contactus />} />
              <>
                <Route path="/ProductList/" element={<ProductList />} />
                <Route path="/ProductList/:id" element={<ProductList2 />} />
              </>

              <Route path="/ProductDetails/:id" element={<ProductDetails />} />

              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/my-sales" element={<MySales />} />
              <Route path="/my-transactions" element={<MyTransactions />} />
              <Route path="/account_details/*" element={<AccountDetails />} />
              <Route path="/view_cart" element={<YourCart />} />
              <Route path="/payment_info" element={<PaymentInformation />} />
              <Route path="/order_method" element={<OrderMethod />} />
              <Route path="/notification" element={<Notifications />} />
              <Route path="/congratulations" element={<Congratulations />} />
              <Route path="/sale/:saleid" element={<SaleDetails />} />
              <Route path="/order/:orderid" element={<Transactionsdetails />} />
              <Route path="/Credits/:id" element={<Creditnotes />} />
              <Route path="/Credits" element={<Creditnotesacc />} />
              <Route path="/inspection" element={<SellMyDevice />} />
              <Route path="/step2/:id" element={<SellMyPhone />} />
              <Route path="/step3/:type/:brandid" element={<SellMyIphone />} />
              <Route
                path="/step4/:id/:model"
                element={<SellMyDeviceQuestion />}
              />
              <Route path="/step5" element={<Paymentmethod />} />
              <Route path="/OrderMethod" element={<Chooseyourmethod />} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default MainRoute;
