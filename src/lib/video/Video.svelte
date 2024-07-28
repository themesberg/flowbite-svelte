<script lang="ts">
  import { type VideoProps as Props} from './index';

  let {
    children,
    type = 'video/mp4',
    trackSrc,
    src,
    srclang = 'en',
    label = 'english_captions',
    class: classname,
    ...attributes
  }: Props = $props();
</script>

<video {...attributes} class={classname}>
  <source {src} {type} />
  {#if children}
    {@render children()}
  {/if}
  <track src={trackSrc} kind="captions" {srclang} {label} />
  Your browser does not support the video tag.
</video>

