import { api } from "./main";

export const evaluate = (data) => {
  return api.post(`user/evaluate`, data).then((res) => {
    return res;
  });
};

export const getestimationevalues = (data) => {
  return api.post(`user/get-estimation-value`, data).then((res) => {
    return res.data.data;
  });
};

export const selldevice = (data) => {
  return api.post(`user/sell-my-device`, data).then((res) => {
    return res;
  });
};

export const getsellpaymentoptions = () => {
  return api.get(`user/get-sell-payment-options`).then((res) => {
    return res.data.data;
  });
};

export const getselldeliverymethods = () => {
  return api.get(`user/get-sell-delivery-methods`).then((res) => {
    return res.data.data;
  });
};

export const getsellcollectionPointById = (id) => {
  return api
    .get(`user/get-sell-collection-point-locations/${id}`)
    .then((res) => {
      return res;
    });
};

export const getsellcollectionPointDetails = (id) => {
  return api.get(`user/get-sell-collection-point-details/${id}`).then((res) => {
    return res.data.data;
  });
};
