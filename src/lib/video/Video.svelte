<script lang="ts">
    interface Props{
        children?: any;
        src: string | undefined;
        type?: string | undefined;
        trackSrc?: string | undefined;
        srclang?: string | undefined;
        label?: string | undefined;
        class?: string | undefined;
    }

    let { children, src, type = 'video/mp4', trackSrc, srclang = 'en', label= 'english_captions', class:classname, ...attributes } = $props<Props>();
  </script>
  
  <video {...attributes} class={classname}>
    <source {src} {type} />
    {#if children}
    {@render children()}
    {/if}
    <track src={trackSrc} kind="captions" {srclang} {label} />
    Your browser does not support the video tag.
  </video>