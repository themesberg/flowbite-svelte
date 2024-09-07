<script lang="ts">
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'forms/input';
  import { isOverflow } from '../../utils/helpers';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  import { Input, input, Radio, Label, Helper, Button, Checkbox, A, P, CloseButton, InputAddon, ButtonGroup, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';

  import { EyeOutline, EyeSlashOutline, EnvelopeSolid, ChevronDownOutline, SearchOutline } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';

  let { text = $bindable('') } = $props();
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
  let disabled = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  }
  let helperColor: Input['color'] = $state('default');
  let helperSlot = $state(false);
  const changeHelperSlot = () => {
    helperSlot = !helperSlot;
    helperColor = 'default';
  };
  let closeBtnStatus = $state(false);
  const changeCloseBtnStatus = () => {
    closeBtnStatus = !closeBtnStatus;
  }

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if ( inputColor !== 'default') props.push(` color="${inputColor}"`);
      if (disabled) props.push(' disabled');
      if (inputSize !== 'md') props.push(` size="${inputSize}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Input${propsString}${closeBtnStatus ? `>\n{#snippet right()}
  <CloseButton onclick={() => (text = '')} />
{/snippet}` : '/>'}
${closeBtnStatus ? `</Input>`: ''}${helperSlot ? `<Helper class="ps-6" color="${helperColor}">Helper text</Helper>` : ''}`;
    })()
  );

  const examples = ['form', 'icon', 'group', 'click-handler', 'number', 'search', 'dropdown']
  let selectedExample = $state('form');
  let markdown = $derived.by(()=>{
    if (selectedExample === 'icon') {
      return 'icon.md'
    } else if (selectedExample === 'group') {
      return 'group.md'
    } else if (selectedExample === 'click-handler') {
      return 'click-handler.md'
    } else if (selectedExample === 'number') {
      return 'number.md'
    } else if (selectedExample === 'search') {
      return 'search.md'
    } else if (selectedExample === 'dropdown') {
      return 'dropdown.md'
    } else {
      return 'form.md'
    }
  })

  // for DynamicCodeBlock setup
  let codeBlock = uiHelpers();
  let expand = $state(false);
  let showExpandButton = $derived(isOverflow(markdown, modules));
  const handleExpandClick = () => {
    expand = !expand;
  }
  $effect(() => {
    isOverflow(markdown, modules)
    expand = codeBlock.isOpen;
  });
  // end of DynamicCodeBlock setup
</script>

<H1>Input field</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Input Builder</H2>

<CodeWrapper>
  <div class="mb-6 h-24">
    <Label for="color-example" color={inputColor} class="mb-2 block">Your name</Label>
    <Input id="color-example" bind:value={text} {disabled} color={inputColor} size={inputSize} placeholder={disabled ? "Disabled ": "Placeholder"}>
      {#snippet right()}
        {#if closeBtnStatus}
          <CloseButton onclick={() => (text = '')} />
        {/if}
      {/snippet}
    </Input>
    {#if helperSlot}
    <Helper class="mt-2" color={helperColor}>
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
    {/if}
  </div>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="input_color" bind:group={inputColor} color={colorOption as Input['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as option}
      <Radio labelClass="w-24 my-1" name="input_size" bind:group={inputSize} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Button class="w-48" color="secondary" onclick={changeHelperSlot}>{helperSlot ? 'Remove helper' : 'Add helper'}</Button>
    <Label class="mb-4 w-full font-bold">Helper Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1 {helperSlot ? '' : 'opacity-30 cursor-not-allowed'}" disabled={helperSlot ? false : true} name="helper_color" bind:group={helperColor} color={colorOption as Input['color']} value={colorOption} >{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap gap-2 justify-center md:justify-start">
    <Button class="w-48" onclick={changeDisabled}>{disabled ? 'Remove disabled' : 'Add disabled'}</Button>
    <Button class="w-48" color="secondary" onclick={changeCloseBtnStatus}>{closeBtnStatus ? 'Remove close button' : 'Add close button'}</Button>
  </div>
  {#snippet codeblock()}
  <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper>
    <div class="h-[670px]">
    {#if selectedExample === 'icon'}
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
    {:else if selectedExample === 'group'}
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
    {:else if selectedExample === 'click-handler'}
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
    {:else if selectedExample === 'number'}
    <Label class="mb-4 space-y-2">
      <span>Your lucky number</span>
      <Input type="number" bind:value />
    </Label>
  
    <p>Value: {value}</p>
    <p>Type of value: {typeof value}</p>
    {:else if selectedExample === 'search'}
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

    {:else if selectedExample === 'dropdown'}
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

    {:else}
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
    {/if}
  </div>
  <div class="mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each examples as example}
      <Radio labelClass="w-40 my-1" name="block_style" bind:group={selectedExample} value={example}>{example}</Radio>
    {/each}
  </div>
  {#snippet codeblock()}
  <DynamicCodeBlockHighlight {handleExpandClick} {expand} {showExpandButton} code={modules[`./md/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
