<script>
  import { Button, GradientButton } from '$lib'
  import HighlightCompo from '../components/HighlightCompo.svelte';
  import button1 from '../markdowns/buttons/button1.md?raw'
  import button2 from '../markdowns/buttons/button2.md?raw'
  // import gradientButton from '../markdowns/buttons/gradientButton.md?raw'
</script>

<Button>Default</Button>
<Button color="alternative">Alternative</Button>
<Button color="dark">Dark</Button>
<Button color="light">Light</Button>
<Button color="blue">Blue</Button>
<Button color="green">Green</Button>
<Button color="red">Red</Button>
<Button color="yellow">Yellow</Button>
<Button color="purple">Purple</Button>

<HighlightCompo code={button1} />

<Button pill>Default</Button>
<Button color="alternative" pill>Alternative</Button>
<Button color="dark" pill>Dark</Button>
<Button color="light" pill>Light</Button>
<Button color="blue" pill>Blue</Button>
<Button color="green" pill>Green</Button>
<Button color="red" pill>Red</Button>
<Button color="yellow" pill>Yellow</Button>
<Button color="purple" pill>Purple</Button>

<HighlightCompo code={button2} />


