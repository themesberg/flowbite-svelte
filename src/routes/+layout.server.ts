import { FATHOM_ID } from "$env/static/private";
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  return { FATHOM_ID };
}
