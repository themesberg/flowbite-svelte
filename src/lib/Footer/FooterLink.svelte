<script lang="ts">
  import classNames from 'classnames';

  export let href: string = '';
</script>

<li class={classNames('mr-4 last:mr-0 md:mr-6', $$props.class)}>
  <a {href} class="hover:underline">
    <slot />
  </a>
</li>
