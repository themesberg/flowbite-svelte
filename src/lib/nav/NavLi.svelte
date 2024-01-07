<script>
    let { closeNav, href, children } = $props();
</script>

<li>
    <a
        {href}
        onclick={closeNav}
       >
       {@render children()}
       </a
    >
</li>