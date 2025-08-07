import React from "react";

const ShareConfigContext = React.createContext({
  customerId: "",
  endpointUrl: "",
  setCustomerId: () => {},
  setEndpointUrl: () => {},
});

export default ShareConfigContext;
