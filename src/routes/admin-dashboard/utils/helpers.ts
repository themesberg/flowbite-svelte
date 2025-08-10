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

export function toKebabCase(inputString: string) {
  return inputString.toLowerCase().replace(/\s+/g, '-');
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

// export const isOverflow = (markdown: string, modules: Record<string, any>): boolean => {
//   const markdownLines = modules[`./md/${markdown}`];
//   const lines = markdownLines.split('\n');
//   return lines.length > 7;
// };

export const isGeneratedCodeOverflow = (code: string): boolean => {
  const lines = code.split('\n');
  return lines.length > 7;
};

export const isSvelteOverflow = (sveltefile: string, exampleModules: Record<string, string>): boolean => {
  const filePath = `./examples/${sveltefile}`;
  const fileContent = exampleModules[filePath];

  if (typeof fileContent !== 'string') {
    console.warn(`File content for ${filePath} is not found or not a string`);
    return false;
  }

  const lines = fileContent.split('\n');
  return lines.length > 7;
};

// import { fileList } from '../../generatedFileList';

/**
 * Returns an array of file names from the `fileList` that include the specified `dirName`.
 *
 * @param {string} dirName - The directory name to filter the file list by.
 * @return {string[]} An array of file names without extensions.
 */
// export function getFilteredFileNames(dirName: string): string[] {
// 	const filteredPaths = fileList.filter((path) => path.includes(`src/lib/${dirName}`));
// 	// console.log("filteredPaths", filteredPaths);
// 	const fileNames = filteredPaths.map((path) => {
// 		const parts = path.split('/');
// 		const fileNameWithExtension = parts[parts.length - 1];
// 		const fileNameWithoutExtension = fileNameWithExtension.substring(
// 			0,
// 			fileNameWithExtension.lastIndexOf('.')
// 		);

// 		return fileNameWithoutExtension;
// 	});

// 	return fileNames;
// }

export function replaceLibImport(componentString: string | undefined, libraryName: string): string {
  if (typeof componentString !== 'string') {
    throw new Error('Invalid componentString: Expected a string');
  }

  return componentString.replace(/from '\$lib'/g, `from '${libraryName}'`);
}

export function getExampleFileName(selectedExample: string, exampleArr: { name: string }[]): string {
  const foundExample = exampleArr.find((example) => example.name === selectedExample);

  if (!foundExample) {
    // If the selectedExample is not in the array, default to the first example
    selectedExample = exampleArr[0].name || '';
  }

  // Convert the selected example to PascalCase
  const result = selectedExample
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  return `${result}.svelte`;
}
