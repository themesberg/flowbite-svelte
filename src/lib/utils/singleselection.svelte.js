import { getContext, setContext } from "svelte";

/**
 * @template T
 * @typedef {Object} SingleSelectionContext
 * @property {T=} value
 */

/** @type {symbol} */
const SINGLE_SELECTION_KEY = Symbol("singleton");

/**
 * @template T
 * @param {boolean} [nonReactive=false] - use a non-reactive placeholder to allow multiple selection and keep context shallow
 * @returns {SingleSelectionContext<T>}
 */
export function createSingleSelectionContext(nonReactive) {
  // @ts-ignore - $state is assumed to be a Svelte store or similar
  const context = $state({ value: undefined });
  return setContext(SINGLE_SELECTION_KEY, nonReactive ? {} : context);
}

/**
 * @template T
 * @param {SingleSelectionContext<T>} context
 * @param {boolean} open
 * @param {T=} value
 * @returns {SingleSelectionContext<T>}
 */
function setSelected(context, open, value) {
  if (open) context.value = value;
  else if (context.value === value) context.value = undefined;
  return context;
}

/**
 * @template T
 * @param {(value: T) => void} callback
 * @returns {(open: boolean, v?: T) => SingleSelectionContext<T>}
 */
export function useSingleSelection(callback) {
  const context = getContext(SINGLE_SELECTION_KEY) ?? createSingleSelectionContext();

  // @ts-ignore - $effect is assumed to be a Svelte reactive helper
  $effect(() => {
    if (context.value !== undefined) callback(context.value);
  });
  return (open, v) => setSelected(context, open, v);
}
