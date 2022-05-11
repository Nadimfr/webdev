import * as yup from "yup";

const forms = {
  changePassword: yup.object().shape({
    current_password: yup
      .string()
      .required("Your current password is required"),
    password: yup.string().required("New password is required"),
    password_confirmation: yup
      .string()
      .required("Password confirmation is required"),
  }),

  updatePersonal: yup.object().shape({
    full_name: yup.string().required("Full name is required"),
    phone_number: yup.string().required("Phone  is required"),
    //dial_code: yup.string().required("Country is required"),
  }),
};

export const formValidator = async (payload, type, callback) => {
  const validationResult = await forms[type]
    .validate(payload, { abortEarly: "false" })
    .catch((err) => {
      return err;
    });
  let error = (validationResult + "").split(": ")[1];
  if (error) {
    alert(error);
    return;
  }
  callback();
};
