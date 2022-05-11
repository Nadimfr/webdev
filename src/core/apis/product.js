import { api } from "./main";

export const getAllProductsTypes = () => {
  return api.get("user/get-all-product-type").then((res) => {
    return res.data.data;
  });
};

export const getAllAdvertising = () => {
  return api.get("user/get-all-advertising").then((res) => {
    return res.data;
  });
};
export const getAllProductsList = (data) => {
  return api.post("user/get-all-products-list", data).then((res) => {
    return res.data;
  });
};
export const getAllProductsListbyID = (id) => {
  return api.get(`user/get-product-details-by-id/${id}`).then((res) => {
    return res.data.data[0];
  });
};
export const getAllBrands = (data) => {
  return api.post("user/get-all-brands", data).then((res) => {
    return res.data.data;
  });
};
export const getProductTypeFiltersById = (id) => {
  return api.get(`user/get-product-type-filters/${id}`).then((res) => {
    return res.data;
  });
};

export const getProductTypeFilters = () => {
  return api.get(`user/get-product-type-filters`).then((res) => {
    return res.data;
  });
};
export const getAllHomePageGroups = () => {
  return api.get(`user/get-all-home-page-groups`).then((res) => {
    return res.data;
  });
};

export const getAllModels = (data) => {
  return api.post(`user/get-all-models`, data).then((res) => {
    return res.data.data;
  });
};

export const getQuestionsByID = (id) => {
  return api.get(`user/get-estimation-questions/${id}`).then((res) => {
    return res.data.data;
  });
};
