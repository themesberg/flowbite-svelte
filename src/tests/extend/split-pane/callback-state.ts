export const callbackTestState = {
  lastSizes: [] as number[],
  callCount: 0
};

export function resetCallbackState() {
  callbackTestState.lastSizes = [];
  callbackTestState.callCount = 0;
}
