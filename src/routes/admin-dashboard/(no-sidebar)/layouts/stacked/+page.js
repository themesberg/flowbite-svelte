import * as dashboard from '../../../(sidebar)/dashboard/+page';

/** @type {import('../../../(sidebar)/dashboard/$types').PageLoad} */
export function load(request) {
	return dashboard.load(request);
}
