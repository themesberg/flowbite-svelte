import DescriptionList from './DescriptionList.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { descriptionList } from './theme';

interface DescriptionListProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  tag: 'dt' | 'dd';
}

export { DescriptionList, descriptionList, type DescriptionListProps };
