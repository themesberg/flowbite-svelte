<script lang="ts">
  import {
    Button,
    Card,
    Input,
    Label,
    Textarea,
    Checkbox,
    Radio,
    Alert,
    Badge,
    Progressbar,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Accordion,
    AccordionItem,
    Toast,
    Toggle,
    Select,
    Breadcrumb,
    BreadcrumbItem,
    Spinner,
    Avatar,
    Rating,
    Timeline,
    TimelineItem
  } from "$lib";
  import { CheckCircleSolid, CloseCircleSolid, ExclamationCircleOutline, InfoCircleSolid } from "flowbite-svelte-icons";
  import ThemeSelector from "../../utils/ThemeSelector.svelte";

  let textValue = "Sample text input";
  let textareaValue = "Sample textarea content";
  let checkboxValue = true;
  let radioValue = "option1";
  let toggleValue = false;
  let selectValue = "us";

  const countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "uk", name: "United Kingdom" }
  ];
</script>

<div class="min-h-screen bg-gray-50 p-4 md:p-8 dark:bg-gray-900">
  <!-- Header Section -->
  <div class="mb-6 flex items-center justify-between">
    <div>
      <h1 class="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Theme Test Page</h1>
      <p class="text-gray-600 dark:text-gray-400">Test all components with different themes</p>
    </div>
    <ThemeSelector />
  </div>

  <!-- Typography & Buttons Row -->
  <div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
    <Card class="p-4">
      <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Typography</h2>
      <div class="space-y-2">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Heading 1</h1>
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Heading 2</h2>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Heading 3</h3>
        <p class="text-gray-700 dark:text-gray-300">Regular paragraph text.</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">Small caption text.</p>
        <a href="/theme-test" class="text-primary-600 hover:text-primary-700 dark:text-primary-500">Link example</a>
      </div>
    </Card>

    <Card class="p-4">
      <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Buttons</h2>
      <div class="space-y-3">
        <div class="flex flex-wrap gap-2">
          <Button>Brand</Button>
          <Button color="alternative">Alternative</Button>
          <Button color="gray">Gray</Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button color="warning">Warning</Button>
          <Button color="transparent">Transparent</Button>
          <Button color="dark">Dark</Button>
          <Button color="light">Light</Button>
          <Button color="blue">Blue</Button>
          <Button color="green">Green</Button>
          <Button color="red">Red</Button>
          <Button color="yellow">Yellow</Button>
          <Button color="purple">Purple</Button>
        </div>

        <div class="flex flex-wrap gap-2">
          <Button outline>Brand</Button>
          <Button color="alternative" outline>Alternative</Button>
          <Button color="gray" outline>Gray</Button>
          <Button color="success" outline>Success</Button>
          <Button color="danger" outline>Danger</Button>
          <Button color="warning" outline>Warning</Button>
          <Button color="transparent" outline>Transparent</Button>
          <Button color="dark" outline>Dark</Button>
          <Button color="light" outline>Light</Button>
          <Button color="blue" outline>Blue</Button>
          <Button color="green" outline>Green</Button>
          <Button color="red" outline>Red</Button>
          <Button color="yellow" outline>Yellow</Button>
          <Button color="purple" outline>Purple</Button>
        </div>
      </div>
    </Card>
  </div>

  <!-- Alerts & Badges Row -->
  <div class="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
    <Card class="p-4">
      <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Alerts</h2>
      <div class="space-y-3">
        <Alert color="blue" class="py-2">
          <InfoCircleSolid class="h-4 w-4" />
          <span class="text-sm font-medium">Info:</span>
          Informational message.
        </Alert>

        <Alert color="green" class="py-2">
          <CheckCircleSolid class="h-4 w-4" />
          <span class="text-sm font-medium">Success:</span>
          Action completed.
        </Alert>

        <Alert color="yellow" class="py-2">
          <ExclamationCircleOutline class="h-4 w-4" />
          <span class="text-sm font-medium">Warning:</span>
          Please check.
        </Alert>

        <Alert color="red" class="py-2">
          <CloseCircleSolid class="h-4 w-4" />
          <span class="text-sm font-medium">Error:</span>
          Something wrong.
        </Alert>
      </div>
    </Card>

    <Card class="p-4">
      <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Badges & Spinners</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">Badges:</p>
          <div class="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge color="blue">Blue</Badge>
            <Badge color="gray">Dark</Badge>
            <Badge color="red">Red</Badge>
            <Badge color="green">Green</Badge>
            <Badge color="yellow">Yellow</Badge>
            <Badge color="purple">Purple</Badge>
            <Badge color="pink">Pink</Badge>
          </div>
        </div>

        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">Spinners:</p>
          <div class="flex flex-wrap items-center gap-3">
            <Spinner size="4" />
            <Spinner color="blue" size="5" />
            <Spinner color="green" size="6" />
            <Spinner color="red" size="6" />
            <Spinner color="pink" size="8" />
          </div>
        </div>
      </div>
    </Card>
  </div>

  <!-- Form Elements & Progress Row -->
  <div class="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
    <Card class="p-4">
      <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Form Elements</h2>
      <div class="space-y-3">
        <div>
          <Label for="input1" class="mb-1 text-sm">Text Input</Label>
          <Input id="input1" bind:value={textValue} placeholder="Enter text..." size="sm" />
        </div>

        <div>
          <Label for="select1" class="mb-1 text-sm">Select</Label>
          <Select id="select1" bind:value={selectValue} size="sm">
            {#each countries as country}
              <option value={country.value}>{country.name}</option>
            {/each}
          </Select>
        </div>

        <div>
          <Label for="textarea1" class="mb-1 text-sm">Textarea</Label>
          <Textarea id="textarea1" bind:value={textareaValue} rows={3} placeholder="Message..." class="w-full text-sm" />
        </div>

        <div class="space-y-2">
          <Checkbox bind:checked={checkboxValue} class="text-sm">Accept terms</Checkbox>
          <Toggle bind:checked={toggleValue} size="small">Notifications</Toggle>
        </div>

        <div class="space-y-1">
          <Label class="text-sm">Radio Options:</Label>
          <Radio name="options" value="option1" bind:group={radioValue} class="text-sm">Option 1</Radio>
          <Radio name="options" value="option2" bind:group={radioValue} class="text-sm">Option 2</Radio>
        </div>
      </div>
    </Card>

    <Card class="p-4">
      <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Progress & Rating</h2>
      <div class="space-y-4">
        <div class="space-y-3">
          <div>
            <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">Progress Bars:</p>
            <div class="space-y-2">
              <Progressbar progress="45" size="h-2" />
              <Progressbar progress="60" color="blue" size="h-2" />
              <Progressbar progress="75" color="green" size="h-2" />
              <Progressbar progress="85" color="red" size="h-2" />
            </div>
          </div>
        </div>

        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">Avatars:</p>
          <div class="flex gap-2">
            <Avatar src="/images/blog/image-1.jpg" size="sm" />
            <Avatar src="/images/blog/image-3.jpg" border size="sm" />
            <Avatar src="/images/blog/image-4.jpg" stacked size="sm" />
          </div>
        </div>

        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">Rating:</p>
          <Rating rating={4.5} />
        </div>

        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">Breadcrumb:</p>
          <Breadcrumb class="text-sm">
            <BreadcrumbItem href="/theme-test" home>Home</BreadcrumbItem>
            <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
            <BreadcrumbItem>Test</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </Card>
  </div>

  <!-- Table Row -->
  <div class="mb-4">
    <Card class="p-4">
      <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Table</h2>
      <Table>
        <TableHead>
          <TableHeadCell>Product</TableHeadCell>
          <TableHeadCell>Category</TableHeadCell>
          <TableHeadCell>Price</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
        </TableHead>
        <TableBody>
          <TableBodyRow>
            <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
            <TableBodyCell>Laptop</TableBodyCell>
            <TableBodyCell>$2999</TableBodyCell>
            <TableBodyCell><Badge color="green">In Stock</Badge></TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
            <TableBodyCell>Tablet</TableBodyCell>
            <TableBodyCell>$1999</TableBodyCell>
            <TableBodyCell><Badge color="yellow">Low Stock</Badge></TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>Magic Mouse 2</TableBodyCell>
            <TableBodyCell>Accessories</TableBodyCell>
            <TableBodyCell>$99</TableBodyCell>
            <TableBodyCell><Badge color="red">Out of Stock</Badge></TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
    </Card>
  </div>

  <!-- Accordion & Timeline Row -->
  <div class="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
    <Card class="p-4">
      <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Accordion</h2>
      <Accordion>
        <AccordionItem>
          {#snippet header()}<span class="text-sm">What is Flowbite?</span>{/snippet}
          <p class="text-sm text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on Tailwind CSS.</p>
        </AccordionItem>
        <AccordionItem>
          {#snippet header()}<span class="text-sm">Is it free to use?</span>
          {/snippet}
          <p class="text-sm text-gray-500 dark:text-gray-400">Yes, Flowbite is open-source and free under MIT license.</p>
        </AccordionItem>
        <AccordionItem>
          {#snippet header()}<span class="text-sm">Commercial projects?</span>
          {/snippet}
          <p class="text-sm text-gray-500 dark:text-gray-400">You can use Flowbite in any personal or commercial project.</p>
        </AccordionItem>
      </Accordion>
    </Card>

    <Card class="p-4">
      <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Timeline</h2>
      <Timeline>
        <TimelineItem title="Application UI" date="Feb 2022">
          <p class="text-sm text-gray-500 dark:text-gray-400">Dashboard layout, charts, kanban board, and calendar components.</p>
        </TimelineItem>
        <TimelineItem title="Marketing UI" date="Mar 2022">
          <p class="text-sm text-gray-500 dark:text-gray-400">Designed in Figma with parity between versions.</p>
        </TimelineItem>
        <TimelineItem title="E-Commerce UI" date="Apr 2022">
          <p class="text-sm text-gray-500 dark:text-gray-400">Components built on Tailwind CSS.</p>
        </TimelineItem>
      </Timeline>
    </Card>
  </div>

  <!-- Toast & Cards Row -->
  <div class="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
    <Card class="p-4">
      <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Toast Notifications</h2>
      <div class="space-y-3">
        <Toast>
          <CheckCircleSolid class="h-5 w-5 text-green-500" />
          <span class="text-sm font-medium">Success!</span>
          Changes saved.
        </Toast>

        <Toast color="red">
          <CloseCircleSolid class="h-5 w-5" />
          <span class="text-sm font-medium">Error!</span>
          Something wrong.
        </Toast>
      </div>
    </Card>

    <Card class="p-4">
      <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Card Examples</h2>
      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
          <h3 class="mb-1 text-sm font-bold text-gray-900 dark:text-white">Simple</h3>
          <p class="text-xs text-gray-600 dark:text-gray-400">Basic card content</p>
        </div>

        <div class="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
          <Badge color="green" class="mb-2">New</Badge>
          <h3 class="text-sm font-bold text-gray-900 dark:text-white">Featured</h3>
        </div>

        <div class="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
          <h3 class="mb-2 text-sm font-bold text-gray-900 dark:text-white">Action</h3>
          <Button size="xs">Click</Button>
        </div>

        <div class="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
          <h3 class="text-sm font-bold text-gray-900 dark:text-white">Info</h3>
          <p class="text-xs text-gray-600 dark:text-gray-400">More details</p>
        </div>
      </div>
    </Card>
  </div>

  <!-- Color Palette Preview -->
  <Card class="p-4">
    <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Theme Color Palette</h2>
    <div class="grid grid-cols-3 gap-3 md:grid-cols-6">
      <div class="space-y-1">
        <div class="bg-primary-50 dark:bg-primary-950 h-16 rounded border border-gray-200 dark:border-gray-700"></div>
        <p class="text-center text-xs text-gray-600 dark:text-gray-400">50/950</p>
      </div>
      <div class="space-y-1">
        <div class="bg-primary-100 dark:bg-primary-900 h-16 rounded border border-gray-200 dark:border-gray-700"></div>
        <p class="text-center text-xs text-gray-600 dark:text-gray-400">100/900</p>
      </div>
      <div class="space-y-1">
        <div class="bg-primary-200 dark:bg-primary-800 h-16 rounded border border-gray-200 dark:border-gray-700"></div>
        <p class="text-center text-xs text-gray-600 dark:text-gray-400">200/800</p>
      </div>
      <div class="space-y-1">
        <div class="bg-primary-300 dark:bg-primary-700 h-16 rounded border border-gray-200 dark:border-gray-700"></div>
        <p class="text-center text-xs text-gray-600 dark:text-gray-400">300/700</p>
      </div>
      <div class="space-y-1">
        <div class="bg-primary-400 dark:bg-primary-600 h-16 rounded border border-gray-200 dark:border-gray-700"></div>
        <p class="text-center text-xs text-gray-600 dark:text-gray-400">400/600</p>
      </div>
      <div class="space-y-1">
        <div class="bg-primary-500 h-16 rounded border border-gray-200 dark:border-gray-700"></div>
        <p class="text-center text-xs text-gray-600 dark:text-gray-400">500</p>
      </div>
    </div>
  </Card>
</div>
