import type { ParamMatcher } from '@sveltejs/kit';

// Only allow lowercase letters, numbers, and hyphens
export const match: ParamMatcher = (param) => {
  return /^[a-z0-9-]+$/.test(param);
};
