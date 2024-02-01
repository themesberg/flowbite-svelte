<p class="mb-4 font-semibold text-gray-900 dark:text-white">
    Technology <span class="capitalize">{technology}</span>
</p>
<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
    <li><Radio labelclass="p-3" bind:group={technology} value="svelte">Svelte</Radio></li>
    <li><Radio labelclass="p-3" bind:group={technology} value="vue js">Vue JS</Radio></li>
    <li><Radio labelclass="p-3" bind:group={technology} value="react">React</Radio></li>
    <li><Radio labelclass="p-3" bind:group={technology} value="angular">Angular</Radio></li>
</ul>