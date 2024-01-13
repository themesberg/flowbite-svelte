<Breadcrumb class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
    <BreadcrumbItem href="/" home>
      {#snippet icon()}
        <HomeOutline class="w-4 h-4 me-2" />
      {/snippet}Home
    </BreadcrumbItem>
    <BreadcrumbItem href="/">
      {#snippet icon()}
        <ChevronDoubleRightOutline class="w-3 h-3 mx-2 dark:text-white" />
      {/snippet}
      Projects
    </BreadcrumbItem>
    <BreadcrumbItem>
      {#snippet icon()}
        <ChevronDoubleRightOutline class="w-3 h-3 mx-2 dark:text-white" />
      {/snippet}
      Flowbite Svelte
    </BreadcrumbItem>
</Breadcrumb>