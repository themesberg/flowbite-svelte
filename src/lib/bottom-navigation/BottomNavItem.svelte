<script lang="ts">
  import { getContext } from 'svelte';
  import type { ButtonClassesTypes } from '../types';
  import type { BottomNavType } from './BottomNav.svelte';
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';

  interface Props {
    children?: any;
    btnName?: string;
    appBtnPosition?: 'left' | 'middle' | 'right';
    activeClass?: string;
    href?: string;
    exact?: boolean;
    btnclass?: string;
    spanclass?: string;
  }

  let {
    children,
    btnName,
    appBtnPosition = 'middle',
    activeClass,
    href = '',
    exact = true,
    btnclass,
    spanclass,
    ...attributes
  } = $props<Props>();

  const navType:
    | 'default'
    | 'border'
    | 'application'
    | 'pagination'
    | 'group'
    | 'card'
    | 'meeting'
    | 'video' = getContext('navType');

  const context = getContext<BottomNavType>('bottomNavType') ?? {};

  // let navUrl = '';

  let currentUrl = $state($page.url.pathname);
  let active: boolean = $state(false);

  // let active = navUrl && exact ? href === navUrl : navUrl ? navUrl.startsWith(href) : false;

  const btnClasses: ButtonClassesTypes = {
    default:
      'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    border:
      'inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600',
    application: '',
    pagination:
      'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    group:
      'inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    card: 'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    meeting: '',
    video: ''
  };

  const spanClasses: ButtonClassesTypes = {
    default:
      'text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
    border:
      'text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
    application: 'sr-only',
    pagination: 'sr-only',
    group: 'sr-only',
    card: 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
    meeting: '',
    video: ''
  };

  const appBtnClasses = {
    left: 'inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group',
    middle:
      'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    right:
      'inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group'
  };
  let btnCls: string = $state('');
  let spanCls: string = $state('');
  $effect(() => {
    currentUrl = $page.url.pathname;
    active = href === currentUrl;

    btnCls = twMerge(
      btnClasses[navType],
      appBtnClasses[appBtnPosition],
      active && (activeClass ?? context.activeClass),
      btnclass
    );

    spanCls = twMerge(
      spanClasses[navType],
      active && (activeClass ?? context.activeClass),
      spanclass
    );
  });
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  aria-label={btnName}
  {href}
  role={href ? 'link' : 'button'}
  {...attributes}
  class={btnCls}
>
  {@render children()}
  <span class={spanCls}>{btnName}</span>
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:btnName?: string;
@props:appBtnPosition?:  'left' | 'middle' | 'right'; = 'middle';
@props:activeClass?: string;
@props:href?:  string; = '';
@props:exact?:  boolean; = true;
@props:btnclass?: string;
@props:spanclass?: string;
-->
