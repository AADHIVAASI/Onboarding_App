import React from "react";
import logo from "../../media/logo.PNG";
import { Stepper, Step } from "react-form-stepper";
import { useProgessContext } from "../../contexts/ProgressContext";
import { useOnboardContext } from "../../contexts/OnboardContext";
import {
  stepperStyleConfig,
  stepperConnectorStyleConfig,
} from "../../static/Objects";

const Header = () => {
  const { progress } = useProgessContext();
  const { userDetails } = useOnboardContext();
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Eden" />
        <h4>Eden</h4>
      </div>
      <Stepper
        activeStep={progress.step}
        className="stepper"
        styleConfig={stepperStyleConfig}
        connectorStyleConfig={stepperConnectorStyleConfig}
      >
        <Step style={{ padding: "10px" }} />
        <Step />
        <Step />
        <Step />
      </Stepper>
      {progress.step === 3 && (
        <i
          className="small material-icons white-text deep-purple accent-2"
          style={{ borderRadius: "50%", padding: "25px", margin: "50px 0" }}
        >
          done
        </i>
      )}
      <h5>
        {progress.heading +
          (progress.step === 3 ? userDetails.displayName + "!" : "")}
      </h5>
      <h6 className="grey-text text-darken-1">{progress.subHeading}</h6>
    </div>
  );
};

export default Header;
