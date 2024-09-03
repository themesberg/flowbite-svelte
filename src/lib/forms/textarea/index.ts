import Textarea from './Textarea.svelte';
import type { Snippet } from 'svelte';
import type { HTMLTextareaAttributes } from 'svelte/elements';
import { textareaVariants } from './theme';

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

export { Textarea, textareaVariants, type TextareaProps };
