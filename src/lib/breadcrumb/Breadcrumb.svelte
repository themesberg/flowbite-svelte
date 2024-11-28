<script lang="ts">
  import { getContext } from 'svelte';
  import { tv } from 'tailwind-variants';
  import deepmerge from 'deepmerge';
  import { type BreadcrumbProps as Props, breadcrumb } from "./index";

  type BreadcrumbConfig = {
    slots: Record<string, string | undefined>;
    variants: Record<string, any>;
    compoundVariants: Array<Record<string, any>>;
    defaultVariants: Record<string, any>;
  };
  
  let { children, solid = false, navClass = '', olClass, ariaLabel = "Breadcrumb", ...restProps }: Props = $props();

  const context = getContext<Record<string, any>>('themeConfig');

  // Extract metadata from both tv objects
  const baseConfig: BreadcrumbConfig = {
    slots: breadcrumb.slots,
    variants: breadcrumb.variants,
    compoundVariants: breadcrumb.compoundVariants,
    defaultVariants: breadcrumb.defaultVariants,
  };

   // Extract context configuration (safely handling undefined cases)
   const contextConfig: BreadcrumbConfig = context?.breadcrumb
    ? {
        slots: context.breadcrumb.slots || {},
        variants: context.breadcrumb.variants || {},
        compoundVariants: context.breadcrumb.compoundVariants || [],
        defaultVariants: context.breadcrumb.defaultVariants || {},
      }
    : {
        slots: {},
        variants: {},
        compoundVariants: [],
        defaultVariants: {},
      };

  console.log('baseConfig: ', baseConfig);
  console.log('contextConfig: ', contextConfig);
  // Deep merge configurations
  const mergedConfig: BreadcrumbConfig = deepmerge(baseConfig, contextConfig);

  // Create a new breadcrumb instance
  const mergedBreadcrumb = tv(mergedConfig);

  // Coerce `solid` to a compatible type for variants
  const solidVariant = solid ? 'true' : 'false'; // Convert boolean to string
  const { list } = mergedBreadcrumb({ solid: solidVariant }); // Pass coerced value
  let classNav = $state('');
  let classList = $state('');
  $effect(() =>{
    classNav = navClass; // Assign navClass directly
    classList = list({ class: olClass }); // Generate class for the list slotslot
  })

</script>

<nav aria-label={ariaLabel} {...restProps} class={classNav}>
  <ol class={classList}>
    {@render children()}
  </ol>
</nav>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:solid: any = false;
@props:navClass: any;
@props:olClass: any;
@props:ariaLabel: any = "Breadcrumb";
-->
