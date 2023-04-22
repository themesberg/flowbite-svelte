<script lang="ts">
  import classNames from 'classnames';
  export let authorDiv: string = 'flex justify-between items-center';
  export let authorImgDiv: string = 'flex items-center space-x-4';
</script>

<div class={classNames(authorDiv, $$props.classAuthorDiv)}>
  <div class={classNames(authorImgDiv, $$props.classAuthorImgDiv)}>
    <slot name="author" />
  </div>
  <slot />
</div>
