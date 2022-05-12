---
layout: toastLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
import { Toast, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import { quintOut, elasticOut } from 'svelte/easing';
import {FireOutline, CheckCircleSolid, PlusCircleOutline,ArchiveSolid} from 'svelte-heros'
import componentProps from '../props/Toast.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Toasts',
      href:'/toasts/'
    }
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Toast Components</h1>

<p>Import the Toast component and Icons.</p>

```html
<script>
import {Toast} from 'flowbite-svelte'
import {FireOutline, CheckCircleSolid, PlusCircleOutline,ArchiveSolid} from 'svelte-heros'
</script>
```

<Htwo label="Examples" />

<p>Use fade, fly, slide, or blur for transitionType.</p>

<h3>Fade examples</h3>

<ExampleDiv>
  <Toast>
    <span slot="icon">
    <FireOutline />
    </span>
    <span slot="text">
      Transition type: fade
    </span>
  </Toast>
</ExampleDiv>

```html
<Toast>
  <span slot="icon">
  <FireOutline />
  </span>
  <span slot="text">
    Transition type: fade
  </span>
</Toast>
```

<h3>Slide examples</h3>

<p>You can use one of <a href="https://svelte.dev/docs#run-time-svelte-easing" target="_blank" >Svelte/easing</a>.</p>

<ExampleDiv>
   <Toast transitionType="slide" iconColor='red'>
    <span slot="icon">
    <CheckCircleSolid class="text-red-500"/>
    </span>
    <span slot="text">
      Transition type: slide
    </span>
  </Toast>
</ExampleDiv>

<ExampleDiv>
   <Toast transitionType="slide" iconColor='red' transitionParams="{{delay: 250, duration: 300, easing: quintOut}}">
    <span slot="icon">
    <CheckCircleSolid class="text-red-500"/>
    </span>
    <span slot="text">
      Transition type: slide, delay: 250, duration: 300, easing: quintOut
    </span>
  </Toast>
</ExampleDiv>

<ExampleDiv>
   <Toast transitionType="slide" iconColor='red' transitionParams="{{delay: 250, duration: 2000, easing: elasticOut}}">
    <span slot="icon">
    <CheckCircleSolid class="text-red-500"/>
    </span>
    <span slot="text">
      Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
    </span>
  </Toast>
</ExampleDiv>

```html
<Toast transitionType="slide" iconColor='red'>
  <span slot="icon">
  <CheckCircleSolid class="text-red-500"/>
  </span>
  <span slot="text">
    Transition type: slide
  </span>
</Toast>

 <Toast transitionType="slide" iconColor='red' transitionParams="{{delay: 250, duration: 300, easing: quintOut}}">
  <span slot="icon">
  <CheckCircleSolid class="text-red-500"/>
  </span>
  <span slot="text">
    Transition type: slide, delay: 250, duration: 300, easing: quintOut
  </span>
</Toast>

<Toast transitionType="slide" iconColor='red' transitionParams="{{delay: 250, duration: 2000, easing: elasticOut}}">
  <span slot="icon">
  <CheckCircleSolid class="text-red-500"/>
  </span>
  <span slot="text">
    Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
  </span>
</Toast>
```

<h3>Blur examples</h3>

<ExampleDiv>
  <Toast transitionType="blur" iconColor='purple' transitionParams="{{amount: 10}}">
    <span slot="icon">
    <PlusCircleOutline class="text-purple-500"/>
    </span>
    <span slot="text">
      Transition type: blur, amount: 10
    </span>
  </Toast>
</ExampleDiv>

<ExampleDiv>
  <Toast transitionType="blur" iconColor='purple' transitionParams="{{amount: 50, delay: 1000}}">
    <span slot="icon">
    <PlusCircleOutline class="text-purple-500"/>
    </span>
    <span slot="text">
      Transition type: blur, amount: 50, delay 1000
    </span>
  </Toast>
</ExampleDiv>

```html
<Toast transitionType="blur" iconColor='purple' transitionParams="{{amount: 10}}">
  <span slot="icon">
  <PlusCircleOutline class="text-purple-500"/>
  </span>
  <span slot="text">
    Transition type: blur, amount: 10
  </span>
</Toast>

<Toast transitionType="blur" iconColor='purple' transitionParams="{{amount: 50, delay: 1000}}">
  <span slot="icon">
  <PlusCircleOutline class="text-purple-500"/>
  </span>
  <span slot="text">
    Transition type: blur, amount: 50, delay 1000
  </span>
</Toast>
```

<h3>Fly examples</h3>

<ExampleDiv>
  <Toast transitionType="fly" transitionParams="{{x: 200}}" iconColor="green">
    <span slot="icon">
    <ArchiveSolid  class="text-green-500"/>
    </span>
    <span slot="text">
      Transition type: fly right
    </span>
  </Toast>
</ExampleDiv>

<ExampleDiv>
  <Toast transitionType="fly" transitionParams="{{y: 200}}" iconColor="green">
    <span slot="icon">
    <ArchiveSolid  class="text-green-500"/>
    </span>
    <span slot="text">
      Transition type: fly down
    </span>
  </Toast>
</ExampleDiv>

```html
<Toast transitionType="fly" transitionParams="{{x: 200}}" iconColor="green">
  <span slot="icon">
  <ArchiveSolid  class="text-green-500"/>
  </span>
  <span slot="text">
    Transition type: fly right
  </span>
</Toast>

<Toast transitionType="fly" transitionParams="{{y: 200}}" iconColor="green">
  <span slot="icon">
  <ArchiveSolid  class="text-green-500"/>
  </span>
  <span slot="text">
    Transition type: fly down
  </span>
</Toast>
```

<Htwo label="Icons" />

<p>Use any <a href="/icons">icon components.</a></p>

```html
<script>
import {Toast} from 'flowbite-svelte'
import {FireIconOutline, CheckCircleIconSolid, PlusCircleIconOutline,ArchiveIconSolid} from 'svelte-heros'
</scrip>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>