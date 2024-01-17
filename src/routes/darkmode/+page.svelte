<script>
    import {Darkmode} from '$lib'
    import HighlightCompo from '../components/HighlightCompo.svelte';
    import CodeWrapper from '../components/CodeWrapper.svelte';
    import { ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';
    import darkmode from './md/darkmode.md?raw';
    import setup from './md/setup.md?raw'
    import initialtheme from './md/initialtheme.md?raw'
    import modeicon from './md/modeicon.md?raw'
</script>

<h1>Darkmode</h1>

<h2>Setup</h2>

<HighlightCompo code={setup} />

<h2>Default Darkmode</h2>

<CodeWrapper>
<Darkmode />
</CodeWrapper>

<HighlightCompo code={darkmode} />

<h2>Initial theme</h2>

Add the following to `app.html`:

<HighlightCompo code={initialtheme} />

<h2>Switcher style</h2>

Use the btnClass prop to overwrite the default classes 
or just use class attribute to append classes to the default classes.

<h2>Mode icon</h2>

Use the lightIcon and darkIcon slots to change icons:

<CodeWrapper>
<Darkmode class="text-lg">
    <ThumbsUpSolid slot="lightIcon" color="red" />
    <ThumbsDownSolid slot="darkIcon" color="green" />
</Darkmode>
</CodeWrapper>

<HighlightCompo code={modeicon} />