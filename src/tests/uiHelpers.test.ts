import { describe, it, expect, vi, afterEach } from "vitest";
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

    const action = clickOutside(element, callback);

    action.destroy();

    document.body.click();

    expect(callback).not.toHaveBeenCalled();
  });

  it("updates the callback when update() is called", () => {
    const element = document.createElement("div");
    document.body.appendChild(element);

    const firstCallback = vi.fn();
    const secondCallback = vi.fn();

    const action = clickOutside(element, firstCallback);

    action.update(secondCallback);

    document.body.click();

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });
});
