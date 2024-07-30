<script lang="ts">
  import { textPlaceholderVariants, type TextPlaceholderProps as Props } from './index';

  let { size = 'sm', class: className, ...attributes }: Props = $props();
  const { baseWrapper, divWrapper, lineA, lineB } = textPlaceholderVariants({ size });
</script>

<div role="status" class={baseWrapper({ className })} {...attributes}>
  <div class={divWrapper({ class: "w-full" })}>
    <div class={lineA({ class: "h-2.5 w-32"})}></div>
    <div class={lineB({ class: "h-2.5 w-24"})}></div>
    <div class={lineB({ class: "h-2.5 w-full"})}></div>
  </div>
  <div class={divWrapper({ class: "w-11/12" })}>
    <div class={lineA({ class: "h-2.5 w-full"})}></div>
    <div class={lineB({ class: "h-2.5 w-full"})}></div>
    <div class={lineB({ class: "h-2.5 w-24"})}></div>
  </div>
  <div class={divWrapper({ class: "w-9/12" })}>
    <div class={lineB({ class: "h-2.5 w-full"})}></div>
    <div class={lineA({ class: "h-2.5 w-80"})}></div>
    <div class={lineB({ class: "h-2.5 w-full"})}></div>
  </div>
  <div class={divWrapper({ class: "w-11/12" })}>
    <div class={lineA({ class: "h-2.5 w-full"})}></div>
    <div class={lineB({ class: "h-2.5 w-full"})}></div>
    <div class={lineB({ class: "h-2.5 w-24"})}></div>
  </div>
  <div class={divWrapper({ class: "w-10/12" })}>
    <div class={lineB({ class: "h-2.5 w-32"})}></div>
    <div class={lineB({ class: "h-2.5 w-24"})}></div>
    <div class={lineA({ class: "h-2.5 w-full"})}></div>
  </div>
  <div class={divWrapper({ class: "w-8/12" })}>
    <div class={lineB({ class: "h-2.5 w-full"})}></div>
    <div class={lineA({ class: "h-2.5 w-80"})}></div>
    <div class={lineB({ class: "h-2.5 w-full"})}></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>
