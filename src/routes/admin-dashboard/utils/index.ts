export { default as JSONView } from './JSONView.svelte';
export { default as CompoAttributesViewer } from './CompoAttributesViewer.svelte';
export { default as CodeWrapper } from './CodeWrapper.svelte';
export { default as HighlightCompo } from './HighlightCompo.svelte';
/**
 * Extracts the route name from a SvelteKit file path
 * @param {string} path - The file path (e.g. '/src/routes/builder/video/+page.svelte')
 * @returns {string} - The extracted route name (e.g. 'video')
 */
const extractRouteName = (path: string): string => {
  // Split the path by '/'
  const parts = path.split('/');

  // Find the index of the part containing '+page.svelte'
  const pageIndex = parts.findIndex((part) => part.includes('+page.svelte'));

  // Return the part before '+page.svelte', or empty string if not found
  return pageIndex > 0 ? parts[pageIndex - 1] : '';
};

export const fetchAdminDashboardApiCheck = async () => {
  const adminDashboardFiles = import.meta.glob('/src/routes/api-check/**/*.svelte');
  const allPaths = Object.keys(adminDashboardFiles)
    .map((path) => ({
      path: extractRouteName(path)
    }))
    .filter(
      (item, index, self) => item.path !== 'builder' && item.path !== 'layout' && item.path !== 'layoutExamples' && item.path !== 'utils' && self.findIndex((i) => i.path === item.path) === index
    );

  // console.log(allPaths)
  return allPaths;
};
