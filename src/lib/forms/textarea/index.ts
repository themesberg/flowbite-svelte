import Textarea from './Textarea.svelte';
import type { Snippet } from 'svelte';
import type { HTMLTextareaAttributes } from 'svelte/elements';
import { textarea } from './themeTextarea';

interface TextareaProps extends HTMLTextareaAttributes {
  header?: Snippet;
  footer?: Snippet;
  value?: string;
  wrapped?: boolean;
  divClass?: string;
  innerClass?: string;
  headerClass?: string;
  footerClass?: string;
}

export { Textarea, textarea, type TextareaProps };
