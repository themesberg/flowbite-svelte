<script>
  import { Button, GradientButton, Indicator, Spinner } from "$lib";
  import { EnvelopeSolid, ArrowRightOutline, CartSolid, ThumbsUpSolid } from "flowbite-svelte-icons";

  const btn1 = () => {
    alert("You clicked btn1.");
  };

  const btn2 = () => {
    alert("You touched btn2.");
  };
</script>

<h1 class="my-4 text-3xl">Buttons</h1>

<h2 class="my-4 text-2xl">Setup</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <Button>Default</Button>
  <Button color="alternative">Alternative</Button>
  <Button color="dark">Dark</Button>
  <Button color="light">Light</Button>
  <Button color="blue">Blue</Button>
  <Button color="green">Green</Button>
  <Button color="red">Red</Button>
  <Button color="yellow">Yellow</Button>
  <Button color="purple">Purple</Button>
</div>

<h2 class="my-4 text-2xl">Button with link</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <Button href="/">Home</Button>
</div>

<h2 class="my-4 text-2xl">Button pills</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <Button pill>Default</Button>
  <Button color="alternative" pill>Alternative</Button>
  <Button color="dark" pill>Dark</Button>
  <Button color="light" pill>Light</Button>
  <Button color="blue" pill>Blue</Button>
  <Button color="green" pill>Green</Button>
  <Button color="red" pill>Red</Button>
  <Button color="yellow" pill>Yellow</Button>
  <Button color="purple" pill>Purple</Button>
</div>

<h2 class="my-4 text-2xl">Gradient monochrome</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <GradientButton color="blue">Blue</GradientButton>
  <GradientButton color="green">Green</GradientButton>
  <GradientButton color="cyan">Cyan</GradientButton>
  <GradientButton color="teal">Teal</GradientButton>
  <GradientButton color="lime">Lime</GradientButton>
  <GradientButton color="red">Red</GradientButton>
  <GradientButton color="pink">Pink</GradientButton>
  <GradientButton color="purple">Purple</GradientButton>
</div>

<h2 class="my-4 text-2xl">Gradient duotone</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <GradientButton color="purpleToBlue">Purple to Blue</GradientButton>
  <GradientButton color="cyanToBlue">Cyan to Blue</GradientButton>
  <GradientButton color="greenToBlue">Green to Blue</GradientButton>
  <GradientButton color="purpleToPink">Purple to Pink</GradientButton>
  <GradientButton color="pinkToOrange">Pink to Orange</GradientButton>
  <GradientButton color="tealToLime">Teal to Lime</GradientButton>
  <GradientButton color="redToYellow">Red to Yellow</GradientButton>
</div>

<h2 class="my-4 text-2xl">Gradient outline</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <GradientButton outline color="purpleToBlue">Purple to Blue</GradientButton>
  <GradientButton outline color="cyanToBlue">Cyan to Blue</GradientButton>
  <GradientButton outline color="greenToBlue">Green to Blue</GradientButton>
  <GradientButton outline color="purpleToPink">Purple to Pink</GradientButton>
  <GradientButton outline color="pinkToOrange">Pink to Orange</GradientButton>
  <GradientButton outline color="tealToLime">Teal to Lime</GradientButton>
  <GradientButton outline pill color="redToYellow">Red to Yellow</GradientButton>
  <GradientButton outline color="redToYellow" class="w-72">Red to Yellow</GradientButton>
</div>

<h2 class="my-4 text-2xl">Colored shadows</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <GradientButton shadow color="blue">Blue</GradientButton>
  <GradientButton shadow color="green">Green</GradientButton>
  <GradientButton shadow color="cyan">Cyan</GradientButton>
  <GradientButton shadow color="teal">Teal</GradientButton>
  <GradientButton shadow color="lime">Lime</GradientButton>
  <GradientButton shadow color="red">Red</GradientButton>
  <GradientButton shadow color="pink">Pink</GradientButton>
  <GradientButton shadow color="purple">Purple</GradientButton>
</div>

<h2 class="my-4 text-2xl">Outline buttons</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <Button outline>Default</Button>
  <Button outline color="dark">Dark</Button>
  <Button outline color="green">Green</Button>
  <Button outline color="red">Red</Button>
  <Button outline color="yellow">Yellow</Button>
  <Button outline color="purple">Purple</Button>
</div>

<h2 class="my-4 text-2xl">Button sizes with icons</h2>

<div class="gap-2">
  <Button size="xs"><EnvelopeSolid class="me-2 h-4 w-4" />Extra small</Button>
  <Button size="sm"><EnvelopeSolid class="me-2 h-4 w-4" />Small</Button>
  <Button size="md"><EnvelopeSolid class="me-2 h-5 w-5" />Base</Button>
  <Button size="lg"><EnvelopeSolid class="me-2 h-5 w-5" />Large</Button>
  <Button size="xl"><EnvelopeSolid class="me-2 h-6 w-6" />Extra large</Button>
</div>

<h2 class="my-4 text-2xl">Button with icon</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <Button>
    <CartSolid class="me-2 h-5 w-5" /> Buy Now
  </Button>
  <Button>
    Choose Plan <ArrowRightOutline class="ms-2 h-5 w-5" />
  </Button>
</div>

<h2 class="my-4 text-2xl">Button with label</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <Button class="gap-2">
    Messages
    <Indicator class="bg-primary-200 text-primary-800 text-xs font-semibold" size="lg">2</Indicator>
  </Button>
</div>

<h2 class="my-4 text-2xl">Icon buttons</h2>

<div class="flex flex-wrap items-center gap-2">
  <Button class="p-2!"><ArrowRightOutline class="h-6 w-6" /></Button>
  <Button pill={true} class="p-2!"><ArrowRightOutline class="h-6 w-6" /></Button>
  <Button outline={true} class="p-2!" size="lg">
    <ThumbsUpSolid class="text-primary-700 h-7 w-7" />
  </Button>
  <Button pill={true} outline={true} class="p-2!" size="xl">
    <ThumbsUpSolid class="text-primary-700 h-6 w-6" />
  </Button>
</div>

<h2 class="my-4 text-2xl">Loader</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <Button>
    <Spinner class="me-3" size="4" color="gray" />Loading ...
  </Button>
  <Button color="alternative">
    <Spinner class="me-3" size="4" />Loading ...
  </Button>
</div>

<h2 class="my-4 text-2xl">Disabled</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <Button disabled>Disabled</Button>
</div>

<h2 class="my-4 text-2xl">Events</h2>

<div class="border rounded p-4 my-4 flex flex-wrap gap-2">
  <Button onclick={btn1}>Button 1</Button>
  <Button ontouchstart={btn2}>Button 2</Button>
</div>
