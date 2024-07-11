<script lang="ts">
  import { Textarea } from '$lib';
  
  let colors = 'text-purple-500';
  let technology = $state('svelte');
  let inline1 = $state('second');
  import {
    ArrowRightOutline,
    ListMusicSolid,
    OrderedListOutline,
    ListOutline
  } from 'flowbite-svelte-icons';
  let radioGroup = $state('notes');

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>