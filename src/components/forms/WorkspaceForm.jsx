import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboardContext } from "../../contexts/OnboardContext";

const WorkspaceForm = () => {
  let nav = useNavigate();
  useEffect(() => {
    window.onpopstate = () => {
      nav(1);
    };
  });
  const { userDetails, updateUserDetail } = useOnboardContext();
  return (
    <div>
      <h6 className="label">Workspace Name</h6>
      <div className="input-field">
        <input
          id="workspaceName"
          type="text"
          onChange={(e) => updateUserDetail(e.target.id, e.target.value)}
          placeholder="Enter Workspace Name"
          value={userDetails.workspaceName}
        />
      </div>
      <h6 className="label">
        Workspace URL
        <span className="grey-text text-lighten-1">(optional)</span>
      </h6>
      <div className="work-url">
        <div className="grey-text exmpl grey lighten-3">www.eden.com</div>
        <div className="input-field ip-spl">
          <input
            id="workspaceURL"
            type="text"
            placeholder="Example"
            onChange={(e) => updateUserDetail(e.target.id, e.target.value)}
            value={userDetails.workspaceURL}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceForm;
