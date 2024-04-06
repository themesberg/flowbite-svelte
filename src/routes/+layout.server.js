import { ANALYTICS_ID } from '$env/static/private';
/** @type {import('./$types').LayoutServerLoad} */
export async function load () {
	return {ANALYTICS_ID}
}