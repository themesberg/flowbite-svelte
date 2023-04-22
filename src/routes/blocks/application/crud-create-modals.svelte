<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  import { Label, Input, Button, Modal, Textarea, Select } from 'flowbite-svelte';
  const breadcrumb_title = 'Create Modals (CRUD)';
  const title = 'Crud Create Modals';
  const dir = 'application';
  const description =
    'Get started with a collection of modal components with form input elements to create new data models inside your dashboard based on Tailwind CSS.';
  let defaultModal = false;
  const handleSubmit = () => {
    alert('Form submited.');
  };
  let selected;
  let countries = [
    { value: 'tv', name: 'TV/Monitors' },
    { value: 'pc', name: 'PC' },
    { value: 'phone', name: 'Phones' }
  ];
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="application"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default modal">
  Use this free example to show a modal component with a form inside when creating a new instance of
  a product inside your application.</SectionBlock
>

<ExampleDiv>
  <Section classSection="h-96">
    <div class="flex justify-center m-5">
      <Button on:click={() => (defaultModal = true)}>Create product</Button>
    </div>
    <Modal title="Add Product" bind:open={defaultModal} autoclose class="min-w-full">
      <form on:submit={handleSubmit}>
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <Label for="name" class="mb-2">Name</Label>
            <Input type="text" id="name" placeholder="Type product name" required />
          </div>
          <div>
            <Label for="brand" class="mb-2">Brand</Label>
            <Input type="text" id="brand" placeholder="Product brand" required />
          </div>
          <div>
            <Label for="price" class="mb-2">Price</Label>
            <Input type="text" id="price" placeholder="$29999" required />
          </div>
          <div>
            <Label
              >Category
              <Select class="mt-2" items={countries} bind:value={selected} required />
            </Label>
          </div>
          <div class="sm:col-span-2">
            <Label for="description" class="mb-2">Description</Label>
            <Textarea
              id="description"
              placeholder="Your description here"
              rows="4"
              name="description"
              required
            />
          </div>
          <Button type="submit" class="w-52">
            <svg
              class="mr-1 -ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              /></svg
            >
            Add new product
          </Button>
        </div>
      </form>
    </Modal>
  </Section>
</ExampleDiv>
