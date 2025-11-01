
/**
 * Create a mutual debounce for two opposing actions.
 * Calling one action cancels any pending execution of the other.
 *
 * @param actionA - First action (e.g., openDialog)
 * @param actionB - Second action (e.g., closeDialog)
 * @param delay - Delay in milliseconds (default: 300ms)
 * @returns Object with mutual debounce control methods
 *
 * @example
 * const [actionA, actionB] = createMutualDebounce(openDialog, closeDialog, 300);
 * actionA(); // Schedule open
 * actionB(); // Cancel open, schedule close
 */

type Func = (...args: any[]) => any;

export function createMutualDebounce<A extends Func, B extends Func>(actionA: A, actionB: B, delayFunc: () => number) {
    let rafId: number | null = null;

    function scheduleExecution(func: Func, args: any[], startTime: number): void {
        rafId = requestAnimationFrame((currentTime) => {
            const elapsed = currentTime - (startTime || 0);

            if (elapsed < delayFunc())
                return scheduleExecution(func, args, startTime);

            func(...args);
            rafId = null;
        });
    }


    function cancel(): void {
        if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    }

    return [
        /**
         * Execute action A. Cancels any pending execution of action B.
         */
        (...args: Parameters<A>): void => {
            cancel();
            scheduleExecution(actionA, args, performance.now());
        },

        /**
         * Execute action B. Cancels any pending execution of action A.
         */
        (...args: Parameters<B>): void => {
            cancel();
            scheduleExecution(actionB, args, performance.now());
        },
    ];
}
