<script>
  import { Accordion, AccordionItem } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default accordion</span>
    <Card>
      <Accordion>
        <AccordionItem open={true}>
          <div slot="title">What is Flowbite?</div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              get started
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionItem>
        <AccordionItem>
          <div slot="title">Is there a Figma file available?</div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" class="text-blue-600 hover:underline dark:text-blue-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </AccordionItem>
        <AccordionItem>
          <div slot="title">What are the differences between Flowbite and Tailwind UI?</div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul class="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" class="text-blue-600 hover:underline dark:text-blue-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 hover:underline dark:text-blue-500">
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
      <HighlightSvelte
        code={`<Accordion>
  <AccordionItem open={true}>
    <div slot="title">What is Flowbite?</div>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
      dropdowns, modals, navbars, and more.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to
      <a
        href="https://flowbite.com/docs/getting-started/introduction/"
        class="text-blue-600 hover:underline dark:text-blue-500"
      >
        get started
      </a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    <div slot="title">Is there a Figma file available?</div>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
      has a design equivalent in our Figma file.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out the
      <a href="https://flowbite.com/figma/" class="text-blue-600 hover:underline dark:text-blue-500">
        Figma design system
      </a>
      based on the utility classes from Tailwind CSS and components from Flowbite.
    </p>
  </AccordionItem>
  <AccordionItem>
    <div slot="title">What are the differences between Flowbite and Tailwind UI?</div>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      The main difference is that the core components from Flowbite are open source under the MIT license, whereas
      Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
      components, whereas Tailwind UI offers sections of pages.
    </p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
      technical reason stopping you from using the best of two worlds.
    </p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc pl-5 text-gray-500 dark:text-gray-400">
      <li>
        <a href="https://flowbite.com/pro/" class="text-blue-600 hover:underline dark:text-blue-500">
          Flowbite Pro
        </a>
      </li>
      <li>
        <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 hover:underline dark:text-blue-500">
          Tailwind UI
        </a>
      </li>
    </ul>
  </AccordionItem>
</Accordion>`}
      />
    </Card>
  </div>

  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Flush accordion</span>
    <Card>
      <Accordion flush>
        <AccordionItem open={true}>
          <div slot="title">What is Flowbite?</div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              get started
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionItem>
        <AccordionItem>
          <div slot="title">Is there a Figma file available?</div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" class="text-blue-600 hover:underline dark:text-blue-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </AccordionItem>
        <AccordionItem>
          <div slot="title">What are the differences between Flowbite and Tailwind UI?</div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul class="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" class="text-blue-600 hover:underline dark:text-blue-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 hover:underline dark:text-blue-500">
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
      <HighlightSvelte
        code={`<Accordion flush>
  <AccordionItem open={true}>
    <div slot="title">What is Flowbite?</div>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
      dropdowns, modals, navbars, and more.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to
      <a
        href="https://flowbite.com/docs/getting-started/introduction/"
        class="text-blue-600 hover:underline dark:text-blue-500"
      >
        get started
      </a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    <div slot="title">Is there a Figma file available?</div>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
      has a design equivalent in our Figma file.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out the
      <a href="https://flowbite.com/figma/" class="text-blue-600 hover:underline dark:text-blue-500">
        Figma design system
      </a>
      based on the utility classes from Tailwind CSS and components from Flowbite.
    </p>
  </AccordionItem>
  <AccordionItem>
    <div slot="title">What are the differences between Flowbite and Tailwind UI?</div>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      The main difference is that the core components from Flowbite are open source under the MIT license, whereas
      Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
      components, whereas Tailwind UI offers sections of pages.
    </p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
      technical reason stopping you from using the best of two worlds.
    </p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc pl-5 text-gray-500 dark:text-gray-400">
      <li>
        <a href="https://flowbite.com/pro/" class="text-blue-600 hover:underline dark:text-blue-500">
          Flowbite Pro
        </a>
      </li>
      <li>
        <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 hover:underline dark:text-blue-500">
          Tailwind UI
        </a>
      </li>
    </ul>
  </AccordionItem>
</Accordion>`}
      />
    </Card>
  </div>
</div>
