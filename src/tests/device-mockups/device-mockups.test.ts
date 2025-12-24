import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

// DeviceMockup component tests
import BasicDeviceMockupTest from "./basic-device-mockup.test.svelte";
import DeviceMockupAndroidTest from "./device-mockup-android.test.svelte";
import DeviceMockupIosTest from "./device-mockup-ios.test.svelte";
import DeviceMockupTabletTest from "./device-mockup-tablet.test.svelte";
import DeviceMockupSmartwatchTest from "./device-mockup-smartwatch.test.svelte";
import DeviceMockupLaptopTest from "./device-mockup-laptop.test.svelte";
import DeviceMockupDesktopTest from "./device-mockup-desktop.test.svelte";

// Individual component tests
import BasicAndroidTest from "./basic-android.test.svelte";
import BasicIosTest from "./basic-ios.test.svelte";
import BasicDefaultMockupTest from "./basic-default-mockup.test.svelte";
import BasicTabletTest from "./basic-tablet.test.svelte";
import BasicDesktopTest from "./basic-desktop.test.svelte";
import BasicLaptopTest from "./basic-laptop.test.svelte";
import BasicSmartwatchTest from "./basic-smartwatch.test.svelte";

// Custom props tests
import AndroidWithClassTest from "./android-with-class.test.svelte";
import IosWithClassesTest from "./ios-with-classes.test.svelte";
import MockupWithAttributesTest from "./mockup-with-attributes.test.svelte";

afterEach(() => {
  cleanup();
});

describe("DeviceMockup Component", () => {
  describe("Device Type Selection", () => {
    test("renders default device mockup when no device prop is provided", () => {
      const { container } = render(BasicDeviceMockupTest);
      const content = screen.getByText("Test content");

      expect(content).toBeInTheDocument();
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    test("renders Android device when device='android'", () => {
      const { container } = render(DeviceMockupAndroidTest);
      const content = screen.getByText("Android content");

      expect(content).toBeInTheDocument();
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    test("renders iOS device when device='ios'", () => {
      const { container } = render(DeviceMockupIosTest);
      const content = screen.getByText("iOS content");

      expect(content).toBeInTheDocument();
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    test("renders Tablet device when device='tablet'", () => {
      const { container } = render(DeviceMockupTabletTest);
      const content = screen.getByText("Tablet content");

      expect(content).toBeInTheDocument();
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    test("renders Smartwatch device when device='smartwatch'", () => {
      const { container } = render(DeviceMockupSmartwatchTest);
      const content = screen.getByText("Smartwatch content");

      expect(content).toBeInTheDocument();
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    test("renders Laptop device when device='laptop'", () => {
      const { container } = render(DeviceMockupLaptopTest);
      const content = screen.getByText("Laptop content");

      expect(content).toBeInTheDocument();
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    test("renders Desktop device when device='desktop'", () => {
      const { container } = render(DeviceMockupDesktopTest);
      const content = screen.getByText("Desktop content");

      expect(content).toBeInTheDocument();
      expect(container.querySelector("div")).toBeInTheDocument();
    });
  });

  describe("Content Rendering", () => {
    test("renders children content correctly", () => {
      render(BasicDeviceMockupTest);
      const content = screen.getByText("Test content");

      expect(content).toBeInTheDocument();
    });
  });
});

describe("Android Component", () => {
  describe("Basic Rendering", () => {
    test("renders Android mockup with content", () => {
      const { container } = render(BasicAndroidTest);
      const content = screen.getByText("Android component");

      expect(content).toBeInTheDocument();
      expect(container.querySelector(".test-content")).toBeInTheDocument();
    });

    test("has proper structure with device elements", () => {
      const { container } = render(BasicAndroidTest);
      const mainDiv = container.querySelector("div");

      expect(mainDiv).toBeInTheDocument();
      // Android has 5 button divs (top, leftTop, leftMid, leftBot, right) + slot
      const childDivs = mainDiv?.querySelectorAll("div");
      expect(childDivs?.length).toBeGreaterThanOrEqual(5);
    });
  });

  describe("Custom Styling", () => {
    test("accepts custom class prop", () => {
      const { container } = render(AndroidWithClassTest);
      const mainDiv = container.querySelector(".custom-class");

      expect(mainDiv).toBeInTheDocument();
    });
  });
});

describe("iOS Component", () => {
  describe("Basic Rendering", () => {
    test("renders iOS mockup with content", () => {
      const { container } = render(BasicIosTest);
      const content = screen.getByText("iOS component");

      expect(content).toBeInTheDocument();
      expect(container.querySelector(".test-content")).toBeInTheDocument();
    });

    test("has proper structure with device elements", () => {
      const { container } = render(BasicIosTest);
      const mainDiv = container.querySelector("div");

      expect(mainDiv).toBeInTheDocument();
      // iOS has 4 button divs (top, leftTop, leftBot, right) + slot
      const childDivs = mainDiv?.querySelectorAll("div");
      expect(childDivs?.length).toBeGreaterThanOrEqual(4);
    });
  });

  describe("Custom Styling", () => {
    test("accepts custom classes prop for slot and elements", () => {
      const { container } = render(IosWithClassesTest);
      const content = screen.getByText("iOS with custom classes");

      expect(content).toBeInTheDocument();
      expect(container.querySelector(".custom-slot-class")).toBeInTheDocument();
      expect(container.querySelector(".custom-top-class")).toBeInTheDocument();
    });
  });
});

describe("DefaultMockup Component", () => {
  describe("Basic Rendering", () => {
    test("renders default mockup with content", () => {
      const { container } = render(BasicDefaultMockupTest);
      const content = screen.getByText("Default mockup");

      expect(content).toBeInTheDocument();
      expect(container.querySelector(".test-content")).toBeInTheDocument();
    });

    test("has proper structure with device elements", () => {
      const { container } = render(BasicDefaultMockupTest);
      const mainDiv = container.querySelector("div");

      expect(mainDiv).toBeInTheDocument();
      // DefaultMockup has 4 button divs (top, leftTop, leftBot, right) + slot
      const childDivs = mainDiv?.querySelectorAll("div");
      expect(childDivs?.length).toBeGreaterThanOrEqual(4);
    });
  });

  describe("Custom Attributes", () => {
    test("accepts custom data attributes and aria labels", () => {
      const { container } = render(MockupWithAttributesTest);
      const mockup = container.querySelector("[data-testid='custom-mockup']");

      expect(mockup).toBeInTheDocument();
      expect(mockup).toHaveAttribute("aria-label", "Test mockup");
    });
  });
});

describe("Tablet Component", () => {
  describe("Basic Rendering", () => {
    test("renders Tablet mockup with content", () => {
      const { container } = render(BasicTabletTest);
      const content = screen.getByText("Tablet component");

      expect(content).toBeInTheDocument();
      expect(container.querySelector(".test-content")).toBeInTheDocument();
    });

    test("has proper structure with device elements", () => {
      const { container } = render(BasicTabletTest);
      const mainDiv = container.querySelector("div");

      expect(mainDiv).toBeInTheDocument();
      // Tablet has 4 button divs (leftTop, leftMid, leftBot, right) + slot
      const childDivs = mainDiv?.querySelectorAll("div");
      expect(childDivs?.length).toBeGreaterThanOrEqual(4);
    });
  });
});

describe("Desktop Component", () => {
  describe("Basic Rendering", () => {
    test("renders Desktop mockup with content", () => {
      const { container } = render(BasicDesktopTest);
      const content = screen.getByText("Desktop component");

      expect(content).toBeInTheDocument();
      expect(container.querySelector(".test-content")).toBeInTheDocument();
    });

    test("has proper structure with multiple divs for base and stand", () => {
      const { container } = render(BasicDesktopTest);
      const allDivs = container.querySelectorAll("div");

      // Desktop has base div with inner content + bot + botUnder divs
      expect(allDivs.length).toBeGreaterThanOrEqual(3);
    });
  });
});

describe("Laptop Component", () => {
  describe("Basic Rendering", () => {
    test("renders Laptop mockup with content", () => {
      const { container } = render(BasicLaptopTest);
      const content = screen.getByText("Laptop component");

      expect(content).toBeInTheDocument();
      expect(container.querySelector(".test-content")).toBeInTheDocument();
    });

    test("has proper structure with screen and base", () => {
      const { container } = render(BasicLaptopTest);
      const allDivs = container.querySelectorAll("div");

      // Laptop has wrapper > base > inner + bot > botCen structure
      expect(allDivs.length).toBeGreaterThanOrEqual(4);
    });
  });
});

describe("Smartwatch Component", () => {
  describe("Basic Rendering", () => {
    test("renders Smartwatch mockup with content", () => {
      const { container } = render(BasicSmartwatchTest);
      const content = screen.getByText("Smartwatch component");

      expect(content).toBeInTheDocument();
      expect(container.querySelector(".test-content")).toBeInTheDocument();
    });

    test("has proper structure with watch elements", () => {
      const { container } = render(BasicSmartwatchTest);
      const allDivs = container.querySelectorAll("div");

      // Smartwatch has wrapper > base + top (with rightTop, rightBot, slot) + bot
      expect(allDivs.length).toBeGreaterThanOrEqual(5);
    });
  });
});

describe("Component Integration", () => {
  test("all device mockups render without errors", () => {
    const components = [BasicAndroidTest, BasicIosTest, BasicDefaultMockupTest, BasicTabletTest, BasicDesktopTest, BasicLaptopTest, BasicSmartwatchTest];

    components.forEach((Component) => {
      const { container } = render(Component);
      expect(container.querySelector("div")).toBeInTheDocument();
      cleanup();
    });
  });

  test("DeviceMockup dynamically switches between device types", () => {
    // Test that the dynamic component loading works
    render(DeviceMockupAndroidTest);
    expect(screen.getByText("Android content")).toBeInTheDocument();
    cleanup();

    render(DeviceMockupIosTest);
    expect(screen.getByText("iOS content")).toBeInTheDocument();
    cleanup();

    render(DeviceMockupDesktopTest);
    expect(screen.getByText("Desktop content")).toBeInTheDocument();
  });
});
