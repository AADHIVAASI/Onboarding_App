import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompletedForm = () => {
  let nav = useNavigate();
  useEffect(() => {
    window.onpopstate = () => {
      nav(1);
    };
  });
  return <div></div>;
};

export default CompletedForm;
