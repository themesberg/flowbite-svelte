<script>
    let
    /** @type {string} */ content,
    /** @type {string} */ slug;
    
    /** @param {HTMLElement} node */
    function init(node) {
        content = node.childNodes[0]?.nodeValue ?? '';
        slug = content.replace(/\s/g, '_');
    }
</script>

<h2 class="relative group htwo" use:init>
    <slot/>
    <span id={slug} class="absolute -top-[140px]"></span> 
    <a class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href="#{slug}" aria-label="Link to this section: {content}">#</a>
</h2>