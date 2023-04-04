<script lang="ts">
  export let src: string;
  export let alt: string | undefined = undefined;

  export let defaultClass: string = 'h-auto max-w-full rounded-lg';
</script>

<div>
  <img class={defaultClass} {src} {alt} />
</div>
