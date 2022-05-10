---
layout: iconLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Breadcrumb } from '$lib/index'
  import Facebook from '../utils/icons/Facebook.svelte'
  import Github from '../utils/icons/Github.svelte'
  import Git from '../utils/icons/Git.svelte'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Icons',
      href:'/icons/'
    },
    {
      label:'Simple-icons',
      href:'/icons/simple-icons'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Simple-icons</h1>

<p class=" dark:text-white py-4">Svelte-simpleicons has more than 2100 icons and they are monochrome icons.</p>

<Htwo label="Installing Simple-icons" />

```sh
npm i -D svelte-simples
```

<Htwo label="Examples" />

<ExampleDiv class="flex justify-center">
<Facebook class="mx-2" color="#4287f5" size="30" />
<Github color="#66f5fa" size="30"/>  
<Facebook class="mx-2" color="#02fa0b" size="30"/>
<Github class="mx-2" color="#6e7070" size="30"/>
<Git class="mx-2" color="#bc02fa" size="30"/>
<Git class="mx-2" color="#fa0202" size="30"/>
</ExampleDiv>

```html
<script>
import { Facebook, Github, Git } from 'svelte-simples';
</script>
<Facebook class="mx-2" color="#4287f5" size="30" />
<Github color="#66f5fa" size="30"/>  
<Facebook class="mx-2" color="#02fa0b" size="30"/>
<Github class="mx-2" color="#6e7070" size="30"/>
<Git class="mx-2" color="#bc02fa" size="30"/>
<Git class="mx-2" color="#fa0202" size="30"/>
```

<Htwo label="Props" />

```js
let class = ""
let size = "24"
let color = "#1877F2"
```

