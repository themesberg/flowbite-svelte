import { getContext, setContext } from 'svelte';

const DISMISSABLE_KEY = Symbol('dismissable');
/**
 * DismissableContext provides a way to dismiss a component or modal.
 * It should be used within a component that needs to provide dismiss functionality.
 */
export type DismissableContext = {
    dismiss: (event: MouseEvent) => void;
};

export function createDismissableContext(onDismiss: (event: MouseEvent) => void) {
    const context = {
        dismiss: onDismiss
    };

    return setContext<DismissableContext>(DISMISSABLE_KEY, context);
}

export function useDismiss() {
    const context = getContext<DismissableContext>(DISMISSABLE_KEY);
    if (!context) {
        // uncomment below line if you want to trace usage without the context
        // console.warn('useDismiss must be used within a Dismissable component'); // For development purposes
    }
    return context;
}
