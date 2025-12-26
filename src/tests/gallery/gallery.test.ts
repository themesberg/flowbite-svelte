import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicGallery from "./basic-gallery.test.svelte";
import CustomFigureGallery from "./custom-figure-gallery.test.svelte";
import EmptyGallery from "./empty-gallery.test.svelte";
import CustomClassGallery from "./custom-class-gallery.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Gallery - Basic", () => {
  test("renders gallery container", () => {
    render(BasicGallery);
    const gallery = screen.getByTestId("gallery-container");
    expect(gallery).toBeInTheDocument();
  });

  test("renders all images", () => {
    render(BasicGallery);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
  });

  test("images have correct src attributes", () => {
    render(BasicGallery);
    const images = screen.getAllByRole("img");

    images.forEach((img) => {
      expect(img.getAttribute("src")).toMatch(/^data:image\//);
    });
  });

  test("images have correct alt attributes", () => {
    render(BasicGallery);
    const images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute("alt", "Image 1");
    expect(images[1]).toHaveAttribute("alt", "Image 2");
    expect(images[2]).toHaveAttribute("alt", "Image 3");
  });
});

describe("Gallery - Custom Figure", () => {
  test("renders custom figure content", () => {
    render(CustomFigureGallery);
    const captions = screen.getAllByTestId("custom-caption");
    expect(captions).toHaveLength(3);
  });

  test("custom figure includes image", () => {
    render(CustomFigureGallery);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
  });

  test("custom captions have correct text", () => {
    render(CustomFigureGallery);
    expect(screen.getByText("Caption 1")).toBeInTheDocument();
    expect(screen.getByText("Caption 2")).toBeInTheDocument();
    expect(screen.getByText("Caption 3")).toBeInTheDocument();
  });
});

describe("Gallery - Empty", () => {
  test("renders children when no items provided", () => {
    render(EmptyGallery);
    expect(screen.getByText("Custom gallery content")).toBeInTheDocument();
  });

  test("renders container with no images", () => {
    render(EmptyGallery);
    const images = screen.queryAllByRole("img");
    expect(images).toHaveLength(0);
  });
});

describe("Gallery - Custom Class", () => {
  test("applies custom class to container", () => {
    render(CustomClassGallery);
    const gallery = screen.getByTestId("gallery-container");
    const galleryDiv = gallery.querySelector("div");
    expect(galleryDiv).not.toBeNull();
    expect(galleryDiv).toHaveClass("custom-gallery-class");
  });

  test("applies custom class to images", () => {
    render(CustomClassGallery);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toHaveClass("custom-image-class");
    });
  });
});
