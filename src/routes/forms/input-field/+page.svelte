<script lang="ts">
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  import { Input, input, Radio, Label, Helper, Button, Checkbox, A, P, CloseButton, InputAddon, ButtonGroup, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';

  import { EyeOutline, EyeSlashOutline, EnvelopeSolid, ChevronDownOutline, SearchOutline } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';
  let show = $state(false);
  let show1 = $state(false);
  let value = $state(5);
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });

  const sizes = ['sm', 'md', 'lg'];
  let inputSize: Input['size'] = $state('md');
  const sizeDisplay: Record<Input['size'], string> = {
    sm: 'Small',
    md: 'Default',
    lg: 'Large'
  };
  const colors = Object.keys(input.variants.color);
  let inputColor: Input['color'] = $state('default');
</script>

<H1>Input field</H1>

<H2>Examples</H2>

<P>Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.</P>

<CodeWrapper>
  <form>
    <div class="mb-6 grid gap-6 md:grid-cols-2">
      <div>
        <Label for="first_name" class="mb-2">First name</Label>
        <Input type="text" id="first_name" placeholder="John" required />
      </div>
      <div>
        <Label for="last_name" class="mb-2">Last name</Label>
        <Input type="text" id="last_name" placeholder="Doe" required />
      </div>
      <div>
        <Label for="company" class="mb-2">Company</Label>
        <Input type="text" id="company" placeholder="Flowbite" required />
      </div>
      <div>
        <Label for="phone" class="mb-2">Phone number</Label>
        <Input type="tel" id="phone" placeholder="123-45-678" pattern={'[0-9]{3}-[0-9]{2}-[0-9]{3}'} required />
      </div>
      <div>
        <Label for="website" class="mb-2">Website URL</Label>
        <Input type="url" id="website" placeholder="flowbite.com" required />
      </div>
      <div>
        <Label for="visitors" class="mb-2">Unique visitors (per month)</Label>
        <Input type="number" id="visitors" placeholder="" required />
      </div>
    </div>
    <div class="mb-6">
      <Label for="email" class="mb-2">Email address</Label>
      <Input type="email" id="email" placeholder="john.doe@company.com" required />
    </div>
    <div class="mb-6">
      <Label for="password" class="mb-2">Password</Label>
      <Input type="password" id="password" placeholder="•••••••••" required />
    </div>
    <div class="mb-6">
      <Label for="confirm_password" class="mb-2">Confirm password</Label>
      <Input type="password" id="confirm_password" placeholder="•••••••••" required />
    </div>
    <Checkbox classLabel="mb-6 space-x-1 rtl:space-x-reverse" required>
      I agree with the <A href="/" class="text-primary-700 hover:underline dark:text-primary-600">terms and conditions</A>.
    </Checkbox>
    <Button type="submit">Submit</Button>
  </form>
</CodeWrapper>

<HighlightCompo code={modules['./md/example.md'] as string} />

<H2>Input sizes</H2>

<P>Use the following examples to apply a small, default or large size for the input fields. User the size prop to change the input size.</P>

<CodeWrapper class="space-y-6">
  <Label class="h-20 space-y-2">
    <span>{sizeDisplay[inputSize]} icon input</span>
    <Input type="email" placeholder="Default input" size={inputSize} />
  </Label>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as option}
      <Radio labelClass="w-24 my-1" name="input_size" bind:group={inputSize} value={option}>{option}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/sizes.md'] as string} />

<H2>Disabled state</H2>

<P>Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.</P>

<CodeWrapper>
  <Input class="mb-6" disabled value="Disabled input" />
  <Input class="mb-6" disabled readonly value="Disabled readonly input" />
</CodeWrapper>

<HighlightCompo code={modules['./md/disabled-state.md'] as string} />

<H2>Color</H2>

<CodeWrapper>
  <div class="mb-6">
    <Label for="color-example" color={inputColor} class="mb-2 block">Your name</Label>
    <Input id="color-example" color={inputColor} placeholder="Input" />
    <Helper class="mt-2" color={inputColor}>
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="input_color" bind:group={inputColor} color={colorOption as Input['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/color.md'] as string} />

<H2>Input with icon</H2>

<CodeWrapper class="space-y-6">
  <Label class="space-y-2">
    <span>Small input - left icon</span>
    <Input type="email" placeholder="name@flowbite.com" size="sm" class="pl-8">
      {#snippet left()}
        <EnvelopeSolid class="h-4 w-4" />
      {/snippet}
    </Input>
  </Label>

  <Label class="space-y-2">
    <span>Default input - right icon</span>
    <Input type="email" placeholder="name@flowbite.com" size="md">
      {#snippet right()}
        <EnvelopeSolid class="h-5 w-5" />
      {/snippet}
    </Input>
  </Label>

  <Label class="space-y-2">
    <span>Large input - both icons</span>
    <Input type="email" placeholder="name@flowbite.com" size="lg" class="pl-10">
      {#snippet left()}
        <EnvelopeSolid class="h-6 w-6" />
      {/snippet}
      {#snippet right()}
        <CloseButton />
      {/snippet}
    </Input>
  </Label>
</CodeWrapper>

<HighlightCompo code={modules['./md/input-with-icon.md'] as string} />

<H2>Input group</H2>

<P>This example can be used to add a descriptive icon or additional text inside the input field.</P>

<CodeWrapper class="space-y-6">
  <div>
    <Label class="mb-2" for="input-addon-sm">Small additional text</Label>
    <ButtonGroup class="w-full" size="sm">
      <InputAddon>@</InputAddon>
      <Input id="input-addon-sm" type="email" placeholder="elonmusk" />
    </ButtonGroup>
  </div>

  <div>
    <Label class="mb-2" for="input-addon-md">Default additional text</Label>
    <ButtonGroup class="w-full" size="md">
      <Input id="input-addon-md" type="email" placeholder="elonmusk" />
      <InputAddon>.com</InputAddon>
    </ButtonGroup>
  </div>

  <div>
    <Label class="mb-2" for="input-addon-lg">Large additional text</Label>
    <ButtonGroup class="w-full" size="lg">
      <InputAddon>@</InputAddon>
      <Input id="input-addon-lg" type="email" placeholder="elonmusk" />
      <InputAddon>.com</InputAddon>
    </ButtonGroup>
  </div>

  <div class="pt-8">
    <Label for="input-addon" class="mb-2">Grouped with button</Label>
    <ButtonGroup class="w-full">
      <InputAddon>@</InputAddon>
      <Input id="input-addon" type="email" placeholder="elonmusk" />
      <Button color="primary">Search</Button>
    </ButtonGroup>
  </div>

  <div>
    <Label for="input-addon" class="mb-2">Crazy example</Label>
    <ButtonGroup class="w-full">
      <InputAddon><Checkbox /></InputAddon>
      <Button color="primary">Search</Button>
      <InputAddon>http://</InputAddon>
      <Input id="input-addon" type="email" placeholder="elonmusk" />
      <InputAddon>@</InputAddon>
      <InputAddon><Checkbox /></InputAddon>
      <Button color="blue">Send</Button>
      <InputAddon>kg</InputAddon>
    </ButtonGroup>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/input-group.md'] as string} />

<H2>Icon click handler</H2>

<P>This example shows how to add `onclick` event handler to the icon in `Input`. By clicking an icon, it toggles icon and `type`:</P>

<CodeWrapper class="space-y-6">
  <div>
    <Label for="show-password" class="mb-2">Your password</Label>
    <Input id="show-password" type={show ? 'text' : 'password'} placeholder="Your password here" size="lg" class="pl-10">
      {#snippet left()}
        <button onclick={() => (show = !show)} class="pointer-events-auto">
          {#if show}
            <EyeOutline class="h-6 w-6" />
          {:else}
            <EyeSlashOutline class="h-6 w-6" />
          {/if}
        </button>
      {/snippet}
    </Input>
  </div>

  <div>
    <Label for="show-password1" class="mb-2">Your password</Label>
    <ButtonGroup class="w-full">
      <InputAddon>
        <button onclick={() => (show1 = !show1)}>
          {#if show1}
            <EyeOutline class="h-6 w-6" />
          {:else}
            <EyeSlashOutline class="h-6 w-6" />
          {/if}
        </button>
      </InputAddon>
      <Input id="show-password1" type={show1 ? 'text' : 'password'} placeholder="Your password here" />
    </ButtonGroup>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/icon-click-handler.md'] as string} />

<H2>Helper text</H2>

<P>Use the helper prop to add your helper text. You can use HTML in the helper text.</P>

<CodeWrapper class="space-y-6">
  <Label class="block space-y-2">
    <span>Your email</span>
    <Input id="email" type="email" required placeholder="name@flowbite.com" />
    <Helper class="text-sm">
      We’ll never share your details. Read our <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500"> Privacy Policy </a>
      .
    </Helper>
  </Label>
</CodeWrapper>

<HighlightCompo code={modules['./md/helper-text.md'] as string} />

<H2>Number input</H2>

<CodeWrapper>
  <Label class="mb-4 space-y-2">
    <span>Your lucky number</span>
    <Input type="number" bind:value />
  </Label>

  <p>Value: {value}</p>
  <p>Type of value: {typeof value}</p>
</CodeWrapper>

<HighlightCompo code={modules['./md/number-input.md'] as string} />

<H2>Search input</H2>

<CodeWrapper>
  <form>
    <Label for="search" class="mb-2 block">Your Email</Label>
    <Input id="search" placeholder="Search" size="lg" class="pl-10">
      {#snippet left()}
        <SearchOutline class="h-6 w-6 text-gray-500 dark:text-gray-400" />
      {/snippet}
      {#snippet right()}
        <Button size="sm" type="submit">Search</Button>
      {/snippet}
    </Input>
  </form>
</CodeWrapper>

<HighlightCompo code={modules['./md/search-input.md'] as string} />

<H2>Dropdown</H2>

<P>Use this example to show a dropdown menu right next to the input field.</P>

<CodeWrapper class="h-64">
  <ButtonGroup class="w-full">
    <Button onclick={dropdown.toggle} class="flex-shrink-0 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
      All categories<ChevronDownOutline class="ms-2 h-6 w-6" />
    </Button>
    <div class="relative">
      <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[160px] top-[40px]">
        <DropdownUl>
          <DropdownLi href="/">Shopping</DropdownLi>
          <DropdownLi href="/">Images</DropdownLi>
          <DropdownLi href="/">News</DropdownLi>
          <DropdownLi href="/">Finance</DropdownLi>
        </DropdownUl>
      </Dropdown>
    </div>
    <Input placeholder="Search" />
    <Button color="primary" class="!p-2.5" type="submit">
      <SearchOutline class="h-5 w-5" />
    </Button>
  </ButtonGroup>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown.md'] as string} />
