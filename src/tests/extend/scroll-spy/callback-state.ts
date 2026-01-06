export const callbackTestState = {
  activeId: "",
  activeChangeCallCount: 0,
  navigatedId: "",
  navigateCallCount: 0
};

export function resetCallbackState() {
  callbackTestState.activeId = "";
  callbackTestState.activeChangeCallCount = 0;
  callbackTestState.navigatedId = "";
  callbackTestState.navigateCallCount = 0;
}
