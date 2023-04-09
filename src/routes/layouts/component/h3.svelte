<script>
  let /** @type {string} */ content, /** @type {string} */ slug;

  /** @param {HTMLElement} node */
  function init(node) {
    content = node.firstChild?.nodeValue ?? '';
    slug = content.replace(/\s/g, '_');
  }
</script>

<h3 class="relative group htwo" use:init>
  <slot />
  <span id={slug} class="absolute -top-[140px]" />
  <a
    class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
    href="#{slug}"
    aria-label="Link to this section: {content}">#</a>
</h3>
