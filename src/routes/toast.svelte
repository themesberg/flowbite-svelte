<script>
  import { Toast, ToastToggle, Button } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HiCheckSolid, HiExclamationSolid, HiFireSolid, HiXSolid } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
  import { FaPaperPlane, FaBroadcastTower } from 'svelte-icons/fa';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default Toast</span>
    <Card>
      <Toast>
        <div
          class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200"
        >
          <HiFireSolid class="h-5 w-5" />
        </div>
        <div class="ml-3 text-sm font-normal">Set yourself free.</div>
        <ToastToggle />
      </Toast>
      <HighlightSvelte
        code={`<Toast>
  <div
    class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200"
  >
    <HiFireSolid class="h-5 w-5" />
  </div>
  <div class="ml-3 text-sm font-normal">Set yourself free.</div>
  <ToastToggle />
</Toast>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Colors</span>
    <Card>
      <div class="flex flex-col gap-4">
        <Toast>
          <div
            class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200"
          >
            <HiCheckSolid class="h-5 w-5" />
          </div>
          <div class="ml-3 text-sm font-normal">Item moved successfully.</div>
          <ToastToggle />
        </Toast>
        <Toast>
          <div
            class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200"
          >
            <HiXSolid class="h-5 w-5" />
          </div>
          <div class="ml-3 text-sm font-normal">Item has been deleted.</div>
          <ToastToggle />
        </Toast>
        <Toast>
          <div
            class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200"
          >
            <HiExclamationSolid class="h-5 w-5" />
          </div>
          <div class="ml-3 text-sm font-normal">Improve password difficulty.</div>
          <ToastToggle />
        </Toast>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-col gap-4">
  <Toast>
    <div
      class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200"
    >
      <HiCheckSolid class="h-5 w-5" />
    </div>
    <div class="ml-3 text-sm font-normal">Item moved successfully.</div>
    <ToastToggle />
  </Toast>
  <Toast>
    <div
      class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200"
    >
      <HiXSolid class="h-5 w-5" />
    </div>
    <div class="ml-3 text-sm font-normal">Item has been deleted.</div>
    <ToastToggle />
  </Toast>
  <Toast>
    <div
      class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200"
    >
      <HiExclamationSolid class="h-5 w-5" />
    </div>
    <div class="ml-3 text-sm font-normal">Improve password difficulty.</div>
    <ToastToggle />
  </Toast>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Simple toast </span>
    <Card>
      <Toast class="space-x-4 divide-x divide-gray-200 dark:divide-gray-700">
        <FaPaperPlane class="h-5 w-5 text-blue-600 dark:text-blue-500" />
        <div class="pl-4 text-sm font-normal">Message sent successfully.</div>
      </Toast>
      <HighlightSvelte
        code={`<Toast class="space-x-4 divide-x divide-gray-200 dark:divide-gray-700">
  <FaPaperPlane class="h-5 w-5 text-blue-600 dark:text-blue-500" />
  <div class="pl-4 text-sm font-normal">Message sent successfully.</div>
</Toast>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Undo button </span>
    <Card>
      <Toast>
        <div class="text-sm font-normal">Conversation archived.</div>
        <div class="ml-auto flex items-center space-x-2">
          <a
            class="rounded-lg p-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-700"
            href="/toast"
          >
            Undo
          </a>
          <ToastToggle />
        </div>
      </Toast>
      <HighlightSvelte
        code={`<Toast>
  <div class="text-sm font-normal">Conversation archived.</div>
  <div class="ml-auto flex items-center space-x-2">
    <a
      class="rounded-lg p-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-700"
      href="/toast"
    >
      Undo
    </a>
    <ToastToggle />
  </div>
</Toast>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Interactive toast </span>
    <Card>
      <Toast class="!items-start">
        <div
          class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300"
        >
          <FaBroadcastTower class="h-5 w-5" />
        </div>
        <div class="ml-3 text-sm font-normal">
          <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white"> Update available </span>
          <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
          <div class="flex gap-2">
            <Button class="!w-full" size="xs">Update</Button>
            <Button class="!w-full" color="light" size="xs">Not now</Button>
          </div>
        </div>
        <ToastToggle />
      </Toast>
      <HighlightSvelte
        code={`<Toast class="!items-start">
  <div
    class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300"
  >
    <FaBroadcastTower class="h-5 w-5" />
  </div>
  <div class="ml-3 text-sm font-normal">
    <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white"> Update available </span>
    <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
    <div class="flex gap-2">
      <Button class="!w-full" size="xs">Update</Button>
      <Button class="!w-full" color="light" size="xs">Not now</Button>
    </div>
  </div>
  <ToastToggle />
</Toast>`}
      />
    </Card>
  </div>
</div>
