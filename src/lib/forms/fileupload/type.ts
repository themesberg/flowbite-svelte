import type { HTMLInputAttributes } from 'svelte/elements';
import type { InputProps } from '$lib';

interface FileuploadProps extends Omit<HTMLInputAttributes, 'size'> {
	files?: FileList;
	size?: InputProps<never>['size'];
	color?: InputProps<never>['color'];
	clearable?: boolean;
	class?: string;
}

export { type FileuploadProps };
