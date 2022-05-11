import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Address from "./Address/Address";
import ChangePassword from "./ChangePassword/ChangePassword";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

function AccountDetailsContent() {
  return (
    <Routes>
      <Route path="/personal_info" element={<PersonalInfo />} />
      <Route path="/address" element={<Address />} />
      <Route path="/change_password" element={<ChangePassword />} />
    </Routes>
  );
}

export default AccountDetailsContent;
