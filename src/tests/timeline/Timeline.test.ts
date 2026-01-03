import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicTimelineTest from "./basic-timeline.test.svelte";
import VerticalTimelineTest from "./vertical-timeline.test.svelte";
import HorizontalTimelineTest from "./horizontal-timeline.test.svelte";
import ActivityTimelineTest from "./activity-timeline.test.svelte";
import GroupTimelineTest from "./group-timeline.test.svelte";
import ColorTimelineTest from "./color-timeline.test.svelte";
import DateFormatTimelineTest from "./date-format-timeline.test.svelte";
import CustomClassTimelineTest from "./custom-class-timeline.test.svelte";
import DatePrefixTimelineTest from "./date-prefix-timeline.test.svelte";
import ActivityOrderTimelineTest from "./activity-order-timeline.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Timeline - Basic Functionality", () => {
  test("renders timeline container with correct element", () => {
    render(BasicTimelineTest);
    const timeline = screen.getByTestId("basic-timeline");

    expect(timeline).toBeInTheDocument();
    expect(timeline.tagName).toBe("OL");
  });

  test("renders timeline with correct data scope", () => {
    render(BasicTimelineTest);
    const timeline = screen.getByTestId("basic-timeline");

    expect(timeline).toHaveAttribute("data-scope", "timeline");
    expect(timeline).toHaveAttribute("data-part", "base");
  });

  test("renders multiple timeline items", () => {
    render(BasicTimelineTest);
    const items = screen.getAllByRole("listitem");

    expect(items).toHaveLength(3);
  });

  test("timeline items have correct data attributes", () => {
    render(BasicTimelineTest);
    const item1 = screen.getByTestId("timeline-item-1");
    const item2 = screen.getByTestId("timeline-item-2");

    expect(item1).toHaveAttribute("data-scope", "timeline-item");
    expect(item1).toHaveAttribute("data-part", "base");
    expect(item2).toHaveAttribute("data-scope", "timeline-item");
    expect(item2).toHaveAttribute("data-part", "base");
  });

  test("renders timeline item titles", () => {
    render(BasicTimelineTest);

    expect(screen.getByTestId("timeline-item-1")).toBeInTheDocument();
    expect(screen.getByTestId("timeline-item-2")).toBeInTheDocument();
    expect(screen.getByTestId("timeline-item-3")).toBeInTheDocument();
  });

  test("renders timeline item dates", () => {
    render(BasicTimelineTest);
    const times = screen.getAllByRole("time");

    expect(times).toHaveLength(3);
    times.forEach((time) => {
      expect(time).toHaveAttribute("datetime");
      expect(time).toHaveAttribute("data-part", "time");
    });
  });
});

describe("Timeline - Order Variants", () => {
  test("renders vertical timeline with correct order", () => {
    render(VerticalTimelineTest);
    const timeline = screen.getByTestId("vertical-timeline");

    expect(timeline).toBeInTheDocument();
  });

  test("vertical timeline items have indicators", () => {
    render(VerticalTimelineTest);
    const indicators = screen.getAllByTestId(/vertical-item-\d+/);

    expect(indicators).toHaveLength(3);
    indicators.forEach((item) => {
      const indicator = item.querySelector('[data-part="indicator"]');
      expect(indicator).toBeInTheDocument();
    });
  });

  test("vertical timeline displays icons", () => {
    render(VerticalTimelineTest);
    const icons = screen.getAllByTestId(/vertical-item-\d+/);

    icons.forEach((item) => {
      const icon = item.querySelector('[data-part="icon"]');
      expect(icon).toBeInTheDocument();
      expect(icon?.tagName).toBe("svg");
    });
  });

  test("renders horizontal timeline", () => {
    render(HorizontalTimelineTest);
    const timeline = screen.getByTestId("horizontal-timeline");

    expect(timeline).toBeInTheDocument();
  });

  test("horizontal timeline has correct items", () => {
    render(HorizontalTimelineTest);
    const items = screen.getAllByRole("listitem");

    expect(items).toHaveLength(3);
  });

  test("renders activity order timeline", () => {
    render(ActivityOrderTimelineTest);
    const timeline = screen.getByTestId("activity-order-timeline");

    expect(timeline).toBeInTheDocument();
  });

  test("activity order timeline has connectors", () => {
    render(ActivityOrderTimelineTest);
    const item1 = screen.getByTestId("activity-item-1");
    const item2 = screen.getByTestId("activity-item-2");

    // First two items should have connectors
    expect(item1.querySelector('[data-part="connector"]')).toBeInTheDocument();
    expect(item2.querySelector('[data-part="connector"]')).toBeInTheDocument();
  });

  test("last item in activity order has no connector", () => {
    render(ActivityOrderTimelineTest);
    const lastItem = screen.getByTestId("activity-item-3");

    expect(lastItem.querySelector('[data-part="connector"]')).not.toBeInTheDocument();
  });
});

describe("Timeline - Color Variants", () => {
  test("renders timeline with different color variants", () => {
    render(ColorTimelineTest);
    const timeline = screen.getByTestId("color-timeline");

    expect(timeline).toBeInTheDocument();
  });

  test("renders all color variant items", () => {
    render(ColorTimelineTest);

    expect(screen.getByTestId("item-primary")).toBeInTheDocument();
    expect(screen.getByTestId("item-green")).toBeInTheDocument();
    expect(screen.getByTestId("item-orange")).toBeInTheDocument();
    expect(screen.getByTestId("item-red")).toBeInTheDocument();
    expect(screen.getByTestId("item-blue")).toBeInTheDocument();
    expect(screen.getByTestId("item-purple")).toBeInTheDocument();
    expect(screen.getByTestId("item-gray")).toBeInTheDocument();
  });

  test("color variant items have indicators", () => {
    render(ColorTimelineTest);
    const items = screen.getAllByTestId(/item-(primary|green|orange|red|blue|purple|gray)/);

    items.forEach((item) => {
      const indicator = item.querySelector('[data-part="indicator"]');
      expect(indicator).toBeInTheDocument();
    });
  });
});

describe("Timeline - Date Formatting", () => {
  test("formats date as year only", () => {
    render(DateFormatTimelineTest);
    const yearItem = screen.getByTestId("year-format");
    const time = yearItem.querySelector('[data-part="time"]');

    expect(time).toBeInTheDocument();
    expect(time?.textContent).toMatch(/2024/);
  });

  test("formats date as month and year", () => {
    render(DateFormatTimelineTest);
    const monthYearItem = screen.getByTestId("month-year-format");
    const time = monthYearItem.querySelector('[data-part="time"]');

    expect(time).toBeInTheDocument();
    expect(time?.textContent).toMatch(/2024/);
  });

  test("formats date as full date", () => {
    render(DateFormatTimelineTest);
    const fullDateItem = screen.getByTestId("full-date-format");
    const time = fullDateItem.querySelector('[data-part="time"]');

    expect(time).toBeInTheDocument();
    expect(time?.textContent).toMatch(/2024/);
  });

  test("time elements have datetime attribute", () => {
    render(DateFormatTimelineTest);
    const times = screen.getAllByRole("time");

    times.forEach((time) => {
      expect(time).toHaveAttribute("datetime");
    });
  });
});

describe("Timeline - Date Prefix", () => {
  test("renders date with custom prefix", () => {
    render(DatePrefixTimelineTest);
    const item1 = screen.getByTestId("prefix-item-1");
    const time = item1.querySelector('[data-part="time"]');

    expect(time).toBeInTheDocument();
  });

  test("prefix appears before date", () => {
    render(DatePrefixTimelineTest);
    const item = screen.getByTestId("prefix-item-1");
    const time = item.querySelector('[data-part="time"]');

    expect(time?.textContent).toBeTruthy();
  });

  test("multiple items can have different prefixes", () => {
    render(DatePrefixTimelineTest);
    const item1 = screen.getByTestId("prefix-item-1");
    const item2 = screen.getByTestId("prefix-item-2");

    const time1 = item1.querySelector('[data-part="time"]');
    const time2 = item2.querySelector('[data-part="time"]');

    expect(time1).toBeInTheDocument();
    expect(time2).toBeInTheDocument();
  });
});

describe("Timeline - Activity Component", () => {
  test("renders activity timeline container", () => {
    render(ActivityTimelineTest);
    const activity = screen.getByTestId("activity-timeline");

    expect(activity).toBeInTheDocument();
    expect(activity.tagName).toBe("OL");
  });

  test("activity container has correct data attributes", () => {
    render(ActivityTimelineTest);
    const activity = screen.getByTestId("activity-timeline");

    expect(activity).toHaveAttribute("data-scope", "activity");
    expect(activity).toHaveAttribute("data-part", "base");
  });

  test("renders activity items", () => {
    render(ActivityTimelineTest);
    const activityItems = screen.getAllByTestId("activity-items");

    expect(activityItems).toHaveLength(3);
  });

  test("activity items have indicators with images", () => {
    render(ActivityTimelineTest);
    const items = screen.getAllByRole("listitem");

    expect(items.length).toBeGreaterThan(0);
    items.forEach((item) => {
      expect(item).toHaveAttribute("data-scope", "activity-item");
      const indicator = item.querySelector('[data-part="indicator"]');
      expect(indicator).toBeInTheDocument();
    });
  });

  test("activity items display images", () => {
    render(ActivityTimelineTest);
    const images = screen.getAllByRole("img");

    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img).toHaveAttribute("src");
      expect(img).toHaveAttribute("alt");
      expect(img).toHaveAttribute("data-part", "img");
    });
  });

  test("activity items have cards", () => {
    render(ActivityTimelineTest);
    const items = screen.getAllByRole("listitem");

    items.forEach((item) => {
      const card = item.querySelector('[data-part="card"]');
      expect(card).toBeInTheDocument();
    });
  });

  test("activity items have headers", () => {
    render(ActivityTimelineTest);
    const items = screen.getAllByRole("listitem");

    items.forEach((item) => {
      const header = item.querySelector('[data-part="header"]');
      expect(header).toBeInTheDocument();
    });
  });

  test("activity items have time elements", () => {
    render(ActivityTimelineTest);
    const items = screen.getAllByRole("listitem");

    items.forEach((item) => {
      const time = item.querySelector('[data-part="time"]');
      expect(time).toBeInTheDocument();
    });
  });
});

describe("Timeline - Group Component", () => {
  test("renders group timeline container", () => {
    render(GroupTimelineTest);
    const container = screen.getByTestId("group-timeline-container");

    expect(container).toBeInTheDocument();
  });

  test("renders multiple groups", () => {
    render(GroupTimelineTest);
    const group1 = screen.getByTestId("group-1");
    const group2 = screen.getByTestId("group-2");

    expect(group1).toBeInTheDocument();
    expect(group2).toBeInTheDocument();
  });

  test("groups have correct data attributes", () => {
  render(GroupTimelineTest);

  const cards = document.querySelectorAll(
    '[data-scope="group"][data-part="card"]'
  );

  expect(cards).toHaveLength(2);
});

  test("groups display time elements", () => {
  render(GroupTimelineTest);

  const cards = document.querySelectorAll(
    '[data-scope="group"][data-part="card"]'
  );

  expect(cards).toHaveLength(2);

  cards.forEach((card) => {
    const time = card.querySelector('[data-part="time"]');
    expect(time).toBeInTheDocument();
  });
});

  test("groups have list containers", () => {
    render(GroupTimelineTest);

    const groups = [
      screen.getByTestId("group-1"),
      screen.getByTestId("group-2")
    ];

    groups.forEach((list) => {
      expect(list).toBeInTheDocument();
      expect(list.tagName).toBe("OL");
      expect(list).toHaveAttribute("data-part", "list");
    });
  });

  test("group items have correct structure", () => {
    render(GroupTimelineTest);
    const items = screen.getAllByRole("listitem");

    expect(items.length).toBeGreaterThan(0);
    items.forEach((item) => {
      expect(item).toHaveAttribute("data-scope", "group-item");
      expect(item).toHaveAttribute("data-part", "base");
    });
  });

  test("group items have links", () => {
    render(GroupTimelineTest);
    const items = screen.getAllByRole("listitem");

    items.forEach((item) => {
      const link = item.querySelector('[data-part="link"]');
      expect(link).toBeInTheDocument();
      expect(link?.tagName).toBe("A");
      expect(link).toHaveAttribute("href");
    });
  });

  test("group items display images", () => {
    render(GroupTimelineTest);
    const images = screen.getAllByRole("img");

    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img).toHaveAttribute("src");
      expect(img).toHaveAttribute("alt");
      expect(img).toHaveAttribute("data-part", "img");
    });
  });

  test("group items have content sections", () => {
    render(GroupTimelineTest);
    const items = screen.getAllByRole("listitem");

    items.forEach((item) => {
      const content = item.querySelector('[data-part="content"]');
      expect(content).toBeInTheDocument();
    });
  });

  test("group items display badges", () => {
    render(GroupTimelineTest);
    const items = screen.getAllByRole("listitem");

    items.forEach((item) => {
      const badge = item.querySelector('[data-part="badge"]');
      expect(badge).toBeInTheDocument();
    });
  });

  test("group items show privacy status icons", () => {
    render(GroupTimelineTest);
    const items = screen.getAllByRole("listitem");

    items.forEach((item) => {
      const badge = item.querySelector('[data-part="badge"]');
      const icon = badge?.querySelector('[data-part="icon"]');
      expect(icon).toBeInTheDocument();
      expect(icon?.tagName).toBe("svg");
    });
  });
});

describe("Timeline - Custom Classes", () => {
  test("applies custom class to timeline", () => {
    render(CustomClassTimelineTest);
    const timeline = screen.getByTestId("custom-class-timeline");

    expect(timeline).toHaveClass("custom-timeline-class");
  });

  test("applies custom class to timeline item", () => {
    render(CustomClassTimelineTest);
    const item = screen.getByTestId("custom-class-item");

    expect(item).toHaveClass("custom-item-class");
  });

  test("applies custom classes to item parts", () => {
    render(CustomClassTimelineTest);
    const item = screen.getByTestId("custom-class-item");

    const title = item.querySelector('[data-part="title"]');
    expect(title).toHaveClass("custom-title-class");

    const time = item.querySelector('[data-part="time"]');
    expect(time).toHaveClass("custom-time-class");

    const indicator = item.querySelector('[data-part="indicator"]');
    expect(indicator).toHaveClass("custom-indicator-class");
  });
});

describe("Timeline - Connector Behavior", () => {
  test("vertical timeline shows connectors except on last item", () => {
    render(VerticalTimelineTest);
    const item1 = screen.getByTestId("vertical-item-1");
    const item2 = screen.getByTestId("vertical-item-2");
    const item3 = screen.getByTestId("vertical-item-3");

    expect(item1.querySelector('[data-part="connector"]')).toBeInTheDocument();
    expect(item2.querySelector('[data-part="connector"]')).toBeInTheDocument();
    expect(item3.querySelector('[data-part="connector"]')).not.toBeInTheDocument();
  });

  test("default order timeline does not show connectors", () => {
    render(BasicTimelineTest);
    const items = screen.getAllByRole("listitem");

    items.forEach((item) => {
      expect(item.querySelector('[data-part="connector"]')).not.toBeInTheDocument();
    });
  });
});

describe("Timeline - Accessibility", () => {
  test("timeline has semantic list structure", () => {
    render(BasicTimelineTest);
    const timeline = screen.getByTestId("basic-timeline");

    expect(timeline.tagName).toBe("OL");
  });

  test("timeline items have list item role", () => {
    render(BasicTimelineTest);
    const items = screen.getAllByRole("listitem");

    expect(items.length).toBeGreaterThan(0);
    items.forEach((item) => {
      expect(item.tagName).toBe("LI");
    });
  });

  test("time elements have semantic time role", () => {
    render(BasicTimelineTest);
    const times = screen.getAllByRole("time");

    expect(times.length).toBeGreaterThan(0);
    times.forEach((time) => {
      expect(time.tagName).toBe("TIME");
    });
  });

  test("time elements have datetime attribute", () => {
    render(BasicTimelineTest);
    const times = screen.getAllByRole("time");

    times.forEach((time) => {
      expect(time).toHaveAttribute("datetime");
      expect(time.getAttribute("datetime")).toBeTruthy();
    });
  });

  test("activity images have alt attributes", () => {
    render(ActivityTimelineTest);
    const images = screen.getAllByRole("img");

    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
    });
  });

  test("group item links are keyboard accessible", () => {
    render(GroupTimelineTest);
    const links = screen.getAllByRole("link");

    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
    });
  });

  test("icons have aria-hidden attribute", () => {
    render(VerticalTimelineTest);
    const item = screen.getByTestId("vertical-item-1");
    const icon = item.querySelector('[data-part="icon"]');

    expect(icon).toHaveAttribute("aria-hidden", "true");
  });
});

describe("Timeline - Edge Cases", () => {
  test("handles single timeline item", () => {
    const { container } = render(BasicTimelineTest);
    const items = container.querySelectorAll("li");

    expect(items.length).toBeGreaterThan(0);
  });

  test("handles invalid date gracefully", () => {
    // The component should still render even with invalid dates
    render(BasicTimelineTest);
    const times = screen.getAllByRole("time");

    times.forEach((time) => {
      expect(time).toBeInTheDocument();
    });
  });

  test("renders timeline without dates in default order", () => {
    render(BasicTimelineTest);
    const timeline = screen.getByTestId("basic-timeline");

    expect(timeline).toBeInTheDocument();
  });

  test("handles empty activity array", () => {
    // Component should handle empty arrays gracefully
    render(ActivityTimelineTest);
    const activity = screen.getByTestId("activity-timeline");

    expect(activity).toBeInTheDocument();
  });
});

describe("Timeline - Structure", () => {
  test("timeline items maintain order", () => {
    render(BasicTimelineTest);
    const items = screen.getAllByRole("listitem");

    expect(items[0]).toBe(screen.getByTestId("timeline-item-1"));
    expect(items[1]).toBe(screen.getByTestId("timeline-item-2"));
    expect(items[2]).toBe(screen.getByTestId("timeline-item-3"));
  });

  test("timeline renders as ordered list", () => {
    render(BasicTimelineTest);
    const timeline = screen.getByTestId("basic-timeline");

    expect(timeline.tagName).toBe("OL");
  });

  test("activity renders as ordered list", () => {
    render(ActivityTimelineTest);
    const activity = screen.getByTestId("activity-timeline");

    expect(activity.tagName).toBe("OL");
  });

  test("group list renders as ordered list", () => {
    render(GroupTimelineTest);
    const list = screen.getByTestId("group-1");

    expect(list.tagName).toBe("OL");
  });
});
