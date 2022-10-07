<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface TabCtxType {
    style: string;
    // activeClasses: string;
    // inactiveClasses: string;
    selected: Writable<HTMLElement>;
  }
</script>

<script lang="ts">
  import classNames from 'classnames';
  import { setContext } from 'svelte';

  export let divClass: string = 'w-full';
  export let tabStyle: 'default' | 'full' | 'icon' | 'pill' | 'underline' | 'custom' = 'default';

  const ctx: TabCtxType = {
    style: tabStyle,
    selected: writable<HTMLElement>()
  };

  setContext('ctx', ctx);

  function init(cmp: HTMLElement) {
    const cancel = ctx.selected.subscribe((x: HTMLElement) => {
      if (x) {
        // console.log(x);
        cmp.replaceChildren(x);
        // x.classList?.remove('hidden');
      }
    });
    return {
      destroy() {
        // cmp.replaceChildren();
        cancel();
        // ctx.selected.set(null);
      }
    };
  }
</script>

<div class={classNames(divClass, $$props.class)}>
  <slot {tabStyle} />
</div>
<div class="border border-red-400" use:init />
