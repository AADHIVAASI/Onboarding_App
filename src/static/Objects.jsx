export const validateForm = {
  icon: "warning",
  title: "Stop being lazy, FILL EVERYTHING!",
};

export const firstCompleted = {
  icon: "info",
  title: "Just 2 more baby steps",
};

export const secondCompleted = {
  icon: "info",
  title: "Launching in 3... 2... 1......",
};

export const welcome = {
  icon: "success",
  title: "Welcome Edenian!",
};

export const validateFields = {
  icon: "warning",
  title: "No Rocket Science buddy, fill right domain",
};

export const repeat = {
  icon: "question",
  title: "Bruh! not bored?",
};

export const domainValidate = new RegExp(
  /^(www.)?[a-zA-Z0-9_-]+(.[a-zA-Z]+)+((\/)[w#]+)*(\/w+?[a-zA-Z0-9_]+=w+(&[a-zA-Z0-9_]+=w+)*)?$/gm
);

export const initUserState = {
  name: "",
  displayName: "",
  workspaceName: "",
  workspaceURL: "",
  usageBy: "",
};

export const initProgressState = {
  step: 0,
  heading: "Welcome! First things first...",
  subHeading: "You can always change them later.",
  buttonText: "Create Workspace",
  next: "/",
};

export const workspaceProgressState = {
  step: 1,
  heading: "Let's setup a home for all your work",
  subHeading: "You can always create another workspace later.",
  buttonText: "Create Workspace",
  next: "/workspace",
};

export const usageProgressState = {
  step: 2,
  heading: "How are you planning to use Eden?",
  subHeading: "We'll streamline your setup experience accordingly.",
  buttonText: "Create Workspace",
  next: "/usage",
};

export const completionProgressState = {
  step: 3,
  heading: "Congratulations, ",
  subHeading: "You have completed onboarding, you can start using the Eden!",
  buttonText: "Launch Eden",
  next: "/done",
};

export const stepperStyleConfig = {
  activeBgColor: "#664de5",
  completedBgColor: "#664de5",
  inactiveBgColor: "#eee",
  inactiveTextColor: "#666",
  size: "50px",
  circleFontSize: "16px",
};

export const stepperConnectorStyleConfig = {
  activeColor: "#664de5",
  completedColor: "#664de5",
  size: 2,
  stepSize: "45px",
};
