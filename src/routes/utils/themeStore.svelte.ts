import { browser } from "$app/environment";

export interface Theme {
  id: string;
  name: string;
  cssPath: string;
  fontUrl: string;
  colors: string[];
}

export type ThemeId = "default" | "minimal" | "enterprise" | "playful" | "mono";

const themes: Theme[] = [
  {
    id: "default",
    name: "Default",
    cssPath: "/themes/default.css",
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
    cssPath: "/themes/enterprise.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap",
    colors: ["bg-zinc-100 dark:bg-zinc-700", "bg-cyan-50 dark:bg-cyan-900", "bg-cyan-100 dark:bg-cyan-800", "bg-cyan-700 dark:bg-cyan-700"]
  },
  {
    id: "playful",
    name: "Playful",
    cssPath: "/themes/playful.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
    colors: ["bg-slate-100 dark:bg-slate-700", "bg-pink-50 dark:bg-pink-900", "bg-pink-100 dark:bg-pink-800", "bg-pink-700 dark:bg-pink-700"]
  },
  {
    id: "mono",
    name: "Mono",
    cssPath: "/themes/mono.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap",
    colors: ["bg-neutral-100 dark:bg-neutral-700", "bg-indigo-50 dark:bg-indigo-900", "bg-indigo-100 dark:bg-indigo-800", "bg-indigo-700 dark:bg-indigo-700"]
  }
];

const getInitialTheme = (): string => {
  if (browser) {
    try {
      return localStorage.getItem("flowbite-svelte-theme") || "default";
    } catch (e) {
      console.warn("localStorage not available:", e);
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

  console.log(`Loading theme: ${themeId}`);

  // Remove existing theme CSS (including initial theme)
  const existingThemeLink = document.getElementById("dynamic-theme-css");
  const initialThemeLink = document.getElementById("initial-theme-css");

  if (existingThemeLink) {
    existingThemeLink.remove();
  }
  if (initialThemeLink) {
    initialThemeLink.remove();
  }

  // Remove existing font link
  const existingFontLink = document.getElementById("dynamic-theme-font");
  if (existingFontLink) {
    existingFontLink.remove();
  }

  // Add new font with cache busting
  const fontLink = document.createElement("link");
  fontLink.id = "dynamic-theme-font";
  fontLink.rel = "stylesheet";
  fontLink.href = theme.fontUrl;
  document.head.appendChild(fontLink);

  // Add new theme CSS with cache busting
  const themeLink = document.createElement("link");
  themeLink.id = "dynamic-theme-css";
  themeLink.rel = "stylesheet";
  // Add timestamp to prevent caching issues
  themeLink.href = `${theme.cssPath}?t=${Date.now()}`;

  // Add onload handler to ensure CSS is loaded
  themeLink.onload = () => {
    console.log(`✓ Theme ${themeId} CSS loaded successfully`);
    // Force a reflow to apply the new styles
    document.body.offsetHeight;
  };

  themeLink.onerror = () => {
    console.error(`✗ Failed to load theme ${themeId} CSS from ${theme.cssPath}`);
  };

  document.head.appendChild(themeLink);

  // Save to localStorage
  try {
    localStorage.setItem("flowbite-svelte-theme", themeId);
  } catch (e) {
    console.warn("Could not save theme:", e);
  }

  // Update state (this is reactive!)
  currentTheme = themeId;
  console.log(`Current theme state updated to: ${currentTheme}`);
}

// Export getter functions to access the state
export function getCurrentTheme(): string {
  return currentTheme;
}

export function getSelectedTheme(): Theme | undefined {
  return selectedTheme;
}

export { themes };
