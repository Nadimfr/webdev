import { api, key } from "./main";

const headers = {
  headers: {
    Authorization: key,
  },
};

export const getAllPaymentOptions = () => {
  return api
    .get("user/get-all-user-payment-options", headers)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
