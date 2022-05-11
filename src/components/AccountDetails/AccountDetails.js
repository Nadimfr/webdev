import React from "react";
import "./AccountDetails.scss";
import AccountDetailsContent from "./AccountDetailsContent";
import { NavLink } from "react-router-dom";
import PersonalInfo from "./AccountDetailsContent/PersonalInfo/PersonalInfo";
import AccountAccordion from "../../Layout/AccountAccordion/AccountAccordion";
import Address from "./AccountDetailsContent/Address/Address";
import ChangePassword from "./AccountDetailsContent/ChangePassword/ChangePassword";
function AccountDetails() {
  const data = [
    { title: "Personal", content: <PersonalInfo></PersonalInfo> },
    { title: "Address", content: <Address></Address> },
    { title: "ChangePassword", content: <ChangePassword></ChangePassword> },
  ];
  return (
    <>
      <div className="account_details mt-4">
        <div className="title desktop">Account Details</div>
        <div className="account_details_details_container">
          <div className="title mobile">Account Details</div>
          <div className="header">
            <NavLink to="/account_details/personal_info" className="link">
              Personal
            </NavLink>
            <NavLink to="/account_details/address" className="link">
              Address
            </NavLink>
            <NavLink to="/account_details/change_password" className="link">
              Change Password
            </NavLink>
          </div>
          <div className="content">
            <AccountDetailsContent />
          </div>
        </div>
      </div>

      <div className="Responsive">
        <AccountAccordion
          title="Personal"
          no="0"
          content={<PersonalInfo></PersonalInfo>}
        />
        <AccountAccordion
          title="Address"
          no="1"
          content={<Address></Address>}
        />

        <AccountAccordion
          title="Change Password"
          no="3"
          content={<ChangePassword></ChangePassword>}
        />
      </div>
    </>
  );
}

export default AccountDetails;
