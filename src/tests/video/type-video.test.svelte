<script lang="ts">
  import Video from "$lib/video/Video.svelte";
</script>

<Video src="https://example.com/video.mp4" type="video/mp4" trackSrc="https://example.com/captions.vtt" data-testid="mp4-video" />

<Video src="https://example.com/video.webm" type="video/webm" trackSrc="https://example.com/captions.vtt" data-testid="webm-video" />

<Video src="https://example.com/video.ogg" type="video/ogg" trackSrc="https://example.com/captions.vtt" data-testid="ogg-video" />
