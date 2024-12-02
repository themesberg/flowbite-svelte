export function removeHyphensAndCapitalize(str: string): string {
  // Handle empty string or strings without '-'
  if (!str || !str.includes('-')) {
    return str;
  }

  // Capitalize the first letter (including after hyphens)
  const capitalized = str.replace(/(^|\s|-)\w/g, (match) => match.toUpperCase());

  // Remove hyphens and ensure spaces after words
  return capitalized.replace(/-|\s{2,}/g, ' ');
}

// Function to filter items that have keyword in their keys
export function filterIconsByKeyword<T>(icons: Record<string, T>, keyword: string): Record<string, T> {
  const filteredIcons: Record<string, T> = {};
  for (const key in icons) {
    if (key.includes(keyword) && !key.includes('IconOutline') && !key.includes('IconSolid')) {
      filteredIcons[key] = icons[key];
    }
  }
  return filteredIcons;
}

export function excludeItemsByKeywords<T>(items: Record<string, T>, keywords: string[]): Record<string, T> {
  const filteredItems: Record<string, T> = {};
  for (const key in items) {
    if (keywords.every((keyword) => !key.includes(keyword))) {
      filteredItems[key] = items[key];
    }
  }
  return filteredItems;
}

export const random_tailwind_color = (): string => {
  const colors: string[] = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  const shades: string[] = ['300', '400', '500'];
  const randomColor: string = colors[Math.floor(Math.random() * colors.length)];
  const randomShade: string = shades[Math.floor(Math.random() * shades.length)];
  return `text-${randomColor}-${randomShade} dark:text-${randomColor}-${randomShade} shrink-0`;
};

export const random_hex_color_code = (): string => {
  const n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
