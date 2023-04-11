<script lang="ts">
  export let label: string;
  let modifiedLabel = label.replace(/\s/g, '_');
  let hidden = true;
  const handleMouseover = () => {
    hidden = false;
  };
  const handleMouseout = () => {
    hidden = true;
  };
</script>

<h2
  class="htwo"
  on:mouseover={handleMouseover}
  on:focus
  on:mouseout={handleMouseout}
  on:blur
  id={modifiedLabel}>
  {label}
  <span class:hidden>
    <a
      href="#{modifiedLabel}"
      class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
      aria-label={label}>
      #
    </a>
  </span>
</h2>
