/**
 * Create a mutual debounce for two opposing actions.
 * Calling either action cancels any pending execution (whether from actionA or actionB)
 * and schedules the new action.
 *
 * @param actionA - First action (e.g., openDialog)
 * @param actionB - Second action (e.g., closeDialog)
 * @param delayFunc - Function returning delay in milliseconds
 * @returns Tuple of debounced versions of [actionA, actionB]
 *
 * @example
 * const [openDialogDeb, closeDialogDeb] = createMutualDebounce(openDialog, closeDialog, () => 300);
 * openDialogDeb(); // Schedule open
 * closeDialogDeb(); // Cancel pending open, schedule close
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Func = (...args: any[]) => unknown;

export function createMutualDebounce<A extends Func, B extends Func>(actionA: A, actionB: B, delayFunc: () => number): [(...args: Parameters<A>) => void, (...args: Parameters<B>) => void] {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  function scheduleExecution<F extends Func>(func: F, args: Parameters<F>): void {
    // Note: cancel() is always called before this function by debouncedA/debouncedB,
    // ensuring no duplicate timeouts exist. This design makes the calling code
    // responsible for cleanup, which helps catch logic errors if used incorrectly.
    const delay = Math.max(0, Number(delayFunc()) || 0);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func(...args);
    }, delay);
  }

  function cancel(): void {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  }

  const debouncedA = (...args: Parameters<A>): void => {
    cancel();
    scheduleExecution(actionA, args);
  };

  const debouncedB = (...args: Parameters<B>): void => {
    cancel();
    scheduleExecution(actionB, args);
  };

  return [debouncedA, debouncedB];
}
