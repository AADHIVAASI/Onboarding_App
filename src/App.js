import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompletedForm from "./components/forms/CompletedForm";
import UsageForm from "./components/forms/UsageForm";
import WelcomeForm from "./components/forms/WelcomeForm";
import WorkspaceForm from "./components/forms/WorkspaceForm";
import Button from "./components/layout/Button";
import Header from "./components/layout/Header";
import OnboardContextProvider from "./contexts/OnboardContext";
import ProgessContextProvider from "./contexts/ProgressContext";

function App() {
  return (
    <BrowserRouter>
      <div className="center row">
        <div
          className="col s10 m8 l4 offset-s1 offset-m2 offset-l4"
          style={{ padding: "0 30px" }}
        >
          <OnboardContextProvider>
            <ProgessContextProvider>
              <Header />
              <Routes>
                <Route
                  path="/Onboarding_App/"
                  index
                  element={<WelcomeForm />}
                />
                <Route
                  path="/Onboarding_App/workspace"
                  element={<WorkspaceForm />}
                />
                <Route path="/Onboarding_App/usage" element={<UsageForm />} />
                <Route
                  path="/Onboarding_App/done"
                  element={<CompletedForm />}
                />
              </Routes>
              <Button />
            </ProgessContextProvider>
          </OnboardContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
