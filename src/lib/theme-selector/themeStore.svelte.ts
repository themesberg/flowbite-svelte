import { browser } from "$app/environment";
import { dev } from "$app/environment";
import { themeConfigs, type FlowbiteTheme, type ThemeId } from "./themes";

const getInitialTheme = (): string => {
  if (browser) {
    try {
      return localStorage.getItem("flowbite-svelte-theme") || "default";
    } catch (e) {
      // console.warn("localStorage not available:", e);
      return "default";
    }
  }
  return "default";
};

// Using $state rune for reactive global state
let currentTheme = $state<string>(getInitialTheme());

// Using $derived for computed value
let selectedTheme = $derived<FlowbiteTheme | undefined>(themeConfigs.find((t) => t.id === currentTheme));

export function loadTheme(themeId: string): void {
  if (!browser) return;

  const theme = themeConfigs.find((t) => t.id === themeId);
  if (!theme) {
    console.error(`Theme ${themeId} not found`);
    return;
  }

  if (dev) console.log(`Loading theme: ${themeId}`);

  // Remove ALL existing theme links
  const existingLinks = document.querySelectorAll("#dynamic-theme-css, #initial-theme-css, #dynamic-theme-font");
  existingLinks.forEach((link) => link.remove());

  // Add new font
  const fontLink = document.createElement("link");
  fontLink.id = "dynamic-theme-font";
  fontLink.rel = "stylesheet";
  fontLink.href = theme.fontUrl;
  fontLink.onerror = () => {
    console.warn(`Failed to load font for theme ${themeId}`);
  };
  document.head.appendChild(fontLink);

  // Add new theme CSS
  const themeLink = document.createElement("link");
  themeLink.id = "dynamic-theme-css";
  themeLink.rel = "stylesheet";
  themeLink.href = theme.cssPath;

  // Add onload handler
  themeLink.onload = () => {
    if (dev) console.log(`✓ Theme ${themeId} loaded successfully`);
    // Reading offsetHeight triggers synchronous layout recalculation
    void document.body.offsetHeight;
    // Also trigger recalculation by temporarily modifying a style
    const html = document.documentElement;
    const originalTransition = html.style.transition;
    html.style.transition = "none";
    void html.offsetHeight;
    html.style.transition = originalTransition;
  };

  themeLink.onerror = () => {
    console.error(`✗ Failed to load theme ${themeId} from ${theme.cssPath}`);
  };

  document.head.appendChild(themeLink);

  // Save to localStorage
  try {
    localStorage.setItem("flowbite-svelte-theme", themeId);
  } catch (e) {
    console.warn("Could not save theme:", e);
  }

  // Update state
  currentTheme = themeId;
  if (dev) console.log(`Theme state updated to: ${currentTheme}`);
}

// Export getter functions to access the state
export function getCurrentTheme(): string {
  return currentTheme;
}

export function getSelectedTheme(): FlowbiteTheme | undefined {
  return selectedTheme;
}

export { themeConfigs };
export type { FlowbiteTheme, ThemeId };
