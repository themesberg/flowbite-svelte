<script lang="ts">
  import Video from "$lib/video/Video.svelte";
</script>

<Video 
  src="https://example.com/video.mp4" 
  trackSrc="https://example.com/captions.vtt"
  data-testid="children-video"
>
  <source src="https://example.com/video-alt.webm" type="video/webm" data-testid="alt-source" />
</Video>
