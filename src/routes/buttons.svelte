<script>
  import { Button, Spinner } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HiArrowRightOutline, HiHomeSolid, HiShoppingCartSolid } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default button</span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button color="alternative">Alternative</Button>
        <Button color="dark">Dark</Button>
        <Button color="light">Light</Button>
        <Button color="green">Green</Button>
        <Button color="red">Red</Button>
        <Button color="yellow">Yellow</Button>
        <Button color="purple">Purple</Button>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Button>Default</Button>
  <Button color="alternative">Alternative</Button>
  <Button color="dark">Dark</Button>
  <Button color="light">Light</Button>
  <Button color="green">Green</Button>
  <Button color="red">Red</Button>
  <Button color="yellow">Yellow</Button>
  <Button color="purple">Purple</Button>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Button pills</span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Button pill={true}>Default</Button>
        <Button color="alternative" pill={true}>Alternative</Button>
        <Button color="dark" pill={true}>Dark</Button>
        <Button color="light" pill={true}>Light</Button>
        <Button color="green" pill={true}>Green</Button>
        <Button color="red" pill={true}>Red</Button>
        <Button color="yellow" pill={true}>Yellow</Button>
        <Button color="purple" pill={true}>Purple</Button>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Button pill={true}>Default</Button>
  <Button color="alternative" pill={true}>Alternative</Button>
  <Button color="dark" pill={true}>Dark</Button>
  <Button color="light" pill={true}>Light</Button>
  <Button color="green" pill={true}>Green</Button>
  <Button color="red" pill={true}>Red</Button>
  <Button color="yellow" pill={true}>Yellow</Button>
  <Button color="purple" pill={true}>Purple</Button>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Button Monochrome</span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Button gradientMonochrome="blue">Blue</Button>
        <Button gradientMonochrome="green">Green</Button>
        <Button gradientMonochrome="cyan">Cyan</Button>
        <Button gradientMonochrome="teal">Teal</Button>
        <Button gradientMonochrome="lime">Lime</Button>
        <Button gradientMonochrome="red">Red</Button>
        <Button gradientMonochrome="pink">Pink</Button>
        <Button gradientMonochrome="purple">Purple</Button>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Button gradientMonochrome="blue">Blue</Button>
  <Button gradientMonochrome="green">Green</Button>
  <Button gradientMonochrome="cyan">Cyan</Button>
  <Button gradientMonochrome="teal">Teal</Button>
  <Button gradientMonochrome="lime">Lime</Button>
  <Button gradientMonochrome="red">Red</Button>
  <Button gradientMonochrome="pink">Pink</Button>
  <Button gradientMonochrome="purple">Purple</Button>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Gradient duo-tone</span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
        <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
        <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
        <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
        <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
        <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
        <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
  <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
  <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
  <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
  <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
  <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
  <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Outline</span>
    <Card>
      <div class="flex flex-wrap items-center gap-2">
        <Button outline={true} gradientDuoTone="purpleToBlue">Purple to Blue</Button>
        <Button outline={true} gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
        <Button outline={true} gradientDuoTone="greenToBlue">Green to Blue</Button>
        <Button outline={true} gradientDuoTone="purpleToPink">Purple to Pink</Button>
        <Button outline={true} gradientDuoTone="pinkToOrange">Pink to Orange</Button>
        <Button outline={true} gradientDuoTone="tealToLime">Teal to Lime</Button>
        <Button outline={true} gradientDuoTone="redToYellow">Red to Yellow</Button>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap items-center gap-2">
  <Button outline={true} gradientDuoTone="purpleToBlue">Purple to Blue</Button>
  <Button outline={true} gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
  <Button outline={true} gradientDuoTone="greenToBlue">Green to Blue</Button>
  <Button outline={true} gradientDuoTone="purpleToPink">Purple to Pink</Button>
  <Button outline={true} gradientDuoTone="pinkToOrange">Pink to Orange</Button>
  <Button outline={true} gradientDuoTone="tealToLime">Teal to Lime</Button>
  <Button outline={true} gradientDuoTone="redToYellow">Red to Yellow</Button>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Button sizes</span>
    <Card>
      <div class="flex flex-wrap items-center gap-2">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Base</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra large</Button>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap items-center gap-2">
  <Button size="xs">Extra small</Button>
  <Button size="sm">Small</Button>
  <Button size="md">Base</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra large</Button>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Buttons with icon</span>
    <Card>
      <div class="flex flex-wrap items-center gap-2">
        <Button>
          <HiShoppingCartSolid className="mr-2 h-5 w-5" />
          Buy now
        </Button>
        <Button>
          Choose plan
          <HiArrowRightOutline className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap items-center gap-2">
  <Button>
    <HiShoppingCartSolid className="mr-2 h-5 w-5" />
    Buy now
  </Button>
  <Button>
    Choose plan
    <HiArrowRightOutline className="ml-2 h-5 w-5" />
  </Button>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Buttons with label</span>
    <Card>
      <Button label="2">Messages</Button>
      <HighlightSvelte code={`<Button label="2">Messages</Button>`} />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Icon buttons</span>
    <Card>
      <div class="flex flex-wrap items-center gap-2">
        <Button icon={HiArrowRightOutline} />
        <Button icon={HiArrowRightOutline} pill={true} />
        <Button icon={HiArrowRightOutline} outline={true} />
        <Button icon={HiArrowRightOutline} pill={true} outline={true} />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap items-center gap-2">
  <Button icon={HiArrowRightOutline} />
  <Button icon={HiArrowRightOutline} pill={true} />
  <Button icon={HiArrowRightOutline} outline={true} />
  <Button icon={HiArrowRightOutline} pill={true} outline={true} />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Loader</span>
    <Card>
      <div class="flex flex-wrap items-center gap-2">
        <Button>
          <Spinner class="mr-3" size="sm" light={true} />
          Loading ...
        </Button>
        <Button outline={true}>
          <Spinner class="mr-3" size="sm" light={true} />
          Loading ...
        </Button>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap items-center gap-2">
  <Button>
    <Spinner class="mr-3" size="sm" light={true} />
    Loading ...
  </Button>
  <Button outline={true}>
    <Spinner class="mr-3" size="sm" light={true} />
    Loading ...
  </Button>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Disabled</span>
    <Card>
      <Button disabled={true}>Disabled button</Button>
      <HighlightSvelte code={`<Button disabled={true}>Disabled button</Button>`} />
    </Card>
  </div>
</div>
