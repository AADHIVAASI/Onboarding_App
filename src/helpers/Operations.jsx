import {
  initProgressState,
  workspaceProgressState,
  usageProgressState,
  completionProgressState,
} from "../static/Objects";

export const formDetails = (route) => {
  switch (route) {
    case "/":
      return workspaceProgressState;
    case "/workspace":
      return usageProgressState;
    case "/usage":
      return completionProgressState;
    case "/done":
      return initProgressState;
    default:
      break;
  }
};
