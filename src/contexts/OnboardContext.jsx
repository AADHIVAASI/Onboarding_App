import React, { useState, createContext, useContext } from "react";
import { initUserState } from "../static/Objects";

export const OnboardContext = createContext();

const OnboardContextProvider = (props) => {
  const [userDetails, setUserDetails] = useState(initUserState);
  const updateUserDetail = (id, value) => {
    let temp = {
      ...userDetails,
      [id]: value,
    };
    setUserDetails(temp);
  };
  return (
    <OnboardContext.Provider
      value={{ userDetails, updateUserDetail, setUserDetails }}
    >
      {props.children}
    </OnboardContext.Provider>
  );
};

export const useOnboardContext = () => useContext(OnboardContext);

export default OnboardContextProvider;
