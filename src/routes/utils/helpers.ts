export function getFilteredFileNames(dirName: string) {
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
}

export function toKebabCase(inputString: string) {
  return inputString.toLowerCase().replace(/\s+/g, '-');
}
