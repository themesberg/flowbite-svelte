import { dev } from "$app/environment";
import { error } from "@sveltejs/kit";

// Internal test pages: only served by `vite dev`, 404 in production builds.
export const load = () => {
  if (!dev) error(404, "Not found");
};
