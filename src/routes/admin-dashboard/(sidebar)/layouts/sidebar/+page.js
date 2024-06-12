import * as dashboard from '../../../(sidebar)/dashboard/+page';

/** @type {import('../../dashboard/$types').PageLoad} */
export function load(request) {
	return dashboard.load(request);
}
