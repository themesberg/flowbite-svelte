/**
 * Mock implementation of localStorage for testing
 * Provides a simple in-memory storage that mimics the localStorage API
 */
export const createLocalStorageMock = () => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
};

/**
 * Sets up localStorage mock on the global window object
 * Returns the mock instance for direct access in tests
 */
export const setupLocalStorageMock = () => {
  const localStorageMock = createLocalStorageMock();

  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
    writable: true
  });

  return localStorageMock;
};

/**
 * Creates a proper NodeList-like object from an array
 * Implements the key NodeList methods that are commonly used in tests
 * This is more robust than casting an array directly to NodeListOf<T>
 */
export const createNodeListMock = <T extends Element>(elements: T[]): NodeListOf<T> => {
  return {
    length: elements.length,
    item: (index: number) => elements[index] || null,
    forEach: (callback: (value: T, key: number, parent: NodeListOf<T>) => void, thisArg?: unknown) => {
      elements.forEach((element, index) => {
        callback.call(thisArg, element, index, this as unknown as NodeListOf<T>);
      });
    },
    entries: function* () {
      for (let i = 0; i < elements.length; i++) {
        yield [i, elements[i]] as [number, T];
      }
    },
    keys: function* () {
      for (let i = 0; i < elements.length; i++) {
        yield i;
      }
    },
    values: function* () {
      for (const element of elements) {
        yield element;
      }
    },
    [Symbol.iterator]: function* () {
      for (const element of elements) {
        yield element;
      }
    },
    // Add indexed access
    ...Object.fromEntries(elements.map((el, i) => [i, el]))
  } as NodeListOf<T>;
};
