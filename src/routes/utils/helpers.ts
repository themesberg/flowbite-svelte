export function removeHyphensAndCapitalize(str: string) {
  // Handle empty string or strings without '-'
  if (!str || !str.includes('-')) {
    return str;
  }

  // Capitalize the first letter (including after hyphens)
  const capitalized = str.replace(/(^|\s|-)\w/g, (match: string) => match.toUpperCase());

  // Remove hyphens and ensure spaces after words
  return capitalized.replace(/-|\s{2,}/g, ' ');
}

export function splitAndCapitalize(text: string) {
  // Split the string using '/' as the delimiter
  const parts = text.split('/');

  // If there are no parts, return an empty string
  if (!parts.length) return '';

  // Get the last element of the array and capitalize it
  return parts[parts.length - 1].charAt(0).toUpperCase() + parts[parts.length - 1].slice(1);
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The input string.
 * @return {string} The input string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
