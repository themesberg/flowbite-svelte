<script lang="ts">
  import Video from "$lib/video/Video.svelte";
</script>

<Video 
  src="https://example.com/video.mp4" 
  trackSrc="https://example.com/captions_en.vtt"
  srclang="en"
  label="english_captions"
  data-testid="track-video"
/>

<Video 
  src="https://example.com/video.mp4" 
  trackSrc="https://example.com/captions_es.vtt"
  srclang="es"
  label="spanish_captions"
  data-testid="spanish-track-video"
/>
