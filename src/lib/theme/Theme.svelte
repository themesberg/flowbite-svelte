<script lang="ts">
  import deepmerge from "deepmerge";
  import { setContext, type Snippet } from "svelte";
  import { tv } from "tailwind-variants";
  import { baseThemes, type BaseThemes } from "./index";

  interface Props {
    children: Snippet;
    theme?: BaseThemes;
  }

  let { children, theme }: Props = $props();

  type K = keyof BaseThemes;

  // Function to merge theme configurations
  function mergeThemes(baseThemes: BaseThemes, customTheme?: BaseThemes) {
    const mergedTheme: BaseThemes = deepmerge(baseThemes, {});
    // Merge each component's theme
    for (const [name, baseTheme] of Object.entries(baseThemes)) {
      const componentName: K = name as K;
      if (customTheme && componentName in customTheme) {
        const customComponentTheme = customTheme[componentName as keyof typeof customTheme];

        // Deep merge base theme with custom theme
        // const result = deepmerge(baseTheme, customComponentTheme);
        const result = deepmerge(
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
        );
        // @ts-ignore
        mergedTheme[componentName] = tv(result);
      }
    }

    return mergedTheme as BaseThemes;
  }

  const mergedThemes = mergeThemes(baseThemes, theme);

  setContext<BaseThemes>("themeConfig", mergedThemes);
</script>

{@render children()}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:theme: any;
-->
