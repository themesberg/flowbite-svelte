<script lang="ts">
  import classNames from 'classnames';
  // export let width;
  // export let controls: boolean = true;
  // export let autoplay: boolean = false;
  export let src: string;
  export let type: string = 'video/mp4';
  export let trackSrc: string = '';
  export let srclang: string = 'en';
  export let label: string = 'english_captions';
  // export let attribute = '';

  let videoClass = classNames($$props.class);
  // const setAttribute = (node, params) => {
  //   node.setAttribute(params, '');
  // };
</script>

<video {...$$restProps} class={videoClass}>
  <source {src} {type} />
  <slot />
  <track src={trackSrc} kind="captions" {srclang} {label} />
  Your browser does not support the video tag.
</video>
