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
  let rafId: number | null = null;

  function scheduleExecution(func: (...args: unknown[]) => unknown, args: unknown[], startTime: number): void {
    rafId = requestAnimationFrame((currentTime) => {
      const elapsed = currentTime - (startTime || 0);

      if (elapsed < delayFunc()) return scheduleExecution(func, args, startTime);

      rafId = null;
      func(...args);
    });
  }

  function cancel(): void {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  const debouncedA = (...args: Parameters<A>): void => {
    cancel();
    scheduleExecution(actionA, args as unknown[], performance.now());
  };

  const debouncedB = (...args: Parameters<B>): void => {
    cancel();
    scheduleExecution(actionB, args as unknown[], performance.now());
  };

  return [debouncedA, debouncedB];
}
