import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicTabsTest from "./basic-tabs.test.svelte";
import TabStylesTest from "./tab-styles.test.svelte";
import TabsNoDividerTest from "./tabs-no-divider.test.svelte";
import TabsWithSelectedTest from "./tabs-with-selected.test.svelte";
import TabsWithDisabledTest from "./tabs-with-disabled.test.svelte";
import TabsWithTitleSlotTest from "./tabs-with-title-slot.test.svelte";
import ClickableTabsTest, { testState } from "./clickable-tabs.test.svelte";
import TabsWithClassesTest from "./tabs-with-classes.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Tabs Component", () => {
  describe("Basic Rendering", () => {
    test("renders tabs with tab items", () => {
      render(BasicTabsTest);
      const tablist = screen.getByRole("tablist");
      const tabs = screen.getAllByRole("tab");

      expect(tablist).toBeInTheDocument();
      expect(tabs).toHaveLength(3);
    });

    test("renders tab panel", () => {
      render(BasicTabsTest);
      const panel = screen.getByRole("tabpanel");

      expect(panel).toBeInTheDocument();
    });

    test("tab items have correct role and attributes", () => {
      render(BasicTabsTest);
      const tabs = screen.getAllByRole("tab");

      tabs.forEach((tab) => {
        expect(tab).toHaveAttribute("type", "button");
        expect(tab).toHaveAttribute("aria-selected");
        expect(tab).toHaveAttribute("aria-controls");
      });
    });

    test("first tab is selected by default", async () => {
      render(BasicTabsTest);
      const firstTab = screen.getAllByRole("tab")[0];

      await waitFor(() => {
        expect(firstTab).toHaveAttribute("aria-selected", "true");
      });
    });

    test("renders tab content for active tab", async () => {
      render(BasicTabsTest);

      await waitFor(() => {
        const content = screen.getByTestId("content-1");
        expect(content).toBeInTheDocument();
      });
    });
  });

  describe("Tab Styles", () => {
    test("renders tabs with underline style", () => {
      render(TabStylesTest);
      const tablist = screen.getByTestId("tabs-underline");
      const tabs = tablist.querySelectorAll('[role="tab"]');

      expect(tablist).toBeInTheDocument();
      expect(tabs).toHaveLength(2);
    });

    test("renders tabs with pill style", () => {
      render(TabStylesTest);
      const tablist = screen.getByTestId("tabs-pill");
      const tabs = tablist.querySelectorAll('[role="tab"]');

      expect(tablist).toBeInTheDocument();
      expect(tabs).toHaveLength(2);
    });

    test("renders tabs with full style", () => {
      render(TabStylesTest);
      const tablist = screen.getByTestId("tabs-full");
      const tabs = tablist.querySelectorAll('[role="tab"]');

      expect(tablist).toBeInTheDocument();
      expect(tabs).toHaveLength(2);
    });
  });

  describe("Tab Props", () => {
    test("renders tabs without divider when divider is false", () => {
      render(TabsNoDividerTest);
      const tablist = screen.getByTestId("tabs-no-divider");

      expect(tablist).toBeInTheDocument();

      // Check that divider element is not present
      const container = tablist.closest('[data-scope="tabs"]') || tablist.parentElement;
      const divider = container?.querySelector('[data-part="divider"]');
      expect(divider).not.toBeInTheDocument();
    });

    test("renders tabs with pre-selected tab", async () => {
      render(TabsWithSelectedTest);
      const secondTab = screen.getByTestId("selected-tab-2").querySelector('[role="tab"]');

      await waitFor(() => {
        expect(secondTab).toHaveAttribute("aria-selected", "true");
      });

      await waitFor(() => {
        const content = screen.getByTestId("selected-content-2");
        expect(content).toBeInTheDocument();
      });
    });

    test("renders disabled tab", () => {
      render(TabsWithDisabledTest);
      const disabledTab = screen.getByTestId("disabled-tab").querySelector('[role="tab"]');

      expect(disabledTab).toBeDisabled();
    });

    test("enabled tabs are not disabled", () => {
      render(TabsWithDisabledTest);
      const enabledTab = screen.getByTestId("enabled-tab").querySelector('[role="tab"]');

      expect(enabledTab).not.toBeDisabled();
    });
  });

  describe("Tab Interactions", () => {
    test("clicking tab switches to that tab", async () => {
      const user = userEvent.setup();
      render(BasicTabsTest);

      const tabs = screen.getAllByRole("tab");
      const secondTab = tabs[1];

      await user.click(secondTab);

      await waitFor(() => {
        expect(secondTab).toHaveAttribute("aria-selected", "true");
      });

      await waitFor(() => {
        const content = screen.getByTestId("content-2");
        expect(content).toBeInTheDocument();
      });
    });

    test("clicking disabled tab does not switch tabs", async () => {
      const user = userEvent.setup();
      render(TabsWithDisabledTest);

      const disabledTab = screen.getByTestId("disabled-tab").querySelector('[role="tab"]')!;
      const enabledTab = screen.getByTestId("enabled-tab").querySelector('[role="tab"]')!;
      
      expect(disabledTab).toBeInTheDocument();
      expect(enabledTab).toHaveAttribute("aria-selected", "true");

      await user.click(disabledTab);
      
      // Disabled tab should not become selected
      expect(disabledTab).toHaveAttribute("aria-selected", "false");
      // Previously selected tab should remain selected
      expect(enabledTab).toHaveAttribute("aria-selected", "true");
    });

    test("tab switching updates selected state", async () => {
      const user = userEvent.setup();
      testState.currentTab = "";
      testState.tabClickCount = 0;

      render(ClickableTabsTest);

      await waitFor(() => {
        expect(testState.currentTab).toBeTruthy();
      });

      const tabs = screen.getAllByRole("tab");
      const secondTab = tabs[1];
      const thirdTab = tabs[2];

      await user.click(secondTab);
      await waitFor(() => {
        expect(testState.currentTab).toBe("second");
      });

      await user.click(thirdTab);
      await waitFor(() => {
        expect(testState.currentTab).toBe("third");
      });
    });

    test("switching tabs displays correct content", async () => {
      const user = userEvent.setup();
      render(BasicTabsTest);

      const tabs = screen.getAllByRole("tab");

      await user.click(tabs[1]);
      await waitFor(() => {
        const content2 = screen.getByTestId("content-2");
        expect(content2).toBeInTheDocument();
      });

      await user.click(tabs[2]);
      await waitFor(() => {
        const content3 = screen.getByTestId("content-3");
        expect(content3).toBeInTheDocument();
      });
    });
  });

  describe("Tab Customization", () => {
    test("renders tab with custom title slot", () => {
      render(TabsWithTitleSlotTest);
      const customTitle = screen.getByTestId("custom-title");

      expect(customTitle).toBeInTheDocument();
    });

    test("applies custom classes to tabs", () => {
      render(TabsWithClassesTest);
      const tablist = screen.getByTestId("tabs-with-custom-classes");
      const tabItem = screen.getByTestId("custom-tab-1");

      expect(tablist).toHaveClass("custom-tabs-class");
      expect(tabItem).toHaveClass("custom-tab-item");
    });
  });

  describe("Data Attributes", () => {
    test("tabs have correct data attributes", () => {
      render(BasicTabsTest);
      const tablist = screen.getByRole("tablist");

      expect(tablist).toHaveAttribute("data-scope", "tabs");
      expect(tablist).toHaveAttribute("data-part", "base");
    });

    test("tab items have correct data attributes", () => {
      render(BasicTabsTest);
      const tabItems = screen.getAllByRole("presentation");

      tabItems.forEach((item) => {
        expect(item).toHaveAttribute("data-scope", "tab-item");
        expect(item).toHaveAttribute("data-part", "base");
      });
    });

    test("tab panel has correct data attribute", () => {
      render(BasicTabsTest);
      const panel = screen.getByRole("tabpanel");

      expect(panel).toHaveAttribute("data-part", "content");
    });
  });

  describe("Accessibility", () => {
    test("tablist has correct role", () => {
      render(BasicTabsTest);
      const tablist = screen.getByRole("tablist");

      expect(tablist).toBeInTheDocument();
    });

    test("tabs have correct role", () => {
      render(BasicTabsTest);
      const tabs = screen.getAllByRole("tab");

      expect(tabs.length).toBeGreaterThan(0);
    });

    test("tab panel has correct role and is connected to tab", async () => {
      render(BasicTabsTest);
      const panel = screen.getByRole("tabpanel");

      await waitFor(() => {
        const firstTab = screen.getAllByRole("tab")[0];
        expect(panel).toHaveAttribute("aria-labelledby", firstTab.id);
      });
    });

    test("only one tab is aria-selected at a time", async () => {
      render(BasicTabsTest);

      await waitFor(() => {
        const tabs = screen.getAllByRole("tab");
        const selectedTabs = tabs.filter((tab) => tab.getAttribute("aria-selected") === "true");
        expect(selectedTabs).toHaveLength(1);
      });
    });

    test("tabs have unique IDs", () => {
      render(BasicTabsTest);
      const tabs = screen.getAllByRole("tab");
      const ids = tabs.map((tab) => tab.id);
      const uniqueIds = new Set(ids);

      expect(ids.length).toBe(uniqueIds.size);
    });

    test("tab panel is connected to active tab via aria-labelledby", async () => {
      const user = userEvent.setup();
      render(BasicTabsTest);

      const tabs = screen.getAllByRole("tab");
      const panel = screen.getByRole("tabpanel");
      const secondTab = tabs[1];

      await user.click(secondTab);

      await waitFor(() => {
        expect(panel).toHaveAttribute("aria-labelledby", secondTab.id);
      });
    });
  });
});
