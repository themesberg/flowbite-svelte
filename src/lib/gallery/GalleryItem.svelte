<script lang="ts">
  export let src: string ='';
  export let alt: string = '';
  export let imgClass: string = 'h-auto max-w-full rounded-lg'; 
</script>

<div>
  <img class="{imgClass}" {src} {alt}>
</div>