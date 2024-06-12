import * as dashboard from './dashboard/+page';

/** @type {import('../(sidebar)/dashboard/$types').PageLoad} */
export function load(request) {
	return dashboard.load(request);
}
