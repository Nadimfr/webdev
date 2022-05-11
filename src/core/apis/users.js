import { api } from "./main";

export const addUser = (data) => {
  return api
    .post("user/user-sign-up", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("Error");
    });
};

export const getUserDetails = () => {
  return api
    .get(`user/get-user-account-details`)
    .then((res) => {
      return res.data.data[0];
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserAdressesDetails = () => {
  return api
    .get(`user/get-user-addresses-details`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteUserAddress = async (id) => {
  return await api
    .delete(`user/delete-user-address-details`, id)
    .then((res) => {
      alert(res.data.message);
    })
    .catch((error) => {
      alert(error);
    });
};

export const changePassword = (data) => {
  return api
    .put("auth/change-password", data)
    .then((res) => {
      alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const placeOrder = (data) => {
  return api
    .post("user/create-order-placement", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("Error");
    });
};

export const getAllOrders = () => {
  return api
    .post(`user/get-all-orders`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSingleOrder = (order_id) => {
  return api
    .get(`user/get-single-order/${order_id}`)
    .then((res) => {
      return res.data.data[0];
    })
    .catch((err) => {
      console.log("Error");
    });
};

export const getSalesList = () => {
  return api
    .post(`user/get-sales-list`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSaleByID = (id) => {
  return api
    .get(`user/get-sale-by-id/${id}`)
    .then((res) => {
      return res.data.message;
    })
    .catch((err) => {
      console.log(err);
    });
};
