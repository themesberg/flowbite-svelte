export function excludeIconsByKeyword(icons: { [key: string]: any }, keyword: string) {
  const filteredIcons: { [key: string]: any } = {};
  for (const key in icons) {
    if (!key.includes(keyword)) {
      filteredIcons[key] = icons[key];
    }
  }
  return filteredIcons;
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      throw err; // Re-throw the error so the caller can handle it if needed
    });
}

export function replaceLibImport(componentString: string): string {
  return componentString.replace(/from ["']\$lib["']/g, "from 'svelte-5-ui-lib'").replace(/from ["']\$lib\//g, "from 'svelte-5-ui-lib/");
}

export const isGeneratedCodeOverflow = (code: string): boolean => {
  const lines = code.split("\n");
  return lines.length > 7;
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export function filterIconsByKeyword(icons: { [key: string]: any }, keyword: string) {
  const filteredIcons: { [key: string]: any } = {};
  for (const key in icons) {
    if (key.includes(keyword)) {
      filteredIcons[key] = icons[key];
    }
  }
  return filteredIcons;
}

/**
 * Toggles between dark and light versions of a string name
 * @param {string} name - The string to toggle (e.g., "A404NotFoundSmiley" or "A404NotFoundSmileyDark")
 * @returns {string} - The toggled string
 */
export function toggleDarkMode(name: string) {
  const darkSuffix = "Dark";

  // Check if the string ends with "Dark"
  if (name.endsWith(darkSuffix)) {
    // Remove "Dark" suffix
    return name.slice(0, -darkSuffix.length);
  } else {
    // Add "Dark" suffix
    return name + darkSuffix;
  }
}

/**
 * Creates both light and dark versions of a name
 * @param {string} baseName - The base name without "Dark" suffix
 * @returns {Object} - Object containing both versions of the name
 */
export function createImageVariants(baseName: string) {
  // Remove "Dark" suffix if it exists to ensure we start with the base name
  const cleanBaseName = baseName.endsWith("Dark") ? baseName.slice(0, -4) : baseName;

  return {
    light: cleanBaseName,
    dark: cleanBaseName + "Dark"
  };
}
