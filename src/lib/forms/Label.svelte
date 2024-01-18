<script lang="ts">
    interface Props{
        children: any;
        color?: 'gray' | 'green' | 'red' | 'disabled';
        defaultClass?: string | undefined;
        show?: boolean;
        class?: string | undefined;
    }
    import { twMerge } from 'tailwind-merge';
  
    let { children, color = 'gray', defaultClass, show = true, class:classname, ...attributes } = $props<Props>();

    // export let color: 'gray' | 'green' | 'red' | 'disabled' = 'gray';
    let defaultCls: string = 'text-sm rtl:text-right font-medium block';
    // export let show: boolean = true;
  
    let node: HTMLLabelElement;
  
    const colorClasses = {
      gray: 'text-gray-900 dark:text-gray-300',
      green: 'text-green-700 dark:text-green-500',
      red: 'text-red-700 dark:text-red-500',
      disabled: 'text-gray-400 dark:text-gray-500'
    };
  
    // function checkDisabled(node: HTMLLabelElement) {
    
    const control: HTMLInputElement = node?.control as HTMLInputElement;
    color = control?.disabled ? 'disabled' : color;
    let labelClass = twMerge(defaultClass, colorClasses[color], classname);
    
  
    
  </script>
  
  {#if show}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label bind:this={node} {...attributes} class={labelClass}><slot /></label>
  {:else}
    <slot />
  {/if}
  