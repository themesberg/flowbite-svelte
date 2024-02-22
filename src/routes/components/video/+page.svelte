<script lang="ts">
  import { Video } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<H1>Video</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Video player</H2>
<CodeWrapper>
  <Video src="/videos/flowbite.mp4" controls trackSrc="flowbite.mp4" />
</CodeWrapper>

<HighlightCompo code={modules['./md/video-player.md'] as string} />

<H2>Autoplay</H2>

<CodeWrapper>
  <Video src="/videos/flowbite.mp4" autoplay controls trackSrc="flowbite.mp4" />
</CodeWrapper>

<HighlightCompo code={modules['./md/autoplay.md'] as string} />

<H2>Muted</H2>
<CodeWrapper>
  <Video src="/videos/flowbite.mp4" autoplay muted controls trackSrc="flowbite.mp4" />
</CodeWrapper>

<HighlightCompo code={modules['./md/muted.md'] as string} />

<H2>Sizes</H2>
<H3>Width</H3>
<CodeWrapper>
  <Video src="/videos/flowbite.mp4" controls class="w-96" trackSrc="flowbite.mp4" />
</CodeWrapper>

<HighlightCompo code={modules['./md/width.md'] as string} />

<H3>Height</H3>
<CodeWrapper>
  <Video src="/videos/flowbite.mp4" controls class="h-80" trackSrc="flowbite.mp4" />
</CodeWrapper>

<HighlightCompo code={modules['./md/height.md'] as string} />

<H3>Responsive</H3>
<CodeWrapper>
  <Video src="/videos/flowbite.mp4" controls class="h-auto w-full max-w-full" trackSrc="flowbite.mp4" />
</CodeWrapper>

<HighlightCompo code={modules['./md/responsive.md'] as string} />

<H2>Custom styles</H2>
<CodeWrapper>
  <Video
    src="/videos/flowbite.mp4"
    controls
    class="h-auto w-full max-w-full rounded-3xl border border-gray-200 dark:border-gray-700"
    trackSrc="flowbite.mp4"
  />
</CodeWrapper>

<HighlightCompo code={modules['./md/custom-style.md'] as string} />
