<script context="module">export function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
</script>

<script>import Wrapper from "$lib/utils/Wrapper.svelte";
import { twMerge } from "tailwind-merge";
import { createEventDispatcher, getContext } from "svelte";
import Badge from "$lib/badge/Badge.svelte";
import CloseButton from '$lib/utils/CloseButton.svelte';
export let type = "text";
export let value = [];
export let size = void 0;
export let clearable = false;
export let defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right";
export let color = "base";
export let floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400";
export let classLeft = "";
export let classRight = "";
export let placeholder = "";
export let disabled = false;
export let separators = ["Enter", ","];
export let validationCallback = undefined;
export let validationErrorClass = "text-red-700 dark:text-red-500";
let inputCurrent = "";
let inputInvalid = false;
let idCounter = 0;
$: inputItems = value.map(item => {
  idCounter += 1;
  return { value: item, id: idCounter };
});
const dispatcher = createEventDispatcher();
const multiInputClass = "relative border border-gray-300 flex items-center rounded-lg gap-2 dark:border-gray-600 ring-primary-500 dark:ring-primary-500 focus-visible:outline-none bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white";
const sizes = {
  sm: "px-2 py-1 min-h-[2.4rem]",
  md: "px-3 py-1 min-h-[2.7rem]",
  lg: "px-4 py-2 min-h-[3.2rem]"
};
let background = getContext("background");
let group = getContext("group");
const textSizes = { sm: "sm:text-xs", md: "text-sm", lg: "sm:text-base" };
$: _size = size || clampSize(group?.size) || "md";
let inputClass;
$: {
  const _color = color === "base" && background ? "tinted" : color;
  inputClass = twMerge([defaultClass, textSizes[_size], group || "rounded-lg", group && "first:rounded-s-lg last:rounded-e-lg", group && "[&:not(:first-child)]:-ms-px", $$props.class]) + " border-none rounded-none p-0";
}
const clearAll = (e) => {
  e.stopPropagation();
  value = [];
  dispatcher("change");
};
const clearThisOption = (thisValue) => {
  if (disabled) return;
  if (value.includes(thisValue)) {
    value = value.filter((o) => o !== thisValue);
    dispatcher("change");
  }
};
function handleInputSeparation() {
  inputCurrent = inputCurrent.trim();
  if (inputCurrent && !value.includes(inputCurrent)) {
    if (validationCallback && !validationCallback(inputCurrent)) {
      inputInvalid = true;
      return;
    }
    value = [...value, inputCurrent];
  }
  inputCurrent = "";
};
function handleKeyDown(event) {
  if (disabled) return;
  inputInvalid = false;
  for (let s of separators) {
    if (event.key == s) {
      handleInputSeparation();
      event.stopPropagation();
      event.preventDefault();
      return;
    }
  }
};
</script>

<Wrapper class="relative w-full" show={$$slots.left || $$slots.right}>
  {#if $$slots.left}
    <div class="{twMerge(floatClass, classLeft)} start-0 ps-2.5 pointer-events-none">
      <slot name="left" />
    </div>
  {/if}
  <slot props={{ ...$$restProps, class: inputClass }}>
    <div tabindex="0" role="listbox" class={twMerge(multiInputClass, sizes[size], $$props.class, !disabled && "focus-within:ring-1 focus-within:border-primary-500 dark:focus-within:border-primary-500", disabled && "opacity-50 cursor-not-allowed")}>
      {#if !inputItems.length}
        <span class="text-gray-400">{placeholder}</span>
      {/if}
      <span class="flex gap-2 flex-wrap">
        {#if inputItems.length}
          {#each inputItems as item (item.id)}
            <Badge color="dark" large={size === 'lg'} dismissable params={{ duration: 100 }} on:close={() => clearThisOption(item.value)} class={disabled ? "pointer-events-none" : undefined} >
              {item.value}
            </Badge>
          {/each}
        {/if}
        <input {...$$restProps} bind:value={inputCurrent} on:blur on:change on:click on:contextmenu on:focus on:keydown={handleKeyDown} on:keypress on:keyup on:mouseover on:mouseenter on:mouseleave on:paste on:input {...{ type }} class="{inputClass} { inputInvalid ? validationErrorClass : ''}" />
      </span>
      <div class="flex ms-auto gap-2 items-center">
        {#if inputItems.length}
          <CloseButton {size} on:click={clearAll} color="none" class={twMerge("p-0 focus:ring-gray-400 dark:text-white", disabled && "cursor-not-allowed")} disabled={disabled} />
        {/if}
      </div>
    </div>
  </slot>
  {#if $$slots.right}
  <div class="{twMerge(floatClass, classRight)} end-0 pe-2.5">
    <slot name="right"></slot>
  </div>
  {/if}
  {#if clearable && value && `${value}`.length > 0}
    <CloseButton {size} on:click={clearAll} color="none" class=" {twMerge(floatClass, classRight)} focus:ring-0 end-6 focus:ring-gray-400 dark:text-white" />
  {/if}
</Wrapper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let type: $$Props['type'] = 'text';
@prop export let value: $$Props['value'] = undefined;
@prop export let size: $$Props['size'] = undefined;
@prop export let clearable: $$Props['clearable'] = false;
@prop export let defaultClass: $$Props['defaultClass'] = 'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right';
@prop export let color: NonNullable<$$Props['color']> = 'base';
@prop export let floatClass: $$Props['floatClass'] = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400';
@prop export let classLeft: $$Props['classLeft'] = '';
@prop export let classRight: $$Props['classRight'] = '';
@prop export let placeholder: $$Props['placeholder'] = '';
@prop export let disabled: $$Props['disabled'] = false;
@prop export let separators: $$Props['separators'] = ['Enter', ','];
@prop export let validationCallback: $$Props['validationCallback'] = undefined;
@prop export let validationErrorClass: $$Props['validationErrorClass'] = 'text-red-700 dark:text-red-500';
-->
