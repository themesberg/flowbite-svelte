---
layout: doc
---

<script>
  import { CtaCard } from "$lib/index";
  let title = "Be The First";
  let headColor = "gray";
  let btns = [
    {
      size: "base",
      name: "Download it",
      type: "purple",
      link: "/about",
      rel: "external",
      rounded: true,
    },
    {
      size: "base",
      name: "Get in on",
      type: "green-outline",
      link: "/#",
      rel: "external",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white">CTA Card: Setup</h1>

```svelte
<script>
  import { CtaCard } from "$lib/index";
  let title = "Be The First";
  let headColor = "gray";
  let btns = [
    {
      size: "base",
      name: "Download it",
      type: "purple",
      link: "/about",
      rel: "external",
      rounded: true,
    },
    {
      size: "base",
      name: "Get in on",
      type: "green-outline",
      link: "/#",
      rel: "external",
    },
  ];
</script>
```

<h1 class="text-3xl w-full dark:text-white">CTA Card</h1>

```svelte
<CtaCard {btns} {title} {headColor}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
  dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
  explicabo non atque!
</CtaCard>
```

<CtaCard {btns} {title} {headColor}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
  dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
  explicabo non atque!
</CtaCard>

