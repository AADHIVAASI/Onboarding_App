import React from "react";
import { useProgessContext } from "../../contexts/ProgressContext";
import { useOnboardContext } from "../../contexts/OnboardContext";
import { useLocation } from "react-router-dom";
import { toast } from "../../helpers/callbacks";
import {
  validateForm,
  firstCompleted,
  secondCompleted,
  welcome,
  validateFields,
  repeat,
  domainValidate,
  initUserState,
} from "../../static/Objects";

const Button = () => {
  const { progress, proceedOnboarding } = useProgessContext();
  const { userDetails, setUserDetails } = useOnboardContext();
  const { pathname } = useLocation();
  const moveNextHandler = () => {
    switch (progress.step) {
      case 0:
        if (userDetails.name.length > 0 && userDetails.displayName.length > 0) {
          toast().fire(firstCompleted);
          proceedOnboarding(pathname);
        } else {
          toast().fire(validateForm);
        }
        break;
      case 1:
        if (
          userDetails.workspaceName.length > 0 &&
          userDetails.workspaceURL.length > 0
        ) {
          if (domainValidate.test(userDetails.workspaceURL)) {
            toast().fire(secondCompleted);
            proceedOnboarding(pathname);
          } else {
            toast().fire(validateFields);
          }
        } else {
          toast().fire(validateForm);
        }
        break;
      case 2:
        if (userDetails.usageBy.length > 0) {
          toast().fire(welcome);
          proceedOnboarding(pathname);
        } else {
          toast().fire(validateForm);
        }
        break;
      case 3:
        toast().fire(repeat);
        setUserDetails(initUserState);
        proceedOnboarding(pathname);
        break;
      default:
        break;
    }
  };
  return (
    <a
      className="waves-effect waves-light btn-large deep-purple accent-2 nextButton"
      onClick={moveNextHandler}
    >
      {progress.buttonText}
    </a>
  );
};

export default Button;
