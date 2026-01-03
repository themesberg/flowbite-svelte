<script lang="ts">
  import Video from "$lib/video/Video.svelte";
</script>
video 1
<Video src="/videos/flowbite.mp4" autoplay muted controls trackSrc="flowbite.mp4" />
video 2
<Video 
  src="/videos/flowbite.mp4"
  trackSrc="flowbite.mp4" 
  autoplay
  muted
  data-testid="autoplay-video"
/>
