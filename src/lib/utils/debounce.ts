/**
 * Create a mutual debounce for two opposing actions.
 * Calling one action cancels any pending execution of the other.
 *
 * @param actionA - First action (e.g., openDialog)
 * @param actionB - Second action (e.g., closeDialog)
 * @param delayFunc - Function returning delay in milliseconds (default: 300ms)
 * @returns Object with mutual debounce control methods
 *
 * @example
 * const [openDialogDeb, closeDialogDeb] = createMutualDebounce(openDialog, closeDialog, () => 300);
 * openDialogDeb(); // Schedule open
 * closeDialogDeb(); // Cancel open, schedule close
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Func = (...args: any[]) => unknown;

export function createMutualDebounce<A extends Func, B extends Func>(actionA: A, actionB: B, delayFunc: () => number): [(...args: Parameters<A>) => void, (...args: Parameters<B>) => void] {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  function scheduleExecution(func: (...args: unknown[]) => unknown, args: unknown[]): void {
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func(...args);
    }, delayFunc());
  }

  function cancel(): void {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  }

  const debouncedA = (...args: Parameters<A>): void => {
    cancel();
    scheduleExecution(actionA, args as unknown[]);
  };

  const debouncedB = (...args: Parameters<B>): void => {
    cancel();
    scheduleExecution(actionB, args as unknown[]);
  };

  return [debouncedA, debouncedB];
}
