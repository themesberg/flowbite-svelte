---
layout: avatarLayout
---

<script>
  import { Avatar } from "$lib/index"
  let avatar6 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 6
  }
  let avatar8= {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 8
  }
  let avatar12 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 12
  }
  let avatar16 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 16
  }
  let avatar24 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 24
  }
  let avatar48 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 48
  }

  let avatar2 = {
    src: '/images/profile-picture-2.webp',
    alt: 'My avatar 2',
    size: 12,
    round: true
  }
  let avatar3 = {
    src: '/images/profile-picture-3.webp',
    alt: 'My avatar 3',
    size: 12,
    border: true,
  }
  let avatar4 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar 4',
    size: 12,
    border: true,
    round: true
  }
  let avatarText ={
    src: '/images/profile-picture-2.webp',
    alt: 'My avatar 4',
    size: 12,
    border: true,
    round: true,
    header:'Jese Leos',
    text:'Joined in August 2014'
  }
</script>  

<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Avatar</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Size</h2>

<p class="text-lg w-full text-gray-900 dark:text-white py-4">Select size from  6 | 8 | 12 | 16 | 24 | 48.</p>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<div class="flex justify-center space-x-4">
<Avatar avatar={avatar6} />
<Avatar avatar={avatar8}/>
<Avatar avatar={avatar12}/>
<Avatar avatar={avatar16}/>
<Avatar avatar={avatar24}/>
<Avatar avatar={avatar48}/>
</div>
</div>

```html
<script>
  import { Avatar } from "$lib/index"
  let avatar6 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 6
  }
  let avatar8= {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 8
  }
  let avatar12 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 12
  }
  let avatar16 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 16
  }
  let avatar24 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 24
  }
  let avatar48 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 48,
  }

</script>

<Avatar avatar={avatar6} />
<Avatar avatar={avatar8}/>
<Avatar avatar={avatar12}/>
<Avatar avatar={avatar16}/>
<Avatar avatar={avatar24}/>
<Avatar avatar={avatar48}/>

```

<h2 class="text-2xl w-full dark:text-white py-8">Border and round</h2>

<p class="text-lg w-full text-gray-900 dark:text-white py-4">Set true to border and/or round.</p>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <div class="flex justify-center space-x-4">
    <Avatar avatar={avatar2} />
    <Avatar avatar={avatar3} />
    <Avatar avatar={avatar4} />
  </div>
</div>

```html
<script>
  let avatar2 = {
    src: '/images/profile-picture-2.webp',
    alt: 'My avatar 2',
    size: 12,
    round: true
  }
  let avatar3 = {
    src: '/images/profile-picture-3.webp',
    alt: 'My avatar 3',
    size: 12,
    border: true,
  }
  let avatar4 = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar 4',
    size: 12,
    border: true,
    round: true
  }
</script>  

<Avatar avatar={avatar2} />
<Avatar avatar={avatar3} />
<Avatar avatar={avatar4} />
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <Avatar placehoder />

</div>


<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Avatar avatar={avatarText} />
</div>





<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

```js
test
```