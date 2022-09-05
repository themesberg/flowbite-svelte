<script lang="ts">
  import classNames from 'classnames';
  export let width = 'w-full';
  export let controls: boolean = true;
  export let autoplay: boolean = false;
  export let src: string;
  export let type: string = 'video/mp4';
  export let attribute = '';

  let videoClass = classNames(width, $$props.class);
  const setAttribute = (node, params) => {
    node.setAttribute(params, '');
  };
</script>

<video class={videoClass} {controls} {autoplay} use:setAttribute={attribute}>
  <source {src} {type} />
  <slot />
  Your browser does not support the video tag.
</video>
