import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { type VariantProps } from 'tailwind-variants';
import Avatar from './Avatar.svelte';
import { avatar } from './theme';

type AvatarVariants = VariantProps<typeof avatar>;

interface AvatarProps extends HTMLAttributes<HTMLDivElement>, AvatarVariants {
  children?: Snippet;
  href?: string;
  src?: string;
  cornerStyle?: 'rounded' | 'circular';
  stacked?: boolean;
  dot?: object | undefined;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onclick?: () => void;
}

export { Avatar, avatar, type AvatarProps };
