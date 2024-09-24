import { dropzone } from './theme';
import Dropzone from './Dropzone.svelte';
import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';

interface DropzoneProps extends HTMLInputAttributes {
  children: Snippet;
  value?: string;
  files?: FileList | null;
}

export { Dropzone, dropzone, type DropzoneProps };
