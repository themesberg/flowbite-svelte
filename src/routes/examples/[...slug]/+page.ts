import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import type { Component } from "svelte";

const modules = import.meta.glob("../**/*.svelte");

export const load: PageLoad = async ({ params }) => {
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;
  const path = `../${slug}.svelte`;

  const loader = modules[path];

  if (!loader) {
    throw error(404, `Page not found: ${slug}`);
  }

  const module = (await loader()) as { default: Component };

  return {
    content: module.default
  };
};
