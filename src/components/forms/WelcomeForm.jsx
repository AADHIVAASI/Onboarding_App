import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboardContext } from "../../contexts/OnboardContext";

const WelcomeForm = () => {
  let nav = useNavigate();
  useEffect(() => {
    window.onpopstate = () => {
      nav(1);
    };
  });
  const { userDetails, updateUserDetail } = useOnboardContext();
  return (
    <div>
      <h6 className="label">Full Name</h6>
      <div className="input-field">
        <input
          id="name"
          type="text"
          onChange={(e) => updateUserDetail(e.target.id, e.target.value)}
          placeholder="Enter Full Name"
          value={userDetails.name}
        />
      </div>
      <h6 className="label">Display Name</h6>
      <div className="input-field">
        <input
          id="displayName"
          type="text"
          onChange={(e) => updateUserDetail(e.target.id, e.target.value)}
          placeholder="Enter Display Name"
          value={userDetails.displayName}
        />
      </div>
    </div>
  );
};

export default WelcomeForm;
