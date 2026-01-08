import { describe, it, expect, vi, afterEach, beforeEach } from "vitest";
import { clickOutside } from "$lib";

let action: ReturnType<typeof clickOutside> | null = null;

describe("clickOutside", () => {
  afterEach(() => {
    // Clean up event listeners
    if (action) {
      action.destroy();
      action = null;
    }
    // Clean up DOM between tests
    document.body.innerHTML = "";
  });

  it("calls the callback when clicking outside the element", () => {
    const element = document.createElement("div");
    document.body.appendChild(element);

    const callback = vi.fn();

    action = clickOutside(element, callback);

    document.body.click();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("does NOT call the callback when clicking inside the element", () => {
    const element = document.createElement("div");
    const child = document.createElement("span");

    element.appendChild(child);
    document.body.appendChild(element);

    const callback = vi.fn();

    action = clickOutside(element, callback);

    child.click();

    expect(callback).not.toHaveBeenCalled();
  });

  it("removes the event listener on destroy()", () => {
    const element = document.createElement("div");
    document.body.appendChild(element);

    const callback = vi.fn();

    action = clickOutside(element, callback);

    action.destroy();

    document.body.click();

    expect(callback).not.toHaveBeenCalled();
  });

  it("updates the callback when update() is called", () => {
    const element = document.createElement("div");
    document.body.appendChild(element);

    const firstCallback = vi.fn();
    const secondCallback = vi.fn();

    action = clickOutside(element, firstCallback);

    action.update(secondCallback);

    document.body.click();

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });

  it("allows destroy() to be called multiple times safely", () => {
    const element = document.createElement("div");
    document.body.appendChild(element);
    const callback = vi.fn();

    action = clickOutside(element, callback);
    action.destroy();
    action.destroy(); // Should not throw

    expect(() => action?.destroy()).not.toThrow();
  });
});

describe("clickOutside error handling", () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
    document.body.innerHTML = "";
  });

  it("logs error when initialized with non-function callback", () => {
    const element = document.createElement("div");
    document.body.appendChild(element);

    // @ts-expect-error purposely passing wrong type
    const action = clickOutside(element, null);

    // Trigger click to invoke the listener that logs error
    document.body.click();

    expect(consoleErrorSpy).toHaveBeenCalledWith("Callback function is not a function");

    action.destroy();
  });

  it("logs error when update is called with non-function", () => {
    const element = document.createElement("div");
    document.body.appendChild(element);

    const validCallback = vi.fn();
    const action = clickOutside(element, validCallback);

    // @ts-expect-error purposely passing wrong type
    action.update(null);

    expect(consoleErrorSpy).toHaveBeenCalledWith("New callback function is not a function");

    // Cleanup
    action.destroy();
  });
});
