import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboardContext } from "../../contexts/OnboardContext";

const UsageForm = () => {
  const { userDetails, updateUserDetail } = useOnboardContext();
  let nav = useNavigate();
  useEffect(() => {
    window.onpopstate = () => {
      nav(1);
    };
  });
  return (
    <div className="cards">
      <div
        className={
          "card " + (userDetails.usageBy === "own" ? "selectedCard" : "")
        }
      >
        <div
          className="card-content grey-text"
          id="own"
          onClickCapture={(e) => updateUserDetail("usageBy", e.target.id)}
        >
          <i className="small material-icons grey-text text-darken-2" id="own">
            person
          </i>
          <span className="card-title black-text" id="own">
            For myself
          </span>
          <p id="own">Write better. Think more clearly. Stay Organized.</p>
        </div>
      </div>
      <div
        className={
          "card " + (userDetails.usageBy === "team" ? "selectedCard" : "")
        }
      >
        <div
          className="card-content grey-text"
          id="team"
          onClickCapture={(e) => updateUserDetail("usageBy", e.target.id)}
        >
          <i className="small material-icons grey-text text-darken-2" id="team">
            people
          </i>
          <span className="card-title black-text" id="team">
            With my team
          </span>
          <p id="team">Wikis, docs, tasks & projects, all in one place.</p>
        </div>
      </div>
    </div>
  );
};

export default UsageForm;
