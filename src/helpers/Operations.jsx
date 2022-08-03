import {
  initProgressState,
  workspaceProgressState,
  usageProgressState,
  completionProgressState,
} from "../static/Objects";

export const formDetails = (route) => {
  switch (route) {
    case "/Onboarding_App/":
      return workspaceProgressState;
    case "/Onboarding_App/workspace":
      return usageProgressState;
    case "/Onboarding_App/usage":
      return completionProgressState;
    case "/Onboarding_App/done":
      return initProgressState;
    default:
      break;
  }
};
