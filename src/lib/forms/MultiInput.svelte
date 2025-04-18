<script context="module" lang="ts">
  import type { SizeType, FormSizeType } from '$lib/types';
  export function clampSize(s: SizeType) {
    return s && s === 'xs' ? 'sm' : s === 'xl' ? 'lg' : s;
  }
</script>

<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import Wrapper from '$lib/utils/Wrapper.svelte';
  import { twMerge } from 'tailwind-merge';
  import { createEventDispatcher, getContext } from 'svelte';
  import Badge from '$lib/badge/Badge.svelte';
  import CloseButton from '$lib/utils/CloseButton.svelte';
  import type { InputType } from '../types';

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  interface $$Props extends Omit<HTMLInputAttributes, 'size'> {
    type?: InputType;
    value?: any;
    size?: FormSizeType;
    clearable?: boolean;
    inputDefaultClass?: string;
    containerDefaultClass?: string;
    color?: 'base' | 'green' | 'red';
    floatClass?: string;
    classLeft?: string;
    classRight?: string;
    wrapperClass?: string;
    placeholder?: string;
    disabled?: boolean;
    separators?: string[];
    validationCallback?: CallableFunction;
    validationErrorClass?: string;
  }

  export let type: $$Props['type'] = 'text';
  export let value: NonNullable<$$Props['value']> = [];
  export let size: $$Props['size'] = undefined;
  export let clearable: $$Props['clearable'] = false;
  export let inputDefaultClass: $$Props['inputDefaultClass'] = 'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right';
  export let containerDefaultClass: $$Props['containerDefaultClass'] = 'relative border border-gray-300 flex items-center rounded-lg gap-2 dark:border-gray-600 ring-primary-500 dark:ring-primary-500 focus-visible:outline-none';
  export let color: NonNullable<$$Props['color']> = 'base';
  export let floatClass: $$Props['floatClass'] = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400';
  export let classLeft: $$Props['classLeft'] = '';
  export let classRight: $$Props['classRight'] = '';
  export let wrapperClass: $$Props['wrapperClass'] = 'relative w-full';
  export let placeholder: $$Props['placeholder'] = '';
  export let disabled: $$Props['disabled'] = false;
  export let separators: $$Props['separators'] = ['Enter', ','];
  export let validationCallback: $$Props['validationCallback'] = undefined;
  export let validationErrorClass: $$Props['validationErrorClass'] = 'text-red-700 dark:text-red-500';

  let inputCurrent = '';
  let inputInvalid = false;
  let idCounter = 0;
  $: inputItems = value.map(item => {
    idCounter += 1;
    return { value: item, id: idCounter };
  });

  const dispatcher = createEventDispatcher();
  const sizes = {
    sm: 'px-2 py-1 min-h-[2.4rem]',
    md: 'px-3 py-1 min-h-[2.7rem]',
    lg: 'px-4 py-2 min-h-[3.2rem]'
  };

  const borderClasses = {
    base: 'border border-gray-300 dark:border-gray-600',
    tinted: 'border border-gray-300 dark:border-gray-500',
    green: 'border border-green-500 dark:border-green-400',
    red: 'border border-red-500 dark:border-red-400'
  };

  const ringClasses = {
    base: 'focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500',
    green: 'focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500',
    red: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500'
  };

  const ringWithinClasses = {
    base: 'focus-within:border-primary-500 focus-within:ring-primary-500 dark:focus-within:border-primary-500 dark:focus-within:ring-primary-500',
    green: 'focus-within:ring-green-500 focus-within:border-green-500 dark:focus-within:border-green-500 dark:focus-within:ring-green-500',
    red: 'focus-within:ring-red-500 focus-within:border-red-500 dark:focus-within:ring-red-500 dark:focus-within:border-red-500'
  };

  const colorClasses = {
    base: 'bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
    tinted: 'bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400',
    green: 'bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700',
    red: 'bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700'
  };

  // tinted if put in component having its own background
  let background = getContext('background');

  let group = getContext('group');

  const textSizes = { sm: 'sm:text-xs', md: 'text-sm', lg: 'sm:text-base' };

  $: _size = size || clampSize(group?.size) || 'md';
  let inputClass: string;
  let multiInputClass: string;
  $: {
    const _color = inputInvalid ? 'red' : (color === 'base' && background ? 'tinted' : color);
    const _colorRing = inputInvalid ? 'red' : color;
    inputClass = twMerge([inputDefaultClass, textSizes[_size], group || 'rounded-lg', group && 'first:rounded-s-lg last:rounded-e-lg', group && '[&:not(:first-child)]:-ms-px', $$props.class], colorClasses[_color]) + ' border-none rounded-none p-0';
    multiInputClass = twMerge(containerDefaultClass, sizes[_size], $$props.class, !disabled && 'focus-within:ring-1 ' + ringWithinClasses[_colorRing], disabled && 'opacity-50 cursor-not-allowed', ringClasses[_colorRing], borderClasses[_color], colorClasses[_color]);
  }

  const clearAll = (e: MouseEvent) => {
    e.stopPropagation();
    value = [];
    dispatcher('change');
  };

  const clearThisOption = (thisValue: string) => {
    if (disabled) return;
    if (value.includes(thisValue)) {
      value = value.filter((o: string) => o !== thisValue);
      dispatcher('change');
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
    inputCurrent = '';
  };

  function handleKeyDown(event: KeyboardEvent) {
    if (disabled || !separators) return;
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

<Wrapper class={wrapperClass} show={$$slots.left || $$slots.right}>
  {#if $$slots.left}
    <div class="{twMerge(floatClass, classLeft)} start-0 ps-2.5 pointer-events-none">
      <slot name="left" />
    </div>
  {/if}
  <slot props={{ ...$$restProps }}>
    <div tabindex="0" role="listbox" class={multiInputClass}>
      <span class="flex gap-2 flex-wrap w-full">
        {#if inputItems.length}
          {#each inputItems as item (item.id)}
            <Badge color="dark" large={size === 'lg'} dismissable params={{ duration: 100 }} on:close={() => clearThisOption(item.value)} class={disabled ? "pointer-events-none" : undefined} >
              {item.value}
            </Badge>
          {/each}
        {/if}
        <input {...$$restProps} placeholder={inputItems.length == 0 ? placeholder : undefined} bind:value={inputCurrent} on:blur={handleInputSeparation} on:change on:click on:contextmenu on:focus on:keydown={handleKeyDown} on:keypress on:keyup on:mouseover on:mouseenter on:mouseleave on:paste on:input {...{ type }} class="{inputClass} { inputInvalid ? validationErrorClass : ''}" />
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
@prop export let value: NonNullable<$$Props['value']> = [];
@prop export let size: $$Props['size'] = undefined;
@prop export let clearable: $$Props['clearable'] = false;
@prop export let inputDefaultClass: $$Props['inputDefaultClass'] = 'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right';
@prop export let containerDefaultClass: $$Props['containerDefaultClass'] = 'relative border border-gray-300 flex items-center rounded-lg gap-2 dark:border-gray-600 ring-primary-500 dark:ring-primary-500 focus-visible:outline-none';
@prop export let color: NonNullable<$$Props['color']> = 'base';
@prop export let floatClass: $$Props['floatClass'] = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400';
@prop export let classLeft: $$Props['classLeft'] = '';
@prop export let classRight: $$Props['classRight'] = '';
@prop export let wrapperClass: $$Props['wrapperClass'] = 'relative w-full';
@prop export let placeholder: $$Props['placeholder'] = '';
@prop export let disabled: $$Props['disabled'] = false;
@prop export let separators: $$Props['separators'] = ['Enter', ','];
@prop export let validationCallback: $$Props['validationCallback'] = undefined;
@prop export let validationErrorClass: $$Props['validationErrorClass'] = 'text-red-700 dark:text-red-500';
-->
