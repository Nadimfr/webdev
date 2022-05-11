import MainRoute from "./core/routes/routes";
import React, { useState, useMemo, useEffect } from "react";
import { AppContext } from "./AppContext";

function App() {
  const test = JSON.parse(sessionStorage.getItem("Products")) || [];
  const [productId, setProductId] = useState(test);

  const saveProductId = useMemo(
    () => ({ productId, setProductId }),
    [productId, setProductId]
  );
  console.log("Products Choosen:", productId);
  sessionStorage.setItem("Products", JSON.stringify(productId));
  // sessionStorage.setItem("ProductsId", JSON.stringify(productId.href));

  return (
    <>
      <AppContext.Provider value={saveProductId}>
        <MainRoute />
      </AppContext.Provider>
    </>
  );
}

export default App;
