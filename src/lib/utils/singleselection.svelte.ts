import { getContext, setContext } from "svelte";


type SingleSelectionContext<T> = {
    value?: T;
};

const SINGLE_SELECTION_KEY = Symbol("singleton");

export function createSingleSelectionContext<T>() {
    const context = $state({ value: undefined });
    return setContext<SingleSelectionContext<T>>(SINGLE_SELECTION_KEY, context);
}

function setSelected<T>(context: SingleSelectionContext<T>, open: boolean, value: any | undefined) {
    if (open)
        context.value = value;
    else if (context.value === value)
        context.value = undefined;
    return context;
}

export function useSingleSelection<T>(callback: (value: T) => void) {
    const context = getContext<SingleSelectionContext<T>>(SINGLE_SELECTION_KEY) ?? createSingleSelectionContext<T>();

    $effect(() => {
        if (context.value)
            callback(context.value);
    });
    return (open: boolean, v?: T) => setSelected<T>(context, open, v);
}

