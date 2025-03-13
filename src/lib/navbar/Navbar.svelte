<script lang="ts">
  import { setContext } from "svelte";
  import clsx from "clsx";
  import { writable } from "svelte/store";
  import NavContainer from "./NavContainer.svelte";
  import { navbar } from "./theme";
  import type { NavbarProps as Props } from "./type";
  import NavHamburger from "./NavHamburger.svelte";

  // propagate props type from underlying Frame

  let { children, fluid, navContainerClass, class: className, ...restProps }: Props = $props();

  let hidden = writable(true);
  setContext("navHidden", hidden);

  // $: {
  //   // override default Frame value
  //   $$restProps.color = $$restProps.color ?? "navbar";
  // }

  let toggle = () => {
    hidden.update((hidden) => !hidden);
  };
</script>

<nav>
  <div {...restProps} class={navbar({ class: clsx(className) })}>
    <NavContainer {fluid} class={navContainerClass}>
      {@render children({ hidden: $hidden, toggle, NavContainer })}
    </NavContainer>
  </div>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:fluid: any;
@props:navContainerClass: any;
@props:class: string;
-->
