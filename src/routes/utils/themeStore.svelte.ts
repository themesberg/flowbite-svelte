import { browser } from "$app/environment";
import { dev } from "$app/environment";

export type ThemeId = "default" | "minimal" | "enterprise" | "playful" | "mono";
export interface Theme {
  id: ThemeId;
  name: string;
  cssPath: string;
  fontUrl: string;
  colors: string[];
}

const themes: Theme[] = [
  {
    id: "default",
    name: "Default",
    cssPath: "/themes/default-runtime.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
    colors: ["bg-gray-100 dark:bg-gray-700", "bg-blue-50 dark:bg-blue-900", "bg-blue-200 dark:bg-blue-800", "bg-blue-700 dark:bg-blue-700"]
  },
  {
    id: "minimal",
    name: "Minimal",
    cssPath: "/themes/minimal.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
    colors: ["bg-stone-50 dark:bg-stone-600", "bg-stone-100 dark:bg-stone-700", "bg-stone-300 dark:bg-stone-800", "bg-stone-900 dark:bg-stone-900"]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    cssPath: "/themes/enterprise-runtime.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
    colors: ["bg-zinc-100 dark:bg-zinc-700", "bg-cyan-50 dark:bg-cyan-900", "bg-cyan-100 dark:bg-cyan-800", "bg-cyan-700 dark:bg-cyan-700"]
  },
  {
    id: "playful",
    name: "Playful",
    cssPath: "/themes/playful.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap",
    colors: ["bg-slate-100 dark:bg-slate-700", "bg-pink-50 dark:bg-pink-900", "bg-pink-100 dark:bg-pink-800", "bg-pink-700 dark:bg-pink-700"]
  },
  {
    id: "mono",
    name: "Mono",
    cssPath: "/themes/mono.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=Google+Sans+Code:wght@300;400;500;600;700&display=swap",
    colors: ["bg-neutral-100 dark:bg-neutral-700", "bg-indigo-50 dark:bg-indigo-900", "bg-indigo-100 dark:bg-indigo-800", "bg-indigo-700 dark:bg-indigo-700"]
  }
];

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
let selectedTheme = $derived<Theme | undefined>(themes.find((t) => t.id === currentTheme));

export function loadTheme(themeId: string): void {
  if (!browser) return;

  const theme = themes.find((t) => t.id === themeId);
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

export function getSelectedTheme(): Theme | undefined {
  return selectedTheme;
}

export { themes };
