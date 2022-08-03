import React, { useState, createContext, useContext } from "react";
import { formDetails } from "../helpers/Operations";
import { useNavigate } from "react-router-dom";
import { initProgressState } from "../static/Objects";

export const ProgessContext = createContext();
const ProgessContextProvider = (props) => {
  const navigate = useNavigate();
  const [progress, setProgess] = useState(initProgressState);
  const proceedOnboarding = (route) => {
    let details = formDetails(route);
    setProgess(details);
    navigate(details.next);
  };
  return (
    <ProgessContext.Provider value={{ progress, proceedOnboarding }}>
      {props.children}
    </ProgessContext.Provider>
  );
};

export const useProgessContext = () => useContext(ProgessContext);

export default ProgessContextProvider;
