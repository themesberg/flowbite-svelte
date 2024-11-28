<script lang="ts">
  import { setContext, type Snippet } from 'svelte';
  import { tv } from 'tailwind-variants';
  import deepmerge from 'deepmerge';
  import { accordion, alert, avatar, badge, breadcrumb } from '$lib';

  interface Props {
    children: Snippet;
    theme?: Record<string, any>;
  }

  let { children, theme }: Props = $props();

  // Function to merge theme configurations
  function mergeThemes(baseThemes: Record<string, any>, customTheme?: Record<string, any>) {
    const mergedTheme: Record<string, any> = {};

    // Merge each component's theme
    for (const [componentName, baseTheme] of Object.entries(baseThemes)) {
      const customComponentTheme = customTheme?.[componentName] || {};
      
      // Deep merge base theme with custom theme
      mergedTheme[componentName] = tv(deepmerge(
        {
          slots: baseTheme.slots,
          variants: baseTheme.variants,
          compoundVariants: baseTheme.compoundVariants,
          defaultVariants: baseTheme.defaultVariants
        },
        {
          slots: customComponentTheme.slots || {},
          variants: customComponentTheme.variants || {},
          compoundVariants: customComponentTheme.compoundVariants || [],
          defaultVariants: customComponentTheme.defaultVariants || {}
        }
      ));
    }

    return mergedTheme;
  }

  const baseThemes = {
    accordion,
    alert,
    avatar,
    badge,
    breadcrumb
    // Add more base themes here
  };

  const mergedThemes = mergeThemes(baseThemes, theme);

  setContext('themeConfig', mergedThemes);
</script>

{@render children()}