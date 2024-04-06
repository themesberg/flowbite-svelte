import { ANALYTICS_ID } from '$env/dynamic/private';
// console.log('ANALYTICS_ID', ANALYTICS_ID);
/** @type {import('./$types').LayoutServerLoad} */
export async function load
	() {
	return {ANALYTICS_ID}
}