<script>
  import { Radio, Label, Helper, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow, Dropdown, DropdownItem, Button, RadioButton, ButtonGroup } from "$lib";
  import { ChevronDownOutline, ArrowRightOutline, ListMusicSolid, OrderedListOutline, ListOutline } from "flowbite-svelte-icons";

  // For radio examples
  let selectedValue = $state("2");
  let selectedValue3 = $state("2");
  let technology = $state("svelte");
  let group3 = $state(2);
  let inline1 = $state("second");
  let inline2 = $state("third");
  let colors = $state("text-purple-500");
  let radioGroup = $state("notes");
</script>

<h1 class="my-4 text-3xl">Radio</h1>

<h2 class="my-4 text-2xl">Radio examples</h2>
<div class="my-4 flex flex-col gap-4 rounded border p-4">
  <Radio name="example1" value="1" bind:group={selectedValue}>Default radio</Radio>
  <Radio name="example1" value="2" bind:group={selectedValue}>Checked state</Radio>
</div>

<h2 class="my-4 text-2xl">Disabled state</h2>
<div class="my-4 flex flex-col gap-4 rounded border p-4">
  <Radio name="disabled-state" disabled value="1" bind:group={selectedValue}>Disabled radio</Radio>
  <Radio name="disabled-state" disabled value="2" bind:group={selectedValue}>Disabled checked</Radio>
</div>

<h2 class="my-4 text-2xl">Alternative syntax</h2>
<div class="my-4 flex flex-col gap-4 rounded border p-4">
  <Table>
    <TableHead>
      <TableHeadCell>Left column</TableHeadCell>
      <TableHeadCell>Right column</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y dark:divide-gray-700">
      <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
        <TableBodyCell><Label for="radio1">Default radio</Label></TableBodyCell>
        <TableBodyCell><Label for="radio2">Disabled radio</Label></TableBodyCell>
      </TableBodyRow>
      <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
        <TableBodyCell><Radio name="separate" id="radio1" /></TableBodyCell>
        <TableBodyCell><Radio name="separate" id="radio2" disabled /></TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Label color="red" class="mt-4 flex items-center font-bold italic">
    Label on the other side <Radio name="separate" class="ms-2" />
  </Label>
</div>

<h2 class="my-4 text-2xl">Radio with a link</h2>
<div class="my-4 rounded border p-4">
  <Radio name="with-link">
    I agree with the <a href="/" class="text-primary-600 dark:text-primary-500 ms-1 hover:underline">terms and conditions</a>
    .
  </Radio>
</div>

<h2 class="my-4 text-2xl">Helper text</h2>
<div class="my-4 rounded border p-4">
  <Radio aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Radio>
  <Helper id="helper-checkbox-text" class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
</div>

<h2 class="my-4 text-2xl">Bordered</h2>
<div class="my-4 rounded border p-4">
  <div class="grid grid-cols-2 gap-6">
    <div class="rounded-sm border border-gray-200 dark:border-gray-700">
      <Radio name="bordered" value="1" bind:group={selectedValue3} class="w-full p-4">Default radio</Radio>
    </div>
    <div class="rounded-sm border border-gray-200 dark:border-gray-700">
      <Radio name="bordered" value="2" bind:group={selectedValue3} class="w-full p-4">Checked state</Radio>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Radio list group</h2>
<div class="my-4 rounded border p-4">
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">
    Technology <span class="capitalize">{technology}</span>
  </p>
  <ul class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
    <li><Radio class="p-3" bind:group={technology} value="svelte">Svelte</Radio></li>
    <li><Radio class="p-3" bind:group={technology} value="vue js">Vue JS</Radio></li>
    <li><Radio class="p-3" bind:group={technology} value="react">React</Radio></li>
    <li><Radio class="p-3" bind:group={technology} value="angular">Angular</Radio></li>
  </ul>
</div>

<h2 class="my-4 text-2xl">Horizontal list group</h2>
<div class="my-4 rounded border p-4">
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
  <ul class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
    <li class="w-full"><Radio name="hor-list" class="p-3">Svelte</Radio></li>
    <li class="w-full"><Radio name="hor-list" class="p-3">Vue JS</Radio></li>
    <li class="w-full"><Radio name="hor-list" class="p-3">React</Radio></li>
    <li class="w-full"><Radio name="hor-list" class="p-3">Angular</Radio></li>
  </ul>
</div>

<h2 class="my-4 text-2xl">Radio in dropdown</h2>
<div class="my-4 flex h-80 items-start justify-center rounded border p-4">
  <Button>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown simple class="w-60">
    <DropdownItem>
      <Radio name="group3" bind:group={group3} value={1}>Enable notifications</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </DropdownItem>
    <DropdownItem>
      <Radio name="group3" bind:group={group3} value={2}>Enable 2FA auth</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </DropdownItem>
    <DropdownItem>
      <Radio name="group3" bind:group={group3} value={3}>Subscribe newsletter</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </DropdownItem>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Inline layout</h2>
<div class="my-4 rounded border p-4">
  <div class="flex gap-3">
    <Radio bind:group={inline1} value="first">Inline 1</Radio>
    <Radio bind:group={inline1} value="second">Inline 2 checked</Radio>
    <Radio bind:group={inline1} value="third">Inline 3</Radio>
    <Radio bind:group={inline1} value="fourth" disabled>Inline disabled</Radio>
  </div>

  <div class="mt-4">
    <Radio bind:group={inline2} inline value="first" class="me-2">Inline 1</Radio>
    <Radio bind:group={inline2} inline value="second" class="me-2">Inline 2</Radio>
    <Radio bind:group={inline2} inline value="third" class="me-2">Inline checked</Radio>
    <Radio bind:group={inline2} inline value="fourth" class="me-2" disabled>Inline disabled</Radio>
  </div>
</div>

<h2 class="my-4 text-2xl">Colors</h2>
<div class="my-4 rounded border p-4">
  <p class="mb-4 font-semibold {colors}">Select color</p>
  <div class="flex gap-4">
    <Radio bind:group={colors} color="red" value="text-red-500">Red</Radio>
    <Radio bind:group={colors} color="green" value="text-green-500">Green</Radio>
    <Radio bind:group={colors} color="purple" value="text-purple-500">Purple</Radio>
    <Radio bind:group={colors} color="teal" value="text-teal-500">Teal</Radio>
    <Radio bind:group={colors} color="yellow" value="text-yellow-500">Yellow</Radio>
    <Radio bind:group={colors} color="orange" value="text-orange-500">Orange</Radio>
  </div>
</div>

<h2 class="my-4 text-2xl">Advanced layout</h2>
<div class="my-4 rounded border p-4">
  <p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
  <div class="grid w-full gap-6 md:grid-cols-2">
    <Radio name="custom" custom>
      <div class="dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        <div>
          <div class="w-full text-lg font-semibold">0-50 MB</div>
          <div class="w-full">Good for small websites</div>
        </div>
        <ArrowRightOutline class="ms-3 h-10 w-10" />
      </div>
    </Radio>
    <Radio name="custom" custom>
      <div class="dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        <div class="block">
          <div class="w-full text-lg font-semibold">500-1000 MB</div>
          <div class="w-full">Good for large websites</div>
        </div>
        <ArrowRightOutline class="ms-3 h-10 w-10" />
      </div>
    </Radio>
  </div>
</div>

<h2 class="my-4 text-2xl">RadioButton</h2>
<div class="my-4 space-y-4 rounded border p-4">
  <div>
    <RadioButton value="notes" bind:group={radioGroup}><ListMusicSolid class="h-7 w-7" /></RadioButton>
    <RadioButton value="numbers" bind:group={radioGroup}><OrderedListOutline class="h-7 w-7" /></RadioButton>
    <RadioButton value="bullets" bind:group={radioGroup}><ListOutline class="h-7 w-7" /></RadioButton>
  </div>

  <ButtonGroup>
    <RadioButton value="notes" bind:group={radioGroup}><ListMusicSolid class="h-7 w-7" /></RadioButton>
    <RadioButton value="numbers" bind:group={radioGroup}><OrderedListOutline class="h-7 w-7" /></RadioButton>
    <RadioButton value="bullets" bind:group={radioGroup}><ListOutline class="h-7 w-7" /></RadioButton>
  </ButtonGroup>

  <p>List style: {radioGroup}</p>
</div>
