<script>
  export let label;
  let modifiedLabel = label.replace(/\s/g, '_');
  let hidden = true;
  const handleMouseover = () => {
    hidden = false;
  };
  const handleMouseout = () => {
    hidden = true;
  };
  let PaperClip = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" /></svg>`;
</script>

<h2
  class="htwo group text-2xl w-full font-semibold dark:text-white mb-4 pt-24 -mt-16"
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
