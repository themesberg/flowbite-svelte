import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { NumericRange } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
  const status = +params.code;

  if (isNaN(status) || status < 400 || status > 599) {
    throw error(500, 'Wrong code');
  } else {
    const code = status as NumericRange<400, 599>;
    throw error(code, 'Not found');
  }
};
