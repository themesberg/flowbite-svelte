<script lang="ts">
  import classNames from 'classnames';
  export let open: boolean = false;
</script>

<div class={classNames('w-full md:block md:w-auto', { hidden: !open })} data-testid="navbar-collapse">
  <ul class="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
    <slot />
  </ul>
</div>
