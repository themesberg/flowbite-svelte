import { tv } from 'tailwind-variants';

export const anchor = tv({
	slots: {
		base: 'group relative',
		span: 'absolute -top-[100px]',
		anchor:
			'ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-700'
	}
});
