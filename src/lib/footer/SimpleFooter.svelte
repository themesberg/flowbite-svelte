<script>
  export let link = undefined;
  export let siteName = "Svelte flow";
  export let links = [
    { name: "About", link: "about", rel: undefined },
    { name: "Privacy Policy", link: "policy", rel: undefined },
    { name: "Licensing", link: "licensing", rel: undefined },
    { name: "Contact", link: "contact", rel: undefined },
  ];
  export let footerClass =
    "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800";
  export let spanClass =
    "text-sm text-gray-500 sm:text-center dark:text-gray-400";
  export let ulClass = "flex flex-wrap items-center mt-3 sm:mt-0";
  export let aClass =
    "mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400";
  export let spanLinkClass = "hover:underline";
</script>

<footer class={footerClass}>
  <span class={spanClass}
    >© 2022 <a href={link} class={spanLinkClass} target="_blank">{siteName}</a>.
    All Rights Reserved.
  </span>
  <ul class={ulClass}>
    {#each links as { name, link, rel }}
      <li>
        <a href={link} {rel} class={aClass}>{name}</a>
      </li>
    {/each}
  </ul>
</footer>
