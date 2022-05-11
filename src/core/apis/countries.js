import { api, key } from "./main";

export const getAllDialCodes = () => {
  return api
    .get("get-all-countries")
    .then((res) => {
      let data = res.data.data.map((item) => ({
        id: item.id,
        name: item.dial_code,
      }));
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllCountries = () => {
  return api
    .post("get-all-countries")
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllCountryNames = () => {
  return api
    .get("get-all-countries")
    .then((res) => {
      let data = res.data.data.map((item) => ({
        id: item.id,
        name: item.country_name,
      }));
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCitiesByID = (id) => {
  return api
    .get(`/get-cities-by-country-id/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
