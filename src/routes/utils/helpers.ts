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

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((err) => {
      console.error('Failed to copy: ', err);
      throw err; // Re-throw the error so the caller can handle it if needed
    });
}

export function toUpperSnakeCase(text: string): string {
  // replace spaces and - to _ and convert to uppercase
  return text.replace(/[\s-]/g, '_').toUpperCase();
}

export const isOverflow = (markdown: string, modules: Record<string, any>): boolean => {
  const markdownLines = modules[`./md/${markdown}`];
  const lines = markdownLines.split('\n');
  return lines.length > 7;
};


export function getFilteredFileNames(dirName: string) {
  if (import.meta.env.DEV) {
    const modules = import.meta.glob('$lib/**/*.svelte');
    const pathsArray = Object.keys(modules);
    const filteredPaths = pathsArray.filter((path) => path.includes(dirName));
    const fileNames = filteredPaths.map((path) => {
      const parts = path.split('/');
      const fileNameWithExtension = parts[parts.length - 1];
      const fileNameWithoutExtension = fileNameWithExtension.substring(0, fileNameWithExtension.lastIndexOf('.'));

      return fileNameWithoutExtension;
    });

    return fileNames;
  } else {
    // Return an empty array or some default value for production builds
    return [];
  }
}

export function toKebabCase(inputString: string) {
  return inputString.toLowerCase().replace(/\s+/g, '-');
}