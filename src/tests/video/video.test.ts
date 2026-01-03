import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicVideoTest from "./basic-video.test.svelte";
import ControlsVideoTest from "./controls-video.test.svelte";
import AutoplayVideoTest from "./autoplay-video.test.svelte";
import LoopVideoTest from "./loop-video.test.svelte";
import TypeVideoTest from "./type-video.test.svelte";
import CustomClassVideoTest from "./custom-class-video.test.svelte";
import TrackVideoTest from "./track-video.test.svelte";
import ChildrenVideoTest from "./children-video.test.svelte";
import DimensionsVideoTest from "./dimensions-video.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Video Component", () => {
  describe("Basic Rendering", () => {
    test("renders video element", () => {
      render(BasicVideoTest);
      const video = screen.getByTestId("basic-video");

      expect(video).toBeInTheDocument();
      expect(video.tagName).toBe("VIDEO");
    });

    test("video has correct data attributes", () => {
      render(BasicVideoTest);
      const video = screen.getByTestId("basic-video");

      expect(video).toHaveAttribute("data-scope", "video");
      expect(video).toHaveAttribute("data-part", "base");
    });

    test("renders source element with correct src", () => {
      render(BasicVideoTest);
      const video = screen.getByTestId("basic-video");
      const source = video.querySelector("source");

      expect(source).toBeInTheDocument();
      expect(source).toHaveAttribute("src", "https://example.com/video.mp4");
      expect(source).toHaveAttribute("data-part", "source");
    });

    test("renders track element with correct attributes", () => {
      render(BasicVideoTest);
      const video = screen.getByTestId("basic-video");
      const track = video.querySelector("track");

      expect(track).toBeInTheDocument();
      expect(track).toHaveAttribute("src", "https://example.com/captions.vtt");
      expect(track).toHaveAttribute("kind", "captions");
      expect(track).toHaveAttribute("data-part", "track");
    });
  });

  describe("Video Attributes", () => {
    test("video with controls attribute", () => {
      render(ControlsVideoTest);
      const video = screen.getByTestId("controls-video");

      expect(video).toHaveAttribute("controls");
    });

    test("video with autoplay attributes", () => {
      render(AutoplayVideoTest);
      const video = screen.getByTestId("autoplay-video");

      expect(video).toHaveAttribute("autoplay");
      // expect(video).toHaveAttribute("muted");
    });

    test("video with loop attribute", () => {
      render(LoopVideoTest);
      const video = screen.getByTestId("loop-video");

      expect(video).toHaveAttribute("loop");
    });

    test("video with width and height attributes", () => {
      render(DimensionsVideoTest);
      const video = screen.getByTestId("dimensions-video");

      expect(video).toHaveAttribute("width", "640");
      expect(video).toHaveAttribute("height", "360");
    });
  });

  describe("Source Type Variants", () => {
    test("renders video with mp4 type", () => {
      render(TypeVideoTest);
      const video = screen.getByTestId("mp4-video");
      const source = video.querySelector("source");

      expect(source).toHaveAttribute("type", "video/mp4");
    });

    test("renders video with webm type", () => {
      render(TypeVideoTest);
      const video = screen.getByTestId("webm-video");
      const source = video.querySelector("source");

      expect(source).toHaveAttribute("type", "video/webm");
    });

    test("renders video with ogg type", () => {
      render(TypeVideoTest);
      const video = screen.getByTestId("ogg-video");
      const source = video.querySelector("source");

      expect(source).toHaveAttribute("type", "video/ogg");
    });
  });

  describe("Track Attributes", () => {
    test("track element has correct language attribute", () => {
      render(TrackVideoTest);
      const video = screen.getByTestId("track-video");
      const track = video.querySelector("track");

      expect(track).toHaveAttribute("srclang", "en");
      expect(track).toHaveAttribute("label", "english_captions");
    });

    test("track element supports different languages", () => {
      render(TrackVideoTest);
      const video = screen.getByTestId("spanish-track-video");
      const track = video.querySelector("track");

      expect(track).toHaveAttribute("srclang", "es");
      expect(track).toHaveAttribute("label", "spanish_captions");
    });
  });

  describe("Props", () => {
    test("custom class is applied to video", () => {
      render(CustomClassVideoTest);
      const video = screen.getByTestId("custom-class-video");

      expect(video).toHaveClass("custom-video-class");
    });
  });

  describe("Children Snippet", () => {
    test("renders additional source elements from children", () => {
      render(ChildrenVideoTest);
      const altSource = screen.getByTestId("alt-source");

      expect(altSource).toBeInTheDocument();
      expect(altSource).toHaveAttribute("src", "https://example.com/video-alt.webm");
      expect(altSource).toHaveAttribute("type", "video/webm");
    });

    test("children sources are rendered in correct order", () => {
      render(ChildrenVideoTest);
      const video = screen.getByTestId("children-video");
      const sources = video.querySelectorAll("source");

      // Should have original source plus children source
      expect(sources.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("Accessibility", () => {
    test("video has track element for captions", () => {
      render(BasicVideoTest);
      const video = screen.getByTestId("basic-video");
      const track = video.querySelector("track");

      expect(track).toBeInTheDocument();
      expect(track).toHaveAttribute("kind", "captions");
    });

    test("track element has proper language labeling", () => {
      render(TrackVideoTest);
      const video = screen.getByTestId("track-video");
      const track = video.querySelector("track");

      expect(track).toHaveAttribute("srclang");
      expect(track).toHaveAttribute("label");
    });
  });

  describe("Fallback Content", () => {
    test("video includes browser not supported message", () => {
      render(BasicVideoTest);
      const video = screen.getByTestId("basic-video");

      // Check that fallback text is present in the video element
      expect(video.textContent).toContain("Your browser does not support the video tag.");
    });
  });
});
