<script lang="ts">
  import { Input } from '$lib';
  import { type SearchProps as Props, search } from '.';

  let {
    children,
    right,
    size = 'lg',
    placeholder = 'Search',
    value,
    show = true,
    use = () => {},
    class: className,
    ...restProps
  }: Props = $props();
  
  const { base, content, icon} = $derived(search());
  const sizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
</script>

{#if show}
  <div class={base()} use:use>
    <Input
      bind:value
      type="search"
      {placeholder}
      {size}
      {...restProps}
      class={className}
    >
      {#snippet left()}
        <svg
          class={icon()}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      {/snippet}
      {#if right}
        {@render right()}
      {/if}
    </Input>
    {#if children}
      <div
        class={content()}
      >
        {@render children()}
      </div>
    {/if}
  </div>
{:else if children}
  {@render children()}
{/if}
