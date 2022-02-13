<script>
  import { Accordion } from "$lib/index";
  import { AccordionItem } from "$lib/index";
</script>

<div
  class="rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <Accordion>
    <AccordionItem id="1">
      <h2 slot="header">My Header 1</h2>
      <div slot="body">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
          necessitatibus sint explicabo, atque temporibus rem iusto, dicta
          voluptatem molestias ex quibusdam ipsa omnis laboriosam deleniti ipsum
          nisi quis perspiciatis.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to <a
            href="/"
            target="_blank"
            class="text-blue-600 dark:text-blue-500 hover:underline"
            >get started</a
          > and start developing websites even faster with components on top of Tailwind
          CSS.
        </p>
      </div>
    </AccordionItem>
    <AccordionItem id="last">
      <h2 slot="header">My Header 2</h2>
      <div slot="body">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
          necessitatibus sint explicabo, atque temporibus rem iusto, dicta
          voluptatem molestias ex quibusdam ipsa omnis laboriosam deleniti ipsum
          nisi quis perspiciatis.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
          necessitatibus sint explicabo, atque temporibus rem iusto, dicta
          voluptatem molestias ex quibusdam ipsa omnis laboriosam deleniti ipsum
          nisi quis perspiciatis.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul class="list-disc pl-5 dark:text-gray-400 text-gray-500">
          <li>
            <a
              href="/"
              target="_blank"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >Lorem ipsum</a
            >
          </li>
          <li>
            <a
              href="https://tailwindui.com/"
              rel="nofollow"
              target="_blank"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >Tailwind UI</a
            >
          </li>
        </ul>
      </div>
    </AccordionItem>
  </Accordion>
</div>

<div
  class="code-preview rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <Accordion>
    <AccordionItem id="1">
      <h2 slot="header">Header 2-1</h2>
      <p slot="body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo, atque temporibus rem iusto, dicta
        voluptatem molestias ex quibusdam ipsa omnis laboriosam deleniti ipsum
        nisi quis perspiciatis.
      </p>
    </AccordionItem>
    <AccordionItem id="last">
      <h2 slot="header">Header 2-2</h2>
      <p slot="body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo, atque temporibus rem iusto, dicta
        voluptatem molestias ex quibusdam ipsa omnis laboriosam deleniti ipsum
        nisi quis perspiciatis.
      </p>
    </AccordionItem>
  </Accordion>
</div>
