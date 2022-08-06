---
layout: toastLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Toast, Breadcrumb, BreadcrumbItem, Avatar, Button } from '$lib'
  import { quintOut, elasticOut } from 'svelte/easing';
  import { Fire, CheckCircle, PlusCircle, Archive, Home, Mail, Refresh } from 'svelte-heros'
  
  import componentProps from '../props/Toast.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']

	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let show = true;
  let counter = 6;

  function trigger() {
    show = true;
    counter = 6;
    timeout();
  }

  function timeout() {
    if (--counter > 0)
      return setTimeout(timeout, 1000);
    show = false;
  }
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Toasts</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Toast</h1>

<CompoDescription>Push notifications to your users using the toast component and choose from multiple sizes, colors, styles, and positions</CompoDescription>

<ExampleDiv>
<GitHubSource href="toasts/Toast.svelte">Toast</GitHubSource>
</ExampleDiv>

The toast component can be used to enhance your website’s interactivity by pushing notifications to your visitors. You can choose from multiple styles, colors, sizes, and positions and even dismiss the component.

<Htwo label="Setup" />

```html
<script>
	import { Toast } from 'flowbite-svelte';
</script>
```

<Htwo label="Default toast" />

Use this simple toast component with an icon, message, and dismissable close button to show alert messages to your website visitors.

<ExampleDiv>
  <Toast>
    <Fire slot="icon"/>
    Dismissable user notification.
  </Toast>
</ExampleDiv>

```html
<Toast>
	<Fire slot="icon" />
	Dismissable user notification.
</Toast>
```

<Htwo label="Simple toast" />

This component can be used to show simple messages and notifications without the use of a close button.

<ExampleDiv>
  <Toast simple={true}>
    <Mail slot="icon"/>
    New message arrived.
  </Toast>
</ExampleDiv>

```html
<Toast simple="{true}">
	<Mail slot="icon" />
	New message arrived.
</Toast>
```

<Htwo label="Icons" />

For the right positioning of the icon use: <span class="font-mono italic">slot="icon"</span>.

Icons are wrapped with blue background by default. Set the color name property to change it. Note, that if you want no color at all set property to empty string.

Use any <a href="/icons">icon components.</a>

<ExampleDiv>
  <Toast>
    <Archive slot="icon"/>
    Default color is blue.
  </Toast>
<p></p>
  <Toast  color="green">
    <Archive slot="icon"/>
    Color set to green.
  </Toast>
<p></p>
  <Toast  color="">
    <Archive slot="icon"/>
    No color set.
  </Toast>
<p></p>
  <Toast>
    No icon at all.
  </Toast>
</ExampleDiv>

```html
<Toast>
	<Archive slot="icon" />
	Default color is blue.
</Toast>

<Toast color="green">
	<Archive slot="icon" />
	Color set to green.
</Toast>

<Toast color="">
	<Archive slot="icon" />
	No color set.
</Toast>

<Toast> No icon at all. </Toast>
```

<Htwo label="Autohide example" />

<ExampleDiv>
<div class="flex gap-10">
  <Button on:click={trigger} class="my-3">Restart</Button>

  <Toast simple transition="slide" bind:visible={show}>
    <CheckCircle slot="icon"/> Autohide in {counter}s.
  </Toast>
</div>
</ExampleDiv>

```html
<script>
  let show = true;
  let counter = 6;

  function trigger() {
    show = true;
    counter = 6;
    timeout();
  }

  function timeout() {
    if (--counter > 0)
      return setTimeout(timeout, 1000);
    show = false;
  }
</script>

<Button on:click={trigger} class="my-3">Restart</Button>

<Toast simple transition="slide" bind:visible={show}>
  <CheckCircle slot="icon"/> Autohide in {counter}s.
</Toast>
```

<Htwo label="Transitions" />

You can use one of <a href="https://svelte.dev/docs#run-time-svelte-easing" target="_blank" >Svelte/easing</a>.

<ExampleDiv>
   <Toast transition="slide">
    <CheckCircle slot="icon"/>
    Transition type: slide
  </Toast>
<p></p>
  <Toast transition="slide" params="{{delay: 250, duration: 300, easing: quintOut}}">
    <CheckCircle slot="icon"/>
    Transition type: slide, delay: 250, duration: 300, easing: quintOut
  </Toast>
<p></p>
   <Toast transition="slide" params="{{delay: 250, duration: 2000, easing: elasticOut}}">
    <CheckCircle slot="icon"/>
    Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
  </Toast>
</ExampleDiv>

```html
<Toast transition="slide">
	<CheckCircle slot="icon" />
	Transition type: slide
</Toast>

<Toast transition="slide" params="{{delay: 250, duration: 300, easing: quintOut}}">
	<CheckCircle slot="icon" />
	Transition type: slide, delay: 250, duration: 300, easing: quintOut
</Toast>

<Toast transition="slide" params="{{delay: 250, duration: 2000, easing: elasticOut}}">
	<CheckCircle slot="icon" />
	Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
</Toast>
```

<h3>Blur examples</h3>

<ExampleDiv>
  <Toast transition="blur" color='purple' params="{{amount: 10}}">
    <PlusCircle slot="icon"/>
    Transition type: blur, amount: 10
  </Toast>
<p></p>
  <Toast transition="blur" color='purple' params="{{amount: 50, delay: 1000}}">
    <PlusCircle slot="icon"/>
    Transition type: blur, amount: 50, delay 1000
  </Toast>
</ExampleDiv>

```html
<Toast transition="blur" color="purple" params="{{amount: 10}}">
	<PlusCircle slot="icon" />
	Transition type: blur, amount: 10
</Toast>

<Toast transition="blur" color="purple" params="{{amount: 50, delay: 1000}}">
	<PlusCircle slot="icon" />
	Transition type: blur, amount: 50, delay 1000
</Toast>
```

<h3>Fly examples</h3>

<ExampleDiv>
  <Toast transition="fly" params="{{x: 200}}" color="green">
    <Archive slot="icon"/>
    Transition type: fly right
  </Toast>
<p></p>
  <Toast transition="fly" params="{{y: 200}}" color="green">
    <Archive slot="icon"/>
    Transition type: fly down
  </Toast>
</ExampleDiv>

```html
<Toast transition="fly" params="{{x: 200}}" color="green">
	<Archive slot="icon" />
	Transition type: fly right
</Toast>

<Toast transition="fly" params="{{y: 200}}" color="green">
	<Archive slot="icon" />
	Transition type: fly down
</Toast>
```

<Htwo label="Undo button" />

Use this toast component to also show an “undo” button to reverse the action of the user.

<ExampleDiv>
  <Toast>
    <div class="inline-flex justify-between items-center w-full">
    Conversation archived.
    <a class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="/">Undo</a>
    </div>
  </Toast>
</ExampleDiv>

```html
<Toast>
  <div class="inline-flex justify-between items-center w-full">
  Conversation archived.
  <a class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="/">Undo</a>
  </div>
</Toast>
```

<Htwo label="Extra content" />
Use the <span class="font-mono italic">slot="extra"</span> to add some more arbitrary content in the toast.

<h3>Toast message</h3>

This component can be used to show messages and a CTA button when receiveing chat messages, comment notifications, and other use cases.

<ExampleDiv>
  <Toast>
      <div class="flex" slot="extra">
        <Avatar avatar={{src: '/images/profile-picture-1.webp', alt: 'My avatar 2', size: 12, round: true}}/>
        <div class="ml-3 text-sm font-normal">
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
            <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
            <Button size="xs">Replay</Button>
        </div>
    </div>
  </Toast>
</ExampleDiv>

```html
<Toast>
	<div class="flex" slot="extra">
		<Avatar avatar={{src: '/images/profile-picture-1.webp', alt: 'My avatar 2', size: 12, round:
		true}}/>
		<div class="ml-3 text-sm font-normal">
			<span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
			<div class="mb-2 text-sm font-normal">
				Hi Neil, thanks for sharing your thoughts regarding Flowbite.
			</div>
			<Button size="xs">Replay</Button>
		</div>
	</div>
</Toast>
```

<h3>Push notification</h3>

This component can be used to show notifications for an action from another user such as posting a comment, receiving a like, being tagged. You can show an avatar, icon, message, and the time of the notification.

<ExampleDiv>
  <Toast>
    <span class="font-semibold text-gray-900 dark:text-white">New notification</span>
    <div class="flex items-center mt-3" slot="extra">
      <Avatar avatar={{src: '/images/profile-picture-3.webp', alt: 'My avatar 2', size: 12, round: true}}/>
      <div class="ml-3">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
        <div class="text-sm font-normal">commmented on your photo</div>
        <span class="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
      </div>
    </div>
  </Toast>
</ExampleDiv>

```html
<Toast>
	<span class="font-semibold text-gray-900 dark:text-white">New notification</span>
	<div class="flex items-center mt-3" slot="extra">
		<Avatar avatar={{src: '/images/profile-picture-3.webp', alt: 'My avatar 2', size: 12, round:
		true}}/>
		<div class="ml-3">
			<h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
			<div class="text-sm font-normal">commmented on your photo</div>
			<span class="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
		</div>
	</div>
</Toast>
```

<h3>Interactive toast</h3>

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

<p class="italic">This is an example with the icon and extra content at the same time.</p>

<ExampleDiv>
  <Toast>
    <Refresh slot="icon"/>
    <span class="font-semibold text-gray-900 dark:text-white">Update available</span>
    <div class="mt-3" slot="extra">
        <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
        <div class="grid grid-cols-2 gap-2">
            <Button size="xs" class="w-full">Update</Button>
            <Button size="xs" class="w-full" color="dark">Not now</Button>
        </div>
    </div>
  </Toast>
</ExampleDiv>

```html
<Toast>
	<Refresh slot="icon" />
	<span class="font-semibold text-gray-900 dark:text-white">Update available</span>
	<div class="mt-3" slot="extra">
		<div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
		<div class="grid grid-cols-2 gap-2">
			<Button size="xs" class="w-full">Update</Button>
			<Button size="xs" class="w-full" color="dark">Not now</Button>
		</div>
	</div>
</Toast>
```

<Htwo label="Positioning" />

Use the position property to position these toast components relative to the main content wrapper element from your document.

<ExampleDiv>
<div class="relative h-56">
  <Toast simple position="tl">Top left positioning.</Toast>
  <Toast simple position="tr">Top right positioning.</Toast>
  <Toast simple position="bl">Bottom left positioning.</Toast>
  <Toast simple position="br">Bottom right positioning.</Toast>
</div>
</ExampleDiv>

```html
<Toast simple position="tl">Top left positioning.</Toast>
<Toast simple position="tr">Top right positioning.</Toast>
<Toast simple position="bl">Bottom left positioning.</Toast>
<Toast simple position="br">Bottom right positioning.</Toast>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow {items} rowState='hover' />
</TableProp>
