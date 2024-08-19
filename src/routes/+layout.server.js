import { FATHOM_ID } from '$env/static/private';
/** @type {import('./$types').LayoutServerLoad} \*/
export async function load() {
  return { FATHOM_ID };
}
