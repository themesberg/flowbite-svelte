import { createContext } from "svelte";

export type SimpleState = {
  hidden: boolean;
};

function createSafeContext<T>() {
  const [getRaw, set] = createContext<T>();

  function get(): T | undefined {
    try {
      return getRaw();
    } catch {
      return undefined;
    }
  }

  return [get, set] as const;
}

const [getSimpleContext, setSimpleContext] = createSafeContext<SimpleState>();
export { getSimpleContext, setSimpleContext };
