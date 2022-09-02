<script lang="ts">
  import classNames from 'classnames';
  export let italic: boolean = false;
  export let underline: boolean = false;
  export let linethrough: boolean = false;
  export let uppercase: boolean = false;
  export let gradient: boolean = false;
  export let underDecoration: string = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
  export let gradientClass: string =
    'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';
  let underlineClass = classNames('underline', underDecoration);
  export let classSpan: string = classNames(
    italic && 'italic',
    underline && underlineClass,
    linethrough && 'line-through',
    uppercase && 'uppercase',
    gradient ? gradientClass : 'font-semibold text-gray-900 dark:text-white',
    $$props.class
  );
</script>

<span class={classSpan}>
  <slot />
</span>
