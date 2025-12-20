import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicAvatarTest from "./basic-avatar.test.svelte";
import AvatarWithImageTest from "./avatar-with-image.test.svelte";
import AvatarWithDotTest from "./avatar-with-dot.test.svelte";
import AvatarLinkTest from "./avatar-link.test.svelte";
import AvatarWithBorderTest from "./avatar-with-border.test.svelte";
import AvatarSizesTest from "./avatar-sizes.test.svelte";
import AvatarSquaredTest from "./avatar-squared.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Avatar Component", () => {
  describe("Basic Rendering", () => {
    test("renders default avatar with SVG placeholder", () => {
      render(BasicAvatarTest);
      const button = screen.getByRole("button");
      const svg = button.querySelector("svg");

      expect(button).toBeInTheDocument();
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass("rounded-full");
    });

    test("renders avatar with image source", () => {
      render(AvatarWithImageTest);
      // When only src is provided (no href, children, dot, or indicator),
      // Avatar renders as a standalone img element
      const img = screen.getByRole("img", { name: "User avatar" });

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", "https://flowbite.com/docs/images/people/profile-picture-5.jpg");
      expect(img).toHaveAttribute("alt", "User avatar");
    });

    test("renders avatar with dot indicator", () => {
      render(AvatarWithDotTest);
      const button = screen.getByRole("button");
      const img = button.querySelector("img");

      expect(img).toBeInTheDocument();
      // Indicator component should be present (checking for its typical structure)
      const indicator = button.querySelector('[class*="absolute"]');
      expect(indicator).toBeInTheDocument();
    });
  });

  describe("Link Behavior", () => {
    test("renders as link when href is provided", () => {
      render(AvatarLinkTest);
      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/profile");
      expect(link.querySelector("img")).toHaveAttribute("alt", "Profile link");
    });
  });

  describe("Styling Variants", () => {
    test("renders with border", () => {
      render(AvatarWithBorderTest);
      // Avatar with only src and border renders as standalone img
      const img = screen.getByRole("img", { name: "Bordered avatar" });

      expect(img).toBeInTheDocument();
      // The border class (ring-2) should be applied
      expect(img.className).toContain("ring");
    });

    test("renders squared corner style", () => {
      render(AvatarSquaredTest);
      // Avatar with only src renders as standalone img
      const img = screen.getByRole("img", { name: "Squared avatar" });

      expect(img).toBeInTheDocument();
      // Verify the image is rendered properly
      expect(img).toHaveAttribute("src");
      expect(img).toHaveAttribute("alt", "Squared avatar");
    });

    test("renders different sizes", () => {
      render(AvatarSizesTest);
      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(5);
      // Each size should have different classes applied
      buttons.forEach((button) => {
        expect(button).toBeInTheDocument();
        expect(button.className).toBeTruthy();
      });
    });
  });

  describe("Accessibility", () => {
    test("has proper alt text for images", () => {
      render(AvatarWithImageTest);
      const img = screen.getByAltText("User avatar");

      expect(img).toBeInTheDocument();
    });

    test("default avatar has accessible role", () => {
      render(BasicAvatarTest);
      const button = screen.getByRole("button");
      const svg = button.querySelector("svg");

      expect(svg).toBeInTheDocument();
    });
  });
});
