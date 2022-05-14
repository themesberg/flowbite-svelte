<script>
  import { Alert } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HiInformationCircleSolid, HiEyeSolid } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default alert</span>
    <Card>
      <Alert color="blue">
        <span>
          <span class="font-medium">Info alert!</span>
          Change a few things up and try submitting again.
        </span>
      </Alert>
      <HighlightSvelte
        code={`<Alert color="blue">
  <span>
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </span>
</Alert>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Alerts with icon</span>
    <Card>
      <Alert color="red" icon={HiInformationCircleSolid}>
        <span>
          <span class="font-medium"> Info alert! </span>
          Change a few things up and try submitting again.
        </span>
      </Alert>
      <HighlightSvelte
        code={`<Alert color="blue">
  <span>
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </span>
</Alert>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Dismissible alerts</span>
    <Card>
      <Alert
        color="green"
        onDismiss={function onDismiss() {
          return alert('Alert dismissed!');
        }}
      >
        <span>
          <span class="font-medium"> Info alert! </span>
          Change a few things up and try submitting again.
        </span>
      </Alert>
      <HighlightSvelte
        code={`<Alert
  color="green"
  onDismiss={function onDismiss() {
    return alert('Alert dismissed!');
  }}
>
  <span>
    <span class="font-medium"> Info alert! </span>
    Change a few things up and try submitting again.
  </span>
</Alert>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Rounded</span>
    <Card>
      <Alert color="yellow" rounded={false}>
        <span>
          <span class="font-medium"> Info alert! </span>
          Change a few things up and try submitting again.
        </span>
      </Alert>
      <HighlightSvelte
        code={`<Alert color="yellow" rounded={false}>
  <span>
    <span class="font-medium"> Info alert! </span>
    Change a few things up and try submitting again.
  </span>
</Alert>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Border accent</span>
    <Card>
      <Alert color="yellow" withBorderAccent={true}>
        <span>
          <span class="font-medium"> Info alert! </span>
          Change a few things up and try submitting again.
        </span>
      </Alert>
      <HighlightSvelte
        code={`<Alert color="yellow" withBorderAccent={true}>
  <span>
    <span class="font-medium"> Info alert! </span>
    Change a few things up and try submitting again.
  </span>
</Alert>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Additional content</span>
    <Card>
      <Alert color="blue" icon={HiInformationCircleSolid}>
        <h3 class="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</h3>
        <div slot="extra">
          <div class="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
            More info about this info alert goes here. This example text is going to run a bit longer so that you can
            see how spacing within an alert works with this kind of content.
          </div>
          <div class="flex">
            <button
              type="button"
              class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900"
            >
              <HiEyeSolid class="-ml-0.5 mr-2 h-4 w-4" />
              View more
            </button>
            <button
              type="button"
              class="rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white"
            >
              Dismiss
            </button>
          </div>
        </div>
      </Alert>
      <HighlightSvelte
        code={`<Alert color="blue" icon={HiInformationCircleSolid}>
  <h3 class="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</h3>
    <div slot="extra">
      ...
    </div>
  </div>
</Alert>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">All Options</span>
    <Card>
      <Alert color="green" rounded={false} withBorderAccent={true} icon={HiInformationCircleSolid}>
        <h3 class="text-lg font-medium text-green-700 dark:text-green-800">This is a info alert</h3>
        <div slot="extra">
          <div class="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
            More info about this info alert goes here. This example text is going to run a bit longer so that you can
            see how spacing within an alert works with this kind of content.
          </div>
          <div class="flex">
            <button
              type="button"
              class="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900"
            >
              <HiEyeSolid class="-ml-0.5 mr-2 h-4 w-4" />
              View more
            </button>
            <button
              type="button"
              class="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
            >
              Dismiss
            </button>
          </div>
        </div>
      </Alert>
      <HighlightSvelte
        code={`<Alert color="green" rounded={false} withBorderAccent={true} icon={HiInformationCircleSolid}>
  <h3 class="text-lg font-medium text-green-700 dark:text-green-800">This is a info alert</h3>
    <div slot="extra">
      ...
    </div>
  </div>
</Alert>`}
      />
    </Card>
  </div>
</div>
