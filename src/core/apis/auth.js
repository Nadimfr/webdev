import { api } from "./main";

export const Login = async (data) => {
  console.log(data);
  return await api.post("auth/portals-login", data).then((res) => {
    if (res.data.success) {
      sessionStorage.setItem("SESSION", res.data.data.original.access_token);

      sessionStorage.setItem("EMAIL", res.data.data.original.user[0].email);
      sessionStorage.setItem(
        "FULLNAME",
        res.data.data.original.user[0].full_name
      );

      sessionStorage.setItem(
        "COUNTRYCODE",
        res.data.data.original.user[0].country.dial_code
      );

      sessionStorage.setItem(
        "PHONE",
        res.data.data.original.user[0].phone_number
      );
    }
    return res;
  });
};

export const isUserLoggedIn = () => {
  let user = sessionStorage.getItem("SESSION");
  if (user === null) return false;
  return true;
};

export const resetPasswordByEmail = async (data) => {
  let payload = {
    ...data,
  };
  return await api.post("auth/reset-password-by-email", payload).then((res) => {
    if (res.data.success);
    return res;
  });
};

export const resetPasswordByOTP = (data) => {
  return api.post("auth/reset-password-by-otp", data).then((res) => {
    if (res.data.success);
    return res;
  });
};

export const updateAccount = (data) => {
  return api
    .post("user/update-account-details", data)
    .then((res) => {
      alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const checkEmail = async (data) => {
  let payload = {
    ...data,
  };
  return await api.post("auth/check-email", payload).then((res) => {
    if (res.data.success);
    return res;
  });
};
