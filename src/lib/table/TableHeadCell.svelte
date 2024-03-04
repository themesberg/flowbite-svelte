<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  interface Props{
    children?: any;
    class?: string;
    padding?: string;
  }
  let { children, class: className, padding = 'px-6 py-3', ...attributes } = $props<Props>();
</script>

<th {...attributes} class={twMerge(padding, className)} >
  {@render children()}
</th>
