<script lang="ts">
  import HighlightCompo from "../utils/HighlightCompo.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import H2 from "../utils/H2.svelte";

  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from "./examples";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
  
  import { ThemeProvider, Accordion, AccordionItem, Alert, Avatar, Badge, Heading, Banner, P, BottomNav, BottomNavItem, Breadcrumb, BreadcrumbItem, ButtonGroup, Button, GradientButton, Card } from "$lib";
  // theme types
  import type { ThemeConfig } from "$lib";

  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";

  const theme: ThemeConfig = {
    accordion: "w-96 text-green-500",
    accordionItem: {
      button: "text-purple-500"
    },
    alert: "bg-green-500 text-white w-48",
    avatar: "bg-blue-50 text-green-700 ring-red-400 dark:ring-red-300",
    badge: {
      base: "bg-purple-400 text-white"
    },
    banner: {
      base: "mx-auto bg-yellow-400 border-blue-600"
    } ,
    bottomNav: {
      inner: "border-red-500"
    },
    bottomNavItem: {
      base: "bg-blue-200",
      span: "bg-green-400"
    },
    breadcrumb: {
      list: "bg-blue-100"
    },
    breadcrumbItem: {
      separator: "text-green-500"
    },
    buttonGroup: "shadow-lg *:ring-primary-700!",
    button: {
      base: "w-48",
      outline: "",
      shadow: ""
    },
    gradientButton: {
      base: "",
      outlineWrapper: ""
    },
    card: {
      base: "bg-red-50 w-72 p-4 sm:p-6 md:p-8",
      image: ""
    },
    heading: 'my-8'
  };
  const theme2 = {
    paragraph: 'me-8 flex items-center text-lg font-normal text-blue-500 md:me-0 dark:text-blue-400'
  }
  const theme3 = {
    heading: 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
  }

  const theme1a = {
    card: {
      base: "bg-blue-50 border-blue-200 p-4"
    },
    heading: "text-3xl text-blue-500",
    p: "text-blue-500 text-lg"
  };

  const theme1b = {
    heading: "text-lg text-purple-600 font-bold"
  };

  const theme1c = {
    paragraph: "text-gray-600 italic text-md"
  };
</script>

<H1>Theme Provider</H1>

<H2>Example 1</H2>
<CodeWrapper>
  <ExampleComponents.Theme1 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Theme1.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Example 2</H2>
<CodeWrapper>
  <ExampleComponents.Theme2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Theme2.svelte"] as string} />
  {/snippet}
</CodeWrapper>
