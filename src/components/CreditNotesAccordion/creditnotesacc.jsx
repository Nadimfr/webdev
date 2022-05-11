import React from "react";
import AccordionLayout from "../../Layout/AccordionLayout/AccordionLayout";
import "../CreditNotesAccordion/creditnotesacc.scss";
import search from "../../assests/icons/search.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Creditnotesacc = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = (status) => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState("Paid");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const status = [{ label: "Failed" }, { label: "Paid" }];
  return (
    <>
      <div className="credit_notes my-5 mx-5">
        <div className="Title_wrapper">Credit Notes</div>

        <div
          style={{
            display: "flex",
            justifyContent: "end",
            flexWrap: "wrap",
          }}
        >
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={status}
            defaultValue={value}
            value={value}
            onChange={(_, newValue) => {
              console.log(newValue);
              setValue(newValue?.label);
            }}
            inputValue={inputValue}
            onInputChange={(_, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filter by"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
        </div>

        <AccordionLayout
          headerTitle={true}
          titleContent={[
            {
              data: "Order ID",
              class: "header-title flex2 ",
              doubleSort: true,
            },
            {
              data: "Amount",
              class: "header-title ",
              doubleSort: true,
            },
            {
              data: "Payment Method",
              class: "header-title ",
              doubleSort: true,
            },
            {
              data: "Status",
              class: "header-title ",
              doubleSort: false,
            },
            {
              data: (
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8087 13.6508V20.0088H3.39135V5.59154H8.19711V2.3877H1.78942C0.905161 2.3877 0.1875 3.10536 0.1875 3.98962V21.6108C0.1875 22.4966 0.905161 23.2127 1.78942 23.2127H19.4106C20.2964 23.2127 21.0125 22.4966 21.0125 21.6108V13.6508H17.8087Z"
                    fill="#4BA4F0"
                  />
                  <path
                    d="M25.5043 5.7513L19.0966 0.945527C18.8563 0.762908 18.5295 0.734074 18.2588 0.870237C17.9864 1.0064 17.815 1.28353 17.815 1.5863V3.98918H15.4121C10.5535 3.98918 6.60156 7.94113 6.60156 12.7998C6.60156 13.1714 6.85787 13.495 7.2183 13.5799C7.27918 13.5943 7.34165 13.6007 7.40252 13.6007C7.70048 13.6007 7.98082 13.4341 8.11858 13.1586L8.30761 12.7821C9.53629 10.3232 12.0065 8.79495 14.7554 8.79495H17.815V11.1978C17.815 11.5006 17.9864 11.7777 18.2572 11.9139C18.5279 12.0501 18.8547 12.0212 19.0966 11.8386L25.5043 7.03283C25.7061 6.88225 25.8246 6.64357 25.8246 6.39207C25.8246 6.14056 25.7061 5.90188 25.5043 5.7513Z"
                    fill="#4BA4F0"
                  />
                </svg>
              ),
            },
          ]}
        />
        <AccordionLayout
          headerTitle={false}
          header={[
            {
              data: "Order ID",
            },
            {
              data: "Amount",
            },
            {
              data: "Payment Method",
            },
            {
              data: "Status",
            },
          ]}
          data={[
            {
              data: "5552323",
              class: "sale_number ",
            },
            {
              data: "USD $",
              class: "price",
            },
            {
              data: "Voucher",
              class: "price",
            },
            {
              data: "Failed",
              class: "price",
            },
            {},
          ]}
          content={null}
        />
        <AccordionLayout
          headerTitle={false}
          header={[
            {
              data: "Order ID",
            },
            {
              data: "Amount",
            },
            {
              data: "Payment Method",
            },
            {
              data: "Status",
            },
          ]}
          data={[
            {
              data: "5552323",
              class: "sale_number",
            },
            {
              data: "USD $",
              class: "price",
            },
            {
              data: "Bank Transfer",
              class: "price",
            },
            {
              data: "Paid",
              class: "price",
            },
            {},
          ]}
          content={null}
        />
        <AccordionLayout
          headerTitle={false}
          header={[
            {
              data: "Order ID",
            },
            {
              data: "Amount",
            },
            {
              data: "Payment Method",
            },
            {
              data: "Status",
            },
          ]}
          data={[
            {
              data: "5552323",
              class: "sale_number",
            },
            {
              data: "USD $",
              class: "price",
            },
            {
              data: "Cash",
              class: "price",
            },
            {
              data: "Failed",
              class: "price",
            },
            {},
          ]}
          content={null}
        />
        <AccordionLayout
          headerTitle={false}
          header={[
            {
              data: "Order ID",
            },
            {
              data: "Amount",
            },
            {
              data: "Payment Method",
            },
            {
              data: "Status",
            },
          ]}
          data={[
            {
              data: "5552323",
              class: "sale_number",
            },
            {
              data: "USD $",
              class: "price",
            },
            {
              data: "Bank Transfer",
              class: "price",
            },
            {
              data: "Paid",
              class: "price",
            },
            {},
          ]}
          content={null}
        />
      </div>
    </>
  );
};

export default Creditnotesacc;
