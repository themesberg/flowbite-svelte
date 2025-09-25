import { getContext, setContext, untrack } from "svelte";

/**
 * @template T
 * @typedef {Object} SingleSelectionContext
 * @property {T|null=} value
 */

/** @type {symbol} */
const SINGLE_SELECTION_KEY = Symbol("singleton");

/**
 * @template T
 * @param {boolean} [nonReactive=false] - use a non-reactive placeholder to allow multiple selection and keep context shallow
 * @returns {SingleSelectionContext<T>}
 */
export function createSingleSelectionContext(nonReactive = false) {
  if (nonReactive) return setContext(SINGLE_SELECTION_KEY, {});
  const context = $state({ value: null });
  return setContext(SINGLE_SELECTION_KEY, context);
}

/**
 * @template T
 * @param {SingleSelectionContext<T>} context
 * @param {boolean} open
 * @param {T=} value
 * @returns {SingleSelectionContext<T>}
 */
function setSelected(context, open, value) {
  if (open) context.value = value ?? null;
  else if (context.value === value) context.value = null;

  return context;
}

/**
 * @template T
 * @param {(value: T|null) => void} callback
 * @returns {(open: boolean, v?: T) => SingleSelectionContext<T>}
 */
export function useSingleSelection(callback) {
  const context = getContext(SINGLE_SELECTION_KEY) ?? createSingleSelectionContext(false);

  if (!context.hasOwnProperty?.("value")) return () => context;

  $effect(() => {
    if (context.value !== null) callback(context.value);
  });

  return (open, v) => untrack(() => setSelected(context, open, v));
}
